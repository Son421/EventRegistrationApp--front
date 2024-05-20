import React from 'react';
import { NavLink } from "react-router-dom";
import './eventBlock.css'
export default function EventBlock(props){

    return(
        <div className='event-block'>
            <span className='event-block_date'> {props.event.eventDate} </span>
            <span className='event-block_title'> {props.event.title} </span>
            <div className='event-block_description'> {props.event.description} </div>
            <div> {props.event.organize} </div>
            <div className='event-block_nav-buttons'>
                <NavLink to={`/event/${props.event.id}/register`}><button className='event-block_button'> Register </button></NavLink>
                <NavLink to={`/event/${props.event.id}/participants`}><button className='event-block_button'> View </button></NavLink>
            </div>            
        </div>
    )
}
