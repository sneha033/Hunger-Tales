import { Img_Cdn_Url } from "../constants";
import { restaurantList } from "../constants";
import { useState } from "react";

// const searchTxt ="Hello";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  costForTwoString,
}) => {
  return (
    <div className="card">
      {<img src={Img_Cdn_Url + cloudinaryImageId} />}
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{costForTwoString}</h4>
    </div>
  );
};

function filterResto(restaurantsObj, searchTxt) {
  const filterdata = restaurantsObj.filter((restaurant) => 
    restaurant?.data?.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
  console.log(filterdata);
  return filterdata;
}

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [searchClick, setSearchClick] = useState("true");
  const [restaurantsObj, setRestaurantsObj] = useState(restaurantList);
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search for the restaurants"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterResto(restaurantsObj, searchTxt);
            console.log(data);
            setRestaurantsObj(data);
          }}
          //   onClick={() => {
          //     if (searchClick === "true") {
          //       setSearchClick("false");
          //     } else {
          //       setSearchClick("true");
          //     }
          //   }}
        >
          Search
        </button>
        {/* <h6>{searchClick}</h6> */}
      </div>
      <div className="resto">
        {restaurantsObj.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
