import React from 'react';


function UserCards (props){


    return(
        <div className="usercards">
            <p>Name: {props.login}</p>
        </div>
    )
}


export default UserCards;