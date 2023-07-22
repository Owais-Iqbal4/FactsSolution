import React, { useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedCursor from "react-animated-cursor"
import { useSelector } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Home'
import ContactUs from '../ContactUs'
import Services from '../Services'
import VBS_Platform from '../About'
import CoreTeam from '../CoreTeam'
import TopNavigation from '../../components/TopNavigation'
import TopNavigationPath from '../../components/TopNavigationPath'

function Navigation() {

    // redux
    const class1 = useSelector(state=>state.scrolling.class)
    // scrolling effect for chrome and Aos 
    const containerRef = useRef(null);
    let startY;

    const handleTouchStart = (e) => {
        startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
        const currentY = e.touches[0].clientY;
        const scrollY = containerRef.current.scrollTop;

        if (scrollY === 0 && currentY > startY) {
            e.preventDefault();
        }

        if (
            scrollY === containerRef.current.scrollHeight - containerRef.current.clientHeight &&
            currentY < startY
        ) {
            e.preventDefault();
        }
    };

    useEffect(() => {
        AOS.init({duration:1000}); // Initialize AOS library

        const handleScroll = () => {
            AOS.refreshHard(); // Trigger AOS library update
        };

        containerRef.current.addEventListener('scroll', handleScroll);

        return () => {
            containerRef.current.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>

            <div
                ref={containerRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                style={{
                    overflowY: 'scroll',
                    WebkitOverflowScrolling: 'touch',
                    height: '100vh',
                    position: 'fixed',
                    top: 0,
                    width: '100%',


                }}
                className={class1}
            >

                <BrowserRouter>
                    <Routes>
                        <Route element={<TopNavigationPath />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/VBS_Platform" element={<VBS_Platform />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/core_team" element={<CoreTeam />} />
                            <Route path="/contactUs" element={<ContactUs />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>

            {/* animated cursor */}
            <AnimatedCursor
                innerSize={5}
                outerSize={45}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: 'var(--cursor-color)'
                }}
                outerStyle={{
                    border: '3px solid var(--cursor-color)',
                    mixBlendMode: 'exclusion'

                }}

                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                ]}
            />
        </>
    )
}
export default Navigation;

