import React from "react";
// import './Tiles.css';
function Tiles(props){
    return(
    <>
    <div className="cards">
        <div className="card">
          
          <div className="card_info">
          <h1 style={{backgroundColor: props.color}} className="card_category ">{props.letter}</h1>
          <span className="card_title">{props.name}</span>
          </div>
        </div>
      </div>
    </>
    );
  }
export default Tiles;
