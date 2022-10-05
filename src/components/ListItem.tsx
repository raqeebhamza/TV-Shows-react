import { Link } from "react-router-dom";
export interface ShowItem{
    image:any;
    name:string;
    id:number;
    genres:[];
    status:string;
    rating:any;
    officalSite:string;
    summary:string;
}

export const ListItem = (show:ShowItem) => {  
  return (
    <Link to={`/singleshow/${show.id}`}  className="listitem">
      <img src={show.image} alt={show.name} />
      <div className="listitem__info">
        <h4 className="info__name">{show.name}</h4>
        <h4 className="info__rating">{show.rating}</h4>
      </div>
    </Link>
  );
};