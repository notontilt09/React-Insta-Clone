import React from 'react'
import './SearchBar.css'
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin: 20px 0;
    padding-bottom: 30px;
    border-bottom: 1px solid lightgray;
`;

const Left = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 25%;
`;

const InstaLogo = styled.img`
    width: 150px;
    height: auto;
    border-left: 1px solid black;
`;

const Center = styled.div `
    text-align: center;

    input {
        background: rgb(243, 243, 243);

        &:: placeholder {
            text-align: center;
        }
    }
`;

const Right = styled.div `
    display: flex;
    justify-content: space-evenly;
    width: 30%;
`;

const SearchBar = props => {
    return (
        // <div className="searchBar">
        <Header>
            <Left>
                <i className="fab fa-instagram fa-3x"></i>
                <InstaLogo src='https://fontmeme.com/images/instagram-new-logo.png' alt="insta" />
            </Left>
            <Center>
                <form className="searchForm">
                    <input 
                        className="searchBox" 
                        type='text' 
                        placeholder='&#x1F50D; Search' 
                        onChange={props.handleSearch}
                        value={props.searchText}
                    />
                </form>
            </Center>
            <Right>
                <i className="far fa-compass fa-2x"></i>
                <i className="far fa-heart fa-2x"></i>
                <i onClick={props.logout} className="far fa-user fa-2x"></i>
            </Right>
        </Header>
        // </div>
    )
};

export default SearchBar;