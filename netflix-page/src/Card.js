import React from 'react';
import Img from './Img';
function Card(props)
{
    return(
       <div className="card-container">
           <figure>
               <Img imgSrc={props.imgSrc}/>
           </figure>
           <div className="title">{props.title}</div>
           <div className="link"><a href={props.link} target="_blank"><button>Watch Now</button></a></div>
       </div>
    );
}

export default Card;