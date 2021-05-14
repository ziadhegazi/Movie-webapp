// import React, {useState} from 'react';
import React from 'react'; 
import MovieCard from './movieCard';
import "./movieList.css";
import Header from './Header';

const MovieList = ({list}) => {
    const imgLink = "https://image.tmdb.org/t/p/w500";
    const totalList = list.map((e,x) => <MovieCard title={e.title} posterURL={`${imgLink}${e.poster_path}`} description={e.overview} rating={e.vote_average} id={x}/>)
    
    
    // const [search,setSearch] = useState("");
    // const [final,setFinal] =  useState(() => totalList);

    
    // const handleSearch = (e) => {
    //     console.log(e);
    //     setSearch(e);
    //     Search();
    // }
    
    // console.log(final,search)
    
    // const Search = () => {
    //     if (search === "") {
    //         setFinal(totalList);
    //     }else {
    //         const temp = list.filter(() => list.includes(search));
    //         console.log(temp);
    //         setFinal(temp);
    //     }
    // }
    
    // -------------------------------Adding a movie-------------------------------
    const showForm = () => {
        document.querySelector(".popup-bg").style.display = "block"
    }

    const closeForm = () => {
        document.querySelector(".popup-bg").style.display = "none"
    }

    const submitForm = () => {
        const title = document.querySelector("#title").value;
        const poster_url = document.querySelector("#poster-url").value;
        const description = document.querySelector("#description").value;
        const rating = document.querySelector("#rating").value;

        const card = <MovieCard title={title} posterURL={`${imgLink}${poster_url}`} description={description} rating={rating}/> 
        totalList.push(card);
        // setFinal(totalList);
    }

    // -------------------------------return-------------------------------
  return(
    <div>
        {/* <Header handlesearch={handleSearch} /> */}
        <Header />
        <div className="movieList" >
            {totalList}
            <div className="add-movie">
                <label for="plus"><i class="fas fa-plus-circle add"></i></label>
                <input id="plus" type="button" onClick={() => showForm()} />
            </div>
            <div className="popup-bg">
                <span className="helper"></span>
                <form className="popup-box" >
                    <div className="form">
                        <div className="close-btn" onClick={() => closeForm()} ><i class="fas fa-times x-btn"></i></div>
                        <label>Title</label>
                        <input id="title" type="text" placeholder="Name of the movie" required />
                        <label >Poster URL</label>
                        <input id="poster-url" type="text" placeholder="https://example.com" required />
                        <label>Description</label>
                        <textarea id="description" type="textarea" placeholder="A brief description of the movie" required ></textarea>
                        <label>Rating</label>
                        <input id="rating" type="text" placeholder="Rate from 1-10" required />
                    </div>
                    <input type="submit" className="form-btn" value="Submit" onClick={() => submitForm()} />
                </form>
            </div>
        </div>
    </div>
  );
}
export default MovieList;