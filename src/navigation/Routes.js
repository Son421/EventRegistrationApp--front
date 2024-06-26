import { Route, Routes } from "react-router-dom";
import EventsBoard from "../pages/eventsBoard/EventsBoard";
import RegisterPage from "../pages/register/RegisterPage";
import ParticipantsPage from "../pages/participants/ParticipantsPage";

export default () => (
    <Routes>
        <Route path="/" element={<EventsBoard/>}/>
        <Route path="/event/:_id/register" element={<RegisterPage/>}/>
        <Route path="/event/:_id/participants" element={<ParticipantsPage/>}/>
    </Routes>
);