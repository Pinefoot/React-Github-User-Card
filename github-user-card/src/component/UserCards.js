import React from 'react';


function UserCards (props){
    console.log('this is usercard props', props);

    return(
        
        <div>
        {props.value.map(follower => {
            return(
        <div key = {follower.id} className="usercards">
       
        <img src={props.value.avatar_url} alt=" user"/>
        <p>UserName: {props.value.login}</p>
        <p>Following: {props.value.following}</p>
        </div>)
        })}
       
        </div>
        
    )
}


export default UserCards;