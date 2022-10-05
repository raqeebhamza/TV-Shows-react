import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { createTypeReferenceDirectiveResolutionCache } from "typescript";
import { setShows } from "../shared/reducers/showSlice";
import { ListItem } from "./ListItem";

interface searchBarProps {
  setShow: React.Dispatch<React.SetStateAction<never[]>>;
}
export const Searchbar = () => {
  const queryClient = useQueryClient();
  const [searchStr, setSearchStr] = useState("");
  const dispatch =useDispatch()
  const fetchTvShows = async () => {
    const result = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchStr}`
    );
    const data = await result.json();
    dispatch(setShows(data))
  };
  const { isLoading, isError, error, data, refetch } = useQuery(
    "todos",
    fetchTvShows,
    {
      enabled: searchStr !== "",
    }
  );
  useEffect(() => {
    refetch();
  }, [searchStr]);

  const OnSearchClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    refetch();
  };
  return (
    <div className="searchbar">
      <form className="searchbar__form">
        <input
          type="text"
          placeholder="Search For Tv Show"
          value={searchStr}
          onChange={(e) => setSearchStr(e.target.value)}
        />
        <button className="btn btn-block" onClick={OnSearchClick}>
          SEARCH
        </button>
      </form>
    </div>
  );
};
