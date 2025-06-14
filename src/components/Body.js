import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //   const [listOfRestaurants, setListOfRestaurants] = useState([
  //     {
  //       id: "647279",
  //       name: "La Pino'z Pizza",
  //       cloudinaryImageId: "d20fdc8c86aa8bd0638f47dd013d46f9",
  //       locality: "Sector 51",
  //       areaName: "Sector 51",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Pizzas", "Pastas", "Italian"],
  //       avgRating: 4,
  //       parentId: "4961",
  //       avgRatingString: "4.0",
  //       totalRatingsString: "5.3K+",
  //       sla: {
  //         deliveryTime: 29,
  //         lastMileTravel: 2.8,
  //         serviceability: "SERVICEABLE",
  //         slaString: "25-30 mins",
  //         lastMileTravelString: "2.8 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //     {
  //       id: "647289",
  //       name: "Baapu Pizza",
  //       cloudinaryImageId: "d20fdc8c86aa8bd0638f47dd013d46f9",
  //       locality: "Sector 51",
  //       areaName: "Sector 51",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Pizzas", "Pastas", "Italian"],
  //       avgRating: 4.1,
  //       parentId: "4961",
  //       avgRatingString: "4.1",
  //       totalRatingsString: "5.3K+",
  //       sla: {
  //         deliveryTime: 29,
  //         lastMileTravel: 2.8,
  //         serviceability: "SERVICEABLE",
  //         slaString: "25-30 mins",
  //         lastMileTravelString: "2.8 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   ]);

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  // let listOfRestaurants = [];
  return (
    <div className="body">
      {/* <div className="search"> Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
