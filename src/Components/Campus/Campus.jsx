import React from 'react'
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";



const Campus = () => {
  return (
    <div className='campus'>
    
      <div className='gallery'>
      <img src={gallery_1} alt="gallery_1_img"/>
      <img src={gallery_2} alt="gallery_2_img"/>
      <img src={gallery_3} alt="gallery_3_img"/>
      <img src={gallery_4} alt="gallery_4_img"/>
    </div>

    <button className='btn dark_btn'>see more here<img src={white_arrow} alt="white-arrow"/></button>
    </div>
  )
}

export default Campus
