import React from 'react';
import "./movieCard.css";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
    return(
        <div className="container" onClick={() =>props.Moredetail(props)}>
            {/* {console.log(id)} */}
            <Link to={`/${props.id}`}>
                <img src={props.posterURL} alt={props.title} className="poster" />
                <div className="content">
                    <div className="box">
                        <h3 className="movieName" >{props.title}</h3>
                        <h4 className="rating" >{props.rating}</h4>
                    </div>
                    <p className="description">{props.description}</p>
                </div>
            </Link>
        </div>
    );
}
export default MovieCard;