import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import SearchTable from '../components/SearchTable'
import SideNav from '../components/SideNav';
import Datetime from '../components/DateTime'


const Search = () => {

    // let cards = document.querySelectorAll('.box')

    // function liveSearch() {
    //     let search_query = document.getElementById("searchbox").value;
    //     //Use innerText if all contents are visible
    //     //Use textContent for including hidden elements
    //     for (let i = 0; i < cards.length; i++) {
    //         if (cards[i].textContent.toLowerCase()
    //             .includes(search_query.toLowerCase())) {
    //             cards[i].classList.remove("is-hidden");
    //         } else {
    //             cards[i].classList.add("is-hidden");
    //         }
    //     }
    // }

    // //A little delay
    // let typingTimer;
    // let typeInterval = 500;
    // let searchInput = document.getElementById('searchbox');

    // searchInput.addEventListener('keyup', () => {
    //     clearTimeout(typingTimer);
    //     typingTimer = setTimeout(liveSearch, typeInterval);
    // });


//might not need this, dpednds on how the API is made
    // var stockAPI = "put stock API here"

    // var stockSearch = document.getElementById("myCheck")

    // function getStocks(event) {
    //     event.preventDefault();
    //     var stockCode = document.querySelector("#queryStocks").value;
    //     stockSearch.innerHTML
    //     fetch("link API here" + stockCode)
    //         .then(response => response.json())
    //         .then(coderData => console.log(coderData))
    //         .catch(err => console.log(err))
    // }


    return (
        <div className="searchPage">
            <SideNav/>
            <div className="center mx-auto">
                <div className=' miniHeader d-flex justify-content-between align-items-center'>
                    <h2 className="display-3">Hello User!</h2>

                    <Datetime />
                </div>                
            <SearchTable/>
            </div>
            
        </div>
    )
}

export default Search