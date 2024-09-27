import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const PopularKeyboard = ({ keyboard }) => {
  console.log("keybaord");
  return (
    <>
      <div>
        <div className="card w-96 bg-base-100 border shadow-2xl">
          <figure className="px-5 pt-5">
            <img
              src={keyboard.image}
              alt="Shoes"
              className="max-h-36 w-full border rounded-lg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl">{keyboard.name}</h2>
            <div>
              <p>Brand: {keyboard.brand}</p>
              <p>Switch: {keyboard.switchType}</p>
            </div>
            <div className="grid grid-cols-2">
              <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
                <Rating
                  name="text-feedback"
                  value={keyboard.rating}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </Box>
              <div className="">
                  <p className="text-2xl font-semibold text-end text-green-600">$ {keyboard.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PopularKeyboard;
