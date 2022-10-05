import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ListItem } from "../components/ListItem";
import { Searchbar } from "../components/Searchbar";
import { IRootReducer } from "../shared/reducers";
import { stateInterface } from "../shared/reducers/showSlice";

export const HomePage = () => {
    const shows= useSelector<IRootReducer,stateInterface>(state => state.showSlice)
  return (
    <div className="homePage">
      {console.log("shows: ", shows)}
      <Searchbar  />
      {shows.items.map((item: any) => (
        <ListItem
          key={item.show.id}
          id={item.show.id}
          image={
            item.show.image
              ? item.show.image.medium
              : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
          }
          name={item.show.name}
          genres={item.show.genres}
          status={item.show.status}
          summary={item.show.summary}
          officalSite={item.show.officialSite}
          rating={
            item.show.rating.average ? item.show.rating.average : "No rating"
          }

        />
      ))}
    </div>
  );
};
