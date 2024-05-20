import React, {useState, useEffect} from 'react';
import EventBlock from '../../components/event/EventBlock';
import Menu from '../../components/menu/Menu';
import './eventsBoard.css';
import constants from '../../constants';

export default function EventsBoard(){
    const [events, setEvents]= useState([]);

    useEffect(() =>{
        fetch(constants.urlEvents)
        .then(res => {
            if(!res.ok){
                throw new Error('Network response error');
            }
            return res.json();
        })
        .then(data => {
            setEvents(data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);
    
    return(
        <div>
            <section>
                <Menu/>
            </section>
            <div className='events-board'>
                {events.map((event) =>(
                    <EventBlock event={event} key={event.id}/>
                ))}
            </div>
        </div>
        
    )
}

