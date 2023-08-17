import React from "react";
import "./assets/extracurricular.jpg";
import "./Cards.css";


function Card(props){
    return(
      <>
  
  <div className="cards">
  
  <div className="card">
    <div className="card_img">
        <img src={props.imgsrc} alt="movies"/>
    </div>
    <div className="card_body">
        <div className="movie_title">
            <h2>{props.title}</h2>
        </div>
        <div className="movie_desc">
            <p>{props.desc}</p>
            <a href={props.link} target="blank"><button className="btn">whatch now</button></a>
        </div>
    </div>
  </div>
  
  </div>
  
      </>
    )
  }

  export default Card;