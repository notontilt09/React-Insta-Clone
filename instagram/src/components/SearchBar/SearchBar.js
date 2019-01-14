import React from 'react'
import './SearchBar.css'

const SearchBar = props => {
    return (
        <div className="searchBar">
            <i className="fab fa-instagram fa-5x"></i>
            <span>Instagram Text</span>
            <form>
                <input type='text' />
            </form>
            <span>insta logo</span>
            <span>insta logo</span>
            <span>insta logo</span>
        </div>
    )
};

export default SearchBar;