import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import './participantsPage.css'
import constants from '../../constants';

export default function ParticipantsPage(){
    const { id } = useParams();
    const [eventTitle, setEventTitle] = useState()
    const [search, setSearch] = useState()
    const [searchField, setSearchField] = useState('fullName');
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        fetch(`${constants.urlEvents}`)
        .then(res => res.json())
        .then(data => {
            const event = data.find(event => event.id === id);
            if(event){
                setEventTitle(event.title); 
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

        fetch(`${constants.urlParticipants}/${id}`)
        .then(res => res.json())
        .then(data => {
            setParticipants(data);
        })
        .catch(error =>{
            console.error('Error:', error);
        });
    }, [])

    function participantHandleChange(e){
        const value = e.target.value;
        setSearch(value);
    }

    function participantSearch(){
        fetch(`${constants.urlParticipants}/search-participant/${id}?${searchField}=${search}`)
          .then(res => res.json())
          .then(data => {
            if (data.error) {
              setParticipants([]);
            } else {
              setParticipants([data]);
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
    }

    return(
        <div>
            <span className='participants-page_title'> {eventTitle} participants</span>
            <section> 
                <form className='participants-page_form'>
                    <select className='participants-page_form_select' value={searchField} onChange={(e) => setSearchField(e.target.value)}>
                        <option value="fullName">Name</option>
                        <option value="email">Email</option>
                    </select>
                    <div className='participants-page_form_search'> <IoSearch/> </div>
                    <input type="text" onChange={participantHandleChange} className='participants-page_form_input' value={search} name="seacrh"></input>
                    <button onClick={participantSearch} className='participants-page_form_search_button'> Search </button>
                </form>
            </section>
            <ul className='participants-page'>
                {participants.map((participant, index) => (
                    <div className='participants-page_participant' key={index}>
                        <span> {participant.fullName}</span>
                        <span> {participant.email}</span>
                    </div>
                ))}
            </ul>
        </div>
    )
}