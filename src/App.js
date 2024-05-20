import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/header/Header';
import EventsBoard from './pages/eventsBoard/EventsBoard';
import Routes from './navigation/Routes';

function App() {
  return (
    <div>
     <BrowserRouter>
        <Header/>
        <Routes/>
     </BrowserRouter>
    </div>
  );
}

export default App;
