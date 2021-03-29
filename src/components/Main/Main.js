import React from 'react';

import './main.css'

const video = {
	'Falcon 1': 'moon',
	'Falcon 9': 'earth',
	'Falcon Heavy': 'mars',
	other: 'space',
}

const rocketImages = {
	'Falcon 1': 'falcon-1',
	'Falcon 9': 'falcon-9',
	'Falcon Heavy': 'falcon-heavy',
	'Starship': 'starship',
};

const title = {
	'falcon_1': 'Falcon 1',
	'falcon_9': 'Falcon 9',
	'falcon_heavy': 'Falcon Heavy',
	'starship': 'Starship',
}

const Main = ({rocketName}) => {

    const rocket = title.hasOwnProperty(rocketName) ? title[rocketName] : null;

        return (
            <section className="main">
                <h1 className="title">{rocket}</h1>
                <div className="video-container">
                    <video
                        className="video" 
                        autoPlay loop muted playsInline 
                        src={`../video/${video.hasOwnProperty(rocket) ? video[rocket] : video.other}.mp4`}      
                    />
                </div>
                <div className="image-container">
                    <img
                        src={`../img/${rocketImages[rocket]}.png`}
                        alt="rocket"
                        className="rocket-img"
                    />
                </div>
            </section>
        );
    
}

export default Main;