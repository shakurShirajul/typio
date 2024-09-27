import Link from "next/link";
import Navbar from "../Shared/Navbar";

// import HeroVideo from '@/assets/video/HeroVideo.mp4'
const Hero = () => {
  return (
    <>
      <div>
        <div></div>
        <div className="relative h-screen w-full">
          <div className="absolute left-0 right-0 z-[100] text-white">
            <Navbar />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000080]"></div>
          {/* <video
            src="/video/HeroVideo.mp4"
            className="w-full h-screen object-cover"
            autoPlay
            loop
            muted
          /> */}
          <img
            src="https://www.keychron.com/cdn/shop/files/Q3-HE-launch1.jpg?v=1726305970&width=1920"
            alt=""
            className="h-full w-full bg-cover"
          />
          <div className="absolute h-full space-y-5 w-full top-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-6xl font-bold">Test your typing skills!</h1>
            {/* <p className="text-lg lg:text-2xl mt-4">
              Discover amazing products and services.
            </p> */}
            <Link href="/practice"><button className="btn font-semibold">START</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
