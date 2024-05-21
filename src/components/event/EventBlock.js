import React from 'react';
import { NavLink } from "react-router-dom";
import './eventBlock.css'
export default function EventBlock(props){
    const date =  new Date(props.event.eventDate)
    const evDate = `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}.${date.getMonth() < 10 ? "0" + (date.getMonth()+1) : date.getMonth()}.${date.getFullYear()}`

    return(
        <div className='event-block'>
            <span className='event-block_date'> {evDate} </span>
            <span className='event-block_title'> {props.event.title} </span>
            <div className='event-block_description'> {props.event.description} </div>
            <div> {props.event.organize} </div>
            <div className='event-block_nav-buttons'>
                <NavLink to={`/event/${props.event._id}/register`}><button className='event-block_button'> Register </button></NavLink>
                <NavLink to={`/event/${props.event._id}/participants`}><button className='event-block_button'> View </button></NavLink>
            </div>            
        </div>
    )
}
