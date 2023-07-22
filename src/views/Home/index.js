import React from 'react'
import './Home.scss'
import 'animate.css';


function index() {


    return (
        <>
            <div className="untitled">
                <div className="untitled__slides">
                    <div className="untitled__slide">
                        <div className="untitled__slideBg"></div>
                        <div className="untitled__slideContent">
                            <span >Give a new direction to your business</span>
                            {/* <a href="https://usecheck.com/" className="btn-shine" target="_blank">Get early access</a> */}

                        </div>
                    </div>
                    <div className="untitled__slide">
                        <div className="untitled__slideBg"></div>
                        <div className="untitled__slideContent">

                            <span >Get your In-depth Feasibility studies done</span>

                        </div>
                    </div>

                    <div className="untitled__slide">
                        <div className="untitled__slideBg"></div>
                        <div className="untitled__slideContent">
                            <span>Develope and grow your Team Strengths</span>

                        </div>
                    </div>
                    <div className="untitled__slide">
                        <div className="untitled__slideBg"></div>
                        <div className="untitled__slideContent">
                            <span>Let's Plan & Strategise your Business</span>

                        </div>
                    </div>
                    <div className="untitled__slide">
                        <div className="untitled__slideBg"></div>
                        <div className="untitled__slideContent">
                            <span>Know you Customer Base and Competition</span>

                        </div>
                    </div>
                </div>
                <div className="untitled__shutters"></div>
            </div>
        </>
    )
}

export default index
