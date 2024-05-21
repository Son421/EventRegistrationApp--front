import React, {useState, useEffect} from 'react';
import EventBlock from '../../components/event/EventBlock';
import Menu from '../../components/menu/Menu';
import './eventsBoard.css';
import constants from '../../constants';

export default function EventsBoard(){
  const [events, setEvents]= useState([]);
  const [sortBy, setSortBy] = useState('');

  const fetchEvents = () => {
    let url = constants.urlEvents;
    if (sortBy) {
        url = `${constants.url}/search?sort=${sortBy}-asc`;
    }
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setEvents(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  useEffect(() => {
    fetchEvents();
  }, [sortBy])

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };
  
  return(
    <div>
      <section>
        <Menu onSortChange={handleSortChange}/>
      </section>
      <div className='events-board'>
        {events.map((event) =>(
          <EventBlock event={event} key={event.id}/>
        ))}
      </div>
    </div>
  )
}