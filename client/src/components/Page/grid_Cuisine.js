import React from 'react'
import dhaba_img from '../../Images/dhaba_img.png';
import './grid_Cuisine.css'
import Rating from './Rating';


const Grid_Cuisine = () => {
  return (
    <div>


<main className="grids">
  <article>
    <img src={dhaba_img} alt="Sample photo" height="180px" width="320px"  border-radius=" 50%"/>
    <div className="text1">
      <h5 className='dhaba_names'>Happy Dhaba</h5>
      <div  className='Ratings'>
    <Rating/>
    </div>
    </div>
  </article>
  <article>
    <img src={dhaba_img} alt="Sample photo"  height="180px" width="320px"/>
    <div className="text1">
      <h5 className='dhaba_names'>Lucky Dhaba</h5>
      <div  className='Ratings'>
    <Rating/>
    </div>
    </div>
  </article>
  <article>
    <img src={dhaba_img} alt="Sample photo"  height="180px" width="320px"/>
    <div className="text1">
      <h5 className='dhaba_names'>Pritam Dhaba</h5>
    <div  className='Ratings'>
    <Rating/>
    </div>
    </div>
  </article>
  <article>
    <img src={dhaba_img} alt="Sample photo"  height="180px" width="320px"/>
    <div className="text1">
      <h5 className='dhaba_names'>Raju Dhaba</h5>
      <div  className='Ratings'>
    <Rating/>
    </div>
    </div>
   
  </article>
</main>
    </div>
  )
};

export default Grid_Cuisine