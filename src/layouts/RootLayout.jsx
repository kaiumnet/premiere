import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Hero from '../shared/Hero';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;