import React, { useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import "./Detail.css";

const Detail = ({id, name, description}) => {

    const [video, setVideo] = useState([]);

    const fetchVideos = async () => {
        console.log(id, "ygyy");
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c30198ca9a0b79184b36140b958d82e3&language=en-US`)
        console.log(res.data.results[0]);
        
        setVideo(res.data.results[0])
      }
      useEffect(() => fetchVideos(),[]);
    //   console.log(video)
    const key = video.key
    console.log(key)

    // const link = `https://www.youtube.com/watch?v=${key}`;



    return(
        <div className="detail-box">
            <div className="bk-to-ML">
                <Link to="/Movie-webapp">Back to Movie List</Link>
            </div>
            <div className="detail-content">
                <div className="detail-text">
                    <h2 className="movie-title">{name}</h2>
                    <h4 className="movie-desc">{description}</h4>
                </div>
                <iframe className="trailer" width="560" height="315" src={`https://www.youtube.com/embed/${key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>
    );
}

export default Detail;