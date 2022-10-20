import React from 'react'
import './Grid.css'
import Rating from './Rating';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Grid = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3500/api/dhabas')
      .then((res) => {
        setMyData(res.data);
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
  }, []);
  return (
    <div>
      <main className="grid">
        {myData.map((dhaba) => {
          const { _id, name, dhabaImage } = dhaba;
          console.log(_id);
          return <article key={_id}>
              <Link to= {`/reservation/${_id}`}>
              <img src={dhabaImage} alt="Sample photo" height="180px" width="320px" border-radius=" 50%" />
              </Link>
              <div className="text">
                <h5>{name}</h5>
                <div className='Rating'>
                  <Rating />
                </div>
              </div>
            </article>
        })}
      </main>
    </div>
  )
};
export default Grid