import React from "react";

const Card = ({name,email,website})=>{
    let rand = Math.floor(Math.random()*100)
    return(
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt ='Robottt' src={`https://robohash.org/${rand}?set=set4`}/>
            <div>
                <h2>{name}</h2>
                <h3>{email}</h3>
                <h4>{website}</h4>
            </div>
        </div>
    );
}

export default Card;