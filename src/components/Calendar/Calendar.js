import React, { useEffect, useState } from 'react';
import './calendar.css';
import {Link} from 'react-router-dom';
import useLaunches from '../useLaunches/useLaunches';
import Preloader from '../Preloader/Preloader';

const Calendar = () => { 

    const { launches } = useLaunches();
    const  [loading, setLoading] = useState(true);

    useEffect(() => {
        if (launches.length > 100) {
            setLoading(false)
        }
    }, [launches.length])

    const [itemsToShow, loadItems] = useState(9);

    const isButton = !(itemsToShow >= launches.length);
  
    const renderCard = launches.slice(0, itemsToShow);

    if (loading) {
        return <Preloader/>
    } 

    return(
        <>
            <section className="calendar">
                <h1 className='title'>Календарь SpaceX</h1>
                    <div className="container">
                        <ul className="calendar-list">
                            {renderCard.map(item => (
                                <li className="calendar-item" key={item.id}>
                                    <div className="launches">
                                        <div className="launches-image">
                                            <img src={item.links.patch.small} alt=""/>
                                        </div>
                                        <div className="launches-content">
                                            <h2 className="launches-title">{item.name}</h2>
                                        </div>
                                        <Link to={`/details/${item.id}`} className="button launches-details">Learn more</Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {isButton ? (<div
                            className="button button-more"
                            onClick={() => {loadItems(itemsToShow + 9)}}>Load more</div>) : null }       
                    </div>
            </section>
        </>
    )
};

export default Calendar;