import React from 'react';
import "./movieCard.css";

const MovieCard = (props) => {
    return(
        <div className="container">
            {/* {console.log(id)} */}
            <img src={props.posterURL} alt={props.title} className="poster" />
            <div className="content">
                <div className="box">
                    <h3 className="movieName" >{props.title}</h3>
                    <h4 className="rating" >{props.rating}</h4>
                </div>
                <p className="description">{props.description}</p>
            </div>
        </div>
    );
}
export default MovieCard;