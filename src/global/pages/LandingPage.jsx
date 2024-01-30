import React from 'react';
import { NavBar, TabBar } from '../components/navBar.jsx/index.jsx';
import Hero from './components/hero/Hero.jsx';
import ImageCollection from './components/imageCollection/ImageCollection.jsx';

const LandingPage = ()=>{
    return (<>
        <NavBar/>
        <TabBar/>
        <Hero/>
        <ImageCollection/>
    </>);
};

export default LandingPage;