// import React, {useState} from 'react'
import React from 'react'
import Filter from "./filter";
import logo from "../ZH style 2 WIP3pdf.jpg"
import "./Header.css"

const Header = ({handlesearch}) => {
    // const [search,setSearch] = useState("")

    // const updateSearch = () => {
    //     const temp = document.querySelector(".search-input").value;
    //     console.log(temp, "US");
    //     setSearch(temp);
    //     handlesearch(search);
    // }

    return (
        <header>
            <nav className="navBar">
                <div className="logo">
                    <img src={logo} alt="Personal logo" className="logoPic" />
                    <h1 className="logoName" >Ziad Hegazi</h1>
                </div>
                <div className="Filter-bar" >
                    <Filter className="Filter" />
                    <div className="search-bar">
                        <input className="search-input" type="text" placeholder="Search..." />
                        <button className="search-btn" ><i class="fas fa-arrow-right"></i></button>
                        {/* <button className="search-btn" onClick={() => updateSearch()}  ><i class="fas fa-arrow-right"></i></button> */}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;