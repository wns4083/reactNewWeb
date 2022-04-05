import React, { useEffect } from 'react';
import '../../App.css';
import CardSection from '../CardSection';
import HSection from '../HSection';

function Home () {
    useEffect(()=>{
        const getTitle = document.getElementsByTagName("title")[0];
        getTitle.innerHTML = "HOME"
    },[])
    return (
        <>
            <HSection />
            <CardSection />
        </>
    )
}
export default Home;