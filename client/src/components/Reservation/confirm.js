import React from "react";
import reservation from "../../Images/reservation.jpeg";
import Rating from "../Page/Rating";
import './confirm.css'
const Reserve = () => {  
    return (
        <section className="main-container">
            <div className="reserve">
                <div id="header">
                    <div className="type">
                        <button className="my-reservation"><i class="zmdi zmdi-check "></i></button>
                    </div>
                    <div className="thank-reservation">
                        <h5>Thankyou for your reservation!</h5>
                        <a className="my_reservation" href="#">My Reservations</a>
                    </div>
                </div>
                <div>
                    <div className="reservation_code">
                        <div id="code">
                            <h5>reservation code</h5>
                            <button className="code">APMY9K4</button>
                        </div>
                        <h5 className="table">reservation details:</h5>
                        <form className="reservation-form">
                            <div className="form-group">
                                <div className="text-field">
                                    <label className="icon">
                                        <i class="zmdi zmdi-calendar"></i>
                                    </label>
                                    <input type="date" className="input-form" placeholder="date" name="date"></input>
                                </div>

                                <div className="text-field">
                                    <label className="icon"><i class="zmdi zmdi-accounts"></i></label>
                                    <input type="text" className="input-form" placeholder="Person"></input>
                                </div>


                                <div className="text-field">
                                    <label className="icon"><i class="zmdi zmdi-time"></i></label>
                                    <input type="time" className="input-form" placeholder="time" fullwidth required></input>
                                </div>

                                <div className="text-field">
                                    <label className="icon"><i class="zmdi zmdi-account"></i></label>
                                    <input type="text" className="input-form" placeholder="Name" />
                                </div >

                                <div className="text-field">
                                    <label className="icon"><i class="zmdi zmdi-email"></i></label>
                                    <input type="email" className="input-form" placeholder="Email" required />
                                </div>

                                <div className="text-field">
                                    <label className="icon"><i class="zmdi zmdi-phone"></i></label>
                                    <input type="number" className="input-form" placeholder="Phone" />
                                </div>

                            </div>
                        </form>
                        <div className="reserve-button">
                            <button className="reserve-me">Make New Reservation</button>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <footer className="footer-down">.</footer>
                </div>
                <div className="container-3">
                    <div className="images">
                        <figure>
                            <img className="reserve-image" src={reservation} alt="register" />
                        </figure>
                    </div>
                    <div className="hh">
                        <div>
                            <p className="line">Angreji Dhaba @kharghar</p>
                            <div className="rate">
                                <Rating />
                            </div>
                            <p className="container-4">150 reservations</p>
                            <p className="kharghar">Kharghar</p>
                        </div>
                        <hr className="hr-line"></hr>
                        {/* <a className="anchor" href="#">Email</a> */}
                        <div className="dhaba-phone">
                            <p>call Dhaba :  +91 1234567891</p>
                            <a className="anchor" href="#">Email</a>
                        </div>
                        <div className="view">
                            <button className="view-button">View dhaba details</button>
                        </div>

                    </div>
                </div>
                <div className="container-graph">
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="370" height="105" src="https://maps.google.com/maps?width=1000&amp;height=1000&amp;hl=en&amp;q=Angrezi dhaba kharghar&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                        {/* <style>.mapouter position:relative;text-align:right;width:600px;height:400px;.gmap_canvas overflow:hidden;background:none!important;width:600px;height:400px;.gmap_iframe width:600px!important;height:400px!important;</style> */}
                        <div>
                            <h6 className="address">Address</h6>
                            <p className="detail">2nd Floor,Nakshtra Mall,Ranade Rd,Kharghar West,Kharghar,Navi Mumbai,Maharashtra</p>
                            <div className="button">
                                <button className="get-direction">Get Directions</button>
                            </div>
                        </div>
                    </div>


                </div>



            </div>
        </section>
    );

   
}
    export default Reserve
