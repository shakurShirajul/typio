import { useEffect, useState } from "react";
import PopularKeyboard from "./PopularKeyboard";

const PopularKeyboards = () => {
  const [keyboards, setKeyboards] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/shakurShirajul/svg-collection/refs/heads/main/keyboards.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setKeyboards(data);
      })
      .catch((error) => console.log("Error fetching data,", error));
  }, []);

  return (
    <>
      <div>
        <div className="min-h-screen flex justify-center items-center bg-looper-pattern bg-cover bg-no-repeat py-20">
          <div className="space-y-10">
            <div>
              <h1 className="text-7xl text-center font-semibold  bg-gradient-to-r from-[#60aef8] via-[#f46692] to-[#f3a562] bg-clip-text text-transparent">
                Popular Keyboards
              </h1>
            </div>
            <div className="grid grid-cols-3 gap-10 ">
              {keyboards.map((keyboard) => (
                <PopularKeyboard keyboard={keyboard} key={keyboard.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PopularKeyboards;
