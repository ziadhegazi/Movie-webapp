import React, { useState} from 'react'
import "./filter.css"

const Filter = () => {
    const[rating,setRating] = useState(false);
    const[title,setTitle] = useState(false);
    const[release,setRelease] = useState(false);
    const [filter,setFilter] = useState(false)

    const Rating = () => {
        const btn = document.querySelector("#rating");
        if (rating) {
            btn.classList.remove("active");
            setRating(false);
        }else {
            btn.classList.add("active");
            setRating(true);
        }
    }

    const Title = () => {
        const btn = document.querySelector("#title");
        if (title) {
            btn.classList.remove("active");
            setTitle(false);
        }else {
            btn.classList.add("active");
            setTitle(true);
        }
    }

    const Release = () => {
        const btn = document.querySelector("#release-date");
        if (release) {
            btn.classList.remove("active");
            setRelease(false);
        }else {
            btn.classList.add("active");
            setRelease(true);
        }
    }

    // Filter button
    const options = () => {
        const list = document.querySelector(".dropDown-list");
        const arrow = document.querySelector(".fas");
        if (filter) {
            list.style.display = "none";
            arrow.setAttribute("class","fas fa-sort-down")
            const test = list;
            console.log(test);
            setFilter(false);
        }else {
            list.style.display = "block";
            arrow.setAttribute("class","fas fa-sort-up")
            console.log(true)
            setFilter(true);
        }
    }

  return(
    <div className="dropDown" >
        <div className="filter-btn" onClick={()=>options()} >
            <div className="filter" >
                Filter 
            </div>
            <i className="fas fa-sort-down arrow-filter"></i>
        </div>
        <div className="dropDown-list">
            <ul className="dropDown-options" >
                <li className="option-item" onClick={()=>Rating()} ><input type="checkbox" checked /><span id="rating" className="check-input "></span>Rating</li>
                <li className="option-item" onClick={()=>Title()} ><input type="checkbox" checked /><span id="title" className="check-input "></span>Title</li>
                <li className="option-item" onClick={()=>Release()} ><input type="checkbox" checked /><span id="release-date" className="check-input "></span>Release Date</li>
            </ul>
        </div>
    </div>
  );
}

export default Filter;