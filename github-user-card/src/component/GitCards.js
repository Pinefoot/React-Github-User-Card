import React from 'react';


function GitCards (props){

    return(
        <div className='user-cards'>
           <p>Name: {props.name}</p>
           <img src={props.img} alt="picture of user"/>
           <p>UserName: {props.user}</p>
           <p>Following: {props.following}</p>
           
        </div>
    )
}

export default GitCards;