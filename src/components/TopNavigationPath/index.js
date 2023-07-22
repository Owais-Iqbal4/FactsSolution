import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNavigation from '../TopNavigation'
import { useLocation } from 'react-router-dom';
import { Scroll, NoScroll } from '../../Store/actions/scrollAction';
import { useDispatch } from 'react-redux';
function TopNavigationPath() {
    // redux
    const dispatch = useDispatch()
    // route path
    const location = useLocation();
    const currentPath = location.pathname;
    if (currentPath == '/') {
        dispatch(NoScroll())
    }
    else if (currentPath == '/VBS_Platform') {
        dispatch(Scroll())
    }
    else if (currentPath == '/services') {
        dispatch(Scroll())
    }
    else if (currentPath == '/contactUs') {
        dispatch(Scroll())
    }
    else if (currentPath == '/core_team') {
        dispatch(Scroll())
    }
    console.log('currentPath ', currentPath)
    return (
        <>
            <TopNavigation />
            <Outlet />
        </>

    )
}

export default TopNavigationPath;
