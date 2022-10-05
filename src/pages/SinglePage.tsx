import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { ShowItem } from '../components/ListItem';
import { getShowById, stateInterface } from '../shared/reducers/showSlice';
import useParams from "react-router-dom";
import { IRootReducer } from '../shared/reducers';

export const SinglePage = (props:any) => {
const location = useLocation() ;
const shows= useSelector<IRootReducer,stateInterface>(state => state.showSlice)

const removeTags = (text:string) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getShowById(props.match?.params?.id))
  },[])

return (
    <div className="singleshow">
          <img
            src={
              shows.currentItem?.show?.image
                ? shows.currentItem?.show?.image?.medium
                : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
            alt={shows.currentItem?.show?.name}
          />
          <div className="singleshow__info">
            <h1>{shows.currentItem?.show?.name}</h1>
            {/* {shows.currentItem?.show?.genres &&
              shows.currentItem?.show?.genres.map((genre) => (
                <span key={genre} className="singleshow__genre">
                  {genre}
                </span>
              ))} */}
            <p>
              <strong>Status:</strong> {shows.currentItem?.show?.status && shows.currentItem?.show?.status}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {shows.currentItem?.show?.rating ? shows.currentItem?.show?.rating.average : "No rating"}
            </p>
            <p>
              <strong>Offical Site:</strong>{" "}
              {shows.currentItem?.show?.officalSite ? (
                <a
                  href={shows.currentItem?.show?.officalSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {shows.currentItem?.show?.officalSite}
                </a>
              ) : (
                "No offical site"
              )}
            </p>
            <p>{shows.currentItem?.show?.summary && removeTags(shows.currentItem?.show?.summary)}</p>
          </div>
        </div>
      )
}
