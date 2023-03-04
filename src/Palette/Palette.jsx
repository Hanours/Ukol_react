import React from 'react';
import './style.css';
import SchemeColor from "../SchemeColor/SchemeColor.jsx";



const Palette = ({colors }) => (
     <div className="scheme-colors">
          {colors.map((barva) => (
               < SchemeColor 
               key={barva}  
               barva={barva}
               />
          ))} 
     </div>
);
export default Palette;
