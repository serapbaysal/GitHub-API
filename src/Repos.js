import {Form,Image,Icon, DropdownSearchInput, Button} from 'semantic-ui-react';
import './App.css';
import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axious from "axios";
import { Card } from 'semantic-ui-react';
import axios from 'axios';
import Results from './Results';
import jquery from 'jquery';


const Repos =()=>{
    const [searchInput,setSearchInput]=useState("");
    const [repos,setRepos]=useState([]);
    
    const handleChange=(e)=>{
        setSearchInput(e.target.value);
    }

    const handleClick=async()=>{
        console.log(searchInput);
        try{
        const result=await axios(`https://api.github.com/users/${searchInput}/repos`);
    
        setRepos(result);
    }catch(err){
        console.log(err);
    }


    };

 

    return(
        <>
        <div style={{padding:"20 px"}}>
            <input
            className="inputRepos"
            type="text"
            placeholder="search"
            value={searchInput}
            onChange={handleChange}
            />
            <button className="buttonRepos" onClick={handleClick}>For Repos</button>
             <Results repos={repos}/>
        </div>
        
            
        </>

    );

    



};
export default Repos;