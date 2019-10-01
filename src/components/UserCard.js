import React from 'react';

function UserCard (props){
    return (

    <div >
        <h1>
            
            {console.log(props)}
            {props.data.name}
        </h1>
    </div>
    );
}
export default UserCard;