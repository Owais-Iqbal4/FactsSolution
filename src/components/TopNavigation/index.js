import React from 'react'
import './Navigation.css'
import logo from '../../images/logo.svg'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Scroll, NoScroll } from '../../Store/actions/scrollAction'

function TopNavigation() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const scrollBehaviour = (path, scrollEffect) => {
        navigate(path);
        dispatch(scrollEffect())
    }
    return (
        <div>
            <input type="checkbox" id="active" />
            <img className='logo' src={logo} alt="" />
            <label htmlFor="active" className="menu-btn"><i className="fas fa-bars"></i></label>
            <div className="wrapper">
                <ul>
                    <li ><a href="">Home</a></li>
                    <li ><a href="/VBS_platform">“VBS” Platform</a></li>
                    <li ><a href="/services">Services</a></li>
                    <li ><a href="core_team">Core Team</a></li>
                    <li ><a href="/contactUs">Contact Us</a></li>
{/* 
                    <li onClick={() => { scrollBehaviour('/', NoScroll) }}><a href="">Home</a></li>
                    <li onClick={() => { scrollBehaviour('/VBS_platform', Scroll) }}><a href="">“VBS” Platform</a></li>
                    <li onClick={() => { scrollBehaviour('/services', Scroll)}}><a href="">Services</a></li>
                    <li onClick={() => {scrollBehaviour('/core_team', Scroll)}}><a href="">Core Team</a></li>
                    <li onClick={() => {scrollBehaviour('/contactUs', Scroll)}}><a href="">Contact Us</a></li> */}
                </ul>
            </div>
        </div>
    )
}

export default TopNavigation
