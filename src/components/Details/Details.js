import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import './details.css';
import useLaunches from '../useLaunches/useLaunches';
import Youtube from 'react-youtube';
import Preloader from '../Preloader/Preloader';

const Details = (props) => {

	const [launch, setLaunch] = useState(null);
	
	const { getLaunch } = useLaunches();


   useEffect (() => {
	   setLaunch(getLaunch(props.match.params.id));
   }, [getLaunch, props.match.params.id])

	const history = useHistory();
	
	if (!launch) {
		return <Preloader/>;
	}

	return(
		
	<div>
	<main className="details">
	<h1 className='title'>{launch.name}</h1>
		<div className="container">
			<div className="details-row">
				<div className="details-image">
					<img src={launch.links.patch.small} alt=""/>
				</div>
				<div className="details-content">
					<p className="details-description">{launch.details}</p>
				</div>
			</div>
			<Youtube className='details-youtube' videoId={launch.links.youtube_id} />
		</div>
		<div onClick={history.goBack} className="button button-back">Go back</div>
	</main>
	</div>
	)
};

export default Details;