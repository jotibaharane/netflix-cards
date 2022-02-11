import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards"
import "./index.css"
import Sdata from "./Sdata"

ReactDOM.render(
  <>
  <h1 className="heding_style" >List Of Top Five Netflix In 2022 </h1>
    {Sdata.map((val)=>{
       return(
       <Cards 
       key={index}
       imgsrc={val.imgsrc}
       title={val.title}
       source={val.source}
       sname={val.sname}
       />
       );
       
    })}
    
  </>, document.getElementById('root')
);
