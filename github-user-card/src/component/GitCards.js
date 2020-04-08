import React from 'react';




   


function GitCards (props){

    return(
        
        
            <div className = "mycard">
           {/* <div className ="ordercards"> */}
           <img src={props.img} alt=" user"/>
           <p>Name: {props.name}</p><br/>
           <p>UserName: {props.user}</p><br/>
           <p>Following: {props.following}</p>
           {/* </div> */}
           </div>
       
        
    )
}

export default GitCards;