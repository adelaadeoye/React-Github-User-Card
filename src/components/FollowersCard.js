import React from 'react';

function FollowersCard (props){
    return (
        <div>
        {console.log("Followers ", props.data)}
        <p>{props.data.id}</p>
        <img src={props.data.avatar_url} alt="asd"/>
        </div>
    );
}
export default FollowersCard;