import React,  { useState, useEffect } from 'react'
import './PhotoFlip.css'
import im1 from './pic1.jpg'
import im2 from './pic2.jpg'
// import im3 from './pic3.jpeg'
import im4 from './pic3.jpg'
import im5 from './pic4.jpg'


const PhotoFlip = () => {
    const [timer, setTimer] = useState(0);
    const arr = [im1, im2, im4, im5];

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer >= arr.length-1){
                    return 0;
                } else {
                    return prevTimer + 1;
                }
            })
        }, 5000)
        console.log(timer);
        return () => {
            clearInterval(interval);
        }
    });

    return (
        <div className='section1'>
            <img className='imRot' src={arr[timer]} alt='rotato'/> 
        </div>
    )
}

export default PhotoFlip
