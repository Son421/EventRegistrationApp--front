import React, {useState} from 'react';
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import './menu.css'

export default function Menu(props){
    const [shownMenu, setShownMenu] = useState(false);

    function showMenu(){
        setShownMenu(!shownMenu);
    }

    function sortByTitle(){
        props.onSortChange('title');
    }

    function sortByDate(){
        props.onSortChange('eventDate');
    }

    function sortByOrganizer(){
        props.onSortChange('organizer');
    }

    if(!shownMenu){
        return(
            <div className='menu'>
                <button onClick={showMenu} className='menu_button'> Sort <TiArrowSortedUp className='menu--clouse' /> </button>
            </div>
        )
    }else{
        return(
            <div className='menu'>
                <button onClick={showMenu} className='menu_button menu_button_active'> Sort <TiArrowSortedUp className='menu--open'/> </button>
                <button className='menu_button menu_option' onClick={sortByTitle}> Title </button>
                <button className='menu_button menu_option' onClick={sortByDate}> Event date </button>
                <button className='menu_button menu_option' onClick={sortByOrganizer}> Organizer </button>
            </div>
        )
    }
    
}