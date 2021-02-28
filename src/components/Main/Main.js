import React from 'react';

import './main.css'

const video = {
	'Falcon 1': 'moon',
	'Falcon 9': 'earth',
	'Falcon Heavy': 'mars',
	other: 'space',
}

const title = {
	'falcon_1': 'Falcon 1',
	'falcon_9': 'Falcon 9',
	'falcon_heavy': 'Falcon Heavy',
	'starship': 'Starship',
}

const Main = ({rocketName, name}) => {

    const rocket = title.hasOwnProperty(rocketName) ? title[rocketName] : null;
    
    return (
        <section className="main">
            <h1 className="title">{name || rocket }</h1>
             <div className="video-container">
                <video
                    className="video" 
                    autoPlay loop muted playsInline 
                    src={`../video/${video.hasOwnProperty(rocket) ? video[rocket] : video.other}.mp4`}      
                />
            </div>
        </section>
    );
}

export default Main;