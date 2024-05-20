import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import './participantsPage.css'
import constants from '../../constants';

export default function ParticipantsPage(){
    const { id } = useParams();
    const [eventName, setEventName] = useState()
    const [seacrh, setSearch] = useState()
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        fetch(constants.urlEvents)
        .then( res => res.json())
        .then(data => {
            const event = data.find(event => event.id === id);
            if(event){
                setEventName(event.title); 
            }
        })
        .catch(error => {
            console.log(error)
        });

        fetch(constants.urlParticipants)
        .then(res => res.json())
        .then(data => {
            setParticipants(data);
        })
        .catch(error =>{
            console.log(error)
        })
    }, [])

    function ParticipantSeacrh(e){
        const value = e.target.value;
        setSearch(value);
    }

    return(
        <div>
            <span className='participants-page_title'> {eventName} participants</span>
            <div> 
                <form className='participants-page_form'>
                    <div className='participants-page_form_search'> <IoSearch/> </div>
                    <input type="text" onChange={ParticipantSeacrh} className='participants-page_form_input' value={seacrh} name="seacrh"></input>
                </form>
            </div>
            <ul className='participants-page'>
                {participants.map((participant, index) => (
                    <div className='participants-page_participant' key={index}>
                        <span> {participant.userName}</span>
                        <span> {participant.userMail}</span>
                    </div>
                ))}
            </ul>
        </div>
    )
}