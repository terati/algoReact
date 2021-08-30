import React from 'react';
import './AboutSection.css';
import im from './IGlog.png';

function AboutSection() {
    return (
        <div className='wrapper'>
            <div className='section'>
                <p className='title'> WE ARE A COMPANY THAT CARE FOR OTHERS </p> 
                <p className='description'> We aren’t just a staffing company. We’re a company that cares for others. 
                    It might sound lofty, but it's the idea that gets us up everyday, determined to make it true. 
                    Insight Global is a company that people can anchor to in moments of triumph, struggle, and every time in between. 
                    Whoever you are and wherever you come from, you matter to us and we have your back. </p>
                <img className='im' src={im} alt='IG'/>
            </div>
            
        </div>
    )
}

export default AboutSection
