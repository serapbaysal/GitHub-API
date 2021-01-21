
import {Form,Image,Icon, DropdownSearchInput, Button} from 'semantic-ui-react';
import './App.css';
import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axious from "axios";
import { Card } from 'semantic-ui-react';
import axios from 'axios';
import Results from './Results';
import jquery from 'jquery';
import Repos from './Repos';
import userEvent from '@testing-library/user-event';

const App=()=>{
  const[name,setName]=useState('');
  const[userName,setUserName]=useState('');
  const[followers,setFollowers]=useState('');
  const[following,setFollowing]=useState('');
  const[repos,setRepos]=useState([]);
  const[avatar,setAvatar]=useState('');
  const[userInput,setUserInput]=useState('');
  const[error,setError]=useState(null);
  const[searchInput,setSearchInput]=useState("");
  
  const setData=({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url})=>{
    setName(name)
    setUserName(login)
    setFollowers(followers)
    setFollowing(following)
    setRepos(public_repos)
    setAvatar(avatar_url)
  };
  


  const handleSearch=(e)=>{
    setUserInput(e.target.value)
   
    
  }
  

  const handleSubmit=()=>{
    fetch(`https://api.github.com/users/${userInput}`)
   
    .then(res=>res.json())
    .then(data=>{
      if(data.message){
        setError(data.message)
      }
      else{
        setData(data);
        setError(null);
      }
      
    })
  }
  


 
  return(
  
     
    <div className="back">

      
        <div className="navbar">Github Search</div>
      <div className='search'>        
      <>
        <div style={{padding:"20 px"}}>
            <input
            className="inputApp"
            type="text"
            placeholder="search"
            value={userInput}
            onChange={handleSearch}
            
            />
            <button className="buttonApp" onClick={handleSubmit}>For Profile</button>
            <Repos/>
             
        </div>
        
            
        </>
       
      </div>
      {error ?(<h1>{error}</h1>):
       (
      <div className="card">
      
      <Card>
  <Image src={avatar} wrapped ui={false} />
  <Card.Content extra>
    <Card.Header>{name}</Card.Header>
    <Card.Header>{userName}</Card.Header>
    </Card.Content>
  <Card.Content extra>
    <a>
      <Icon name='user' />
     {followers}  Followers  
    </a>
  </Card.Content>
  <Card.Content extra>
    <a href="Repos.js">
      <Icon name='user' />
      {repos} Repos 
      

      
    </a>
  </Card.Content>
  <Card.Content extra>
    <a>
      <Icon name='user' />
      {following} Following
      
    </a>
  </Card.Content>
 

  
 </Card>
 
 
      </div>

      
      )}
          
  </div>

   

  );


    
}

export default App;