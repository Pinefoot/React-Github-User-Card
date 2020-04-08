import React from 'react';




function UserCards (props){
    console.log('this is usercard props', props);

    return(
   
         
        <div className ="followerCards">
        {props.value.map(follower => {
            return(
        <div key = {follower.id} className="usercards">
       
        <img src={follower.avatar_url} alt=" user"/>
        <p>UserName: {follower.login}</p>
        <a className = "linksAhoy" href = {follower.html_url}target="_blank">Link: {follower.html_url}</a>
        </div>)
        })}
       
        </div>
       
       
        
    )
}


export default UserCards;