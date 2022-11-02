import React from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import './App.css';
import Login from "./components/Authentication/Login";
import Page1 from "./components/Page/page1";
import Register from "./components/Authentication/Register";
import Reservation from "./components/Reservation/reservation"
import Reserve from "./components/Reservation/confirm";
import CancleReservaion from "./components/Reservation/cancel_reservation";
import DhabaHome from "./dhabaOwner/dhabaHome";

 const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Page1/>}></Route>
        <Route path="/reservation/:id" element={<Reservation/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/confirmReservation/:id" element={<Reserve/>}></Route>
        <Route path="/cancelReservation" element={<CancleReservaion/>}></Route>

      <Route path="/dhabaPanel" element={<DhabaHome/>}></Route>
      </Routes>
      
    </Router>
    
  );
};

export default App;


// import React from 'react'
// import './Grid.css'
// import Rating from './Rating';
// import { useState, useEffect,Link } from 'react';
// import axios from 'axios';
// const Grid = () => {
//   const [myData, setMyData] = useState([]);
//   useEffect(() => {
//     axios.get('http://localhost:3500/api/dhabas')
//       .then((res) => {
//         setMyData(res.data);
//         console.log(res.data);
//       }).catch(err => {
//         console.log(err);
//       })
//   });
//   return (
//     <div>
//       <main className="grid">
//         {myData.map((dhaba) => {
//           const { _id, name, dhabaImage } = dhaba;
//           return <Link to= {`/reservation/${_id}`}  key={dhaba.id}>
//             <article>
//               <img src={dhabaImage} alt="Sample photo" height="180px" width="320px" border-radius=" 50%" />
//               <div className="text">
//                 <h5>{name}</h5>
//                 <div className='Rating'>
//                   <Rating />
//                 </div>
//               </div>
//             </article>
//           </Link>
//         })}
//       </main>
//     </div>
//   )
// };
// export default Grid