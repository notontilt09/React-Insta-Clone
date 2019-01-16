import React from 'react'
import './SearchBar.css'

const SearchBar = props => {
    return (
        <div className="searchBar">
            <div className="left">
                <i className="fab fa-instagram fa-3x"></i>
                <img className='insta-logo' src='https://fontmeme.com/images/instagram-new-logo.png' alt="insta" />
            </div>
            <div className='center'>
                <form className="searchForm">
                    <input 
                        className="searchBox" 
                        type='text' 
                        placeholder='&#x1F50D; Search' 
                        onChange={props.handleSearch}
                        value={props.searchText}
                    />
                </form>
            </div>
            <div className="right">
                <i className="far fa-compass fa-2x"></i>
                <i className="far fa-heart fa-2x"></i>
                <i onClick={props.logout} className="far fa-user fa-2x"></i>
            </div>
        </div>
    )
};

export default SearchBar;