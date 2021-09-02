import React from 'react'
import im1 from './IG1.jpg'
import im2 from './IG2.png'
import im3 from './IG3.jpg'
import im4 from './IG4.jpg'
import './NewsReel.css'

function NewsReel() {
    return (
        <>
            <div className='news'>
                <div className='newslink'>
                    <div className='Im'> 
                        <img className='newsIm' src={im1} alt='im1' />
                    </div>
                    <p className='newsTitle'> Insight Global’s New Healthcare Division Aids in Covid-19 Mission </p>
                    <p className='newsPar'> Insight Global Health (IGH) was created to support hospital and healthcare-focused clients across the United States and Canada. </p>
                    <a href=''>Read More</a>
                </div>

                <div className='newslink'>
                    <div className='Im'> 
                        <img className='newsIm' src={im2} alt='im2' />
                    </div>
                    <p className='newsTitle'> Insight Global Names New Director of Diversity and Inclusion </p>
                    <p className='newsPar'> Korryn Williams is eager to take on this new responsibility with optimism for the future. </p>
                    <a href=''>Read More</a>
                </div>

                <div className='newslink'>
                    <div className='Im'> 
                        <img className='newsIm' src={im3} alt='im3' />
                    </div>
                    <p className='newsTitle'> Insight Global Wins ClearlyRated’s Best of Staffing Client Diamond Award </p>
                    <p className='newsPar'> Insight Global wins ClearlyRated’s 2021 Best of Staffing Client Diamond Award for Service Excellence for 7th consecutive year. </p>
                    <a href=''>Read More</a>
                </div>

                <div className='newslink'>
                    <div className='Im'> 
                        <img className='newsIm' src={im4} alt='im4' />
                    </div>
                    <p className='newsTitle'> Insight Global Launches Jobs & Joy </p>
                    <p className='newsPar'> Together, we will make a difference in our communities while putting people to work. For every 100th hire, Insight Global will donate $1,000 to one of 8 charities. </p>
                    <a href=''>Read More</a>
                </div>
                
            </div>
        </>
    )
}

export default NewsReel
