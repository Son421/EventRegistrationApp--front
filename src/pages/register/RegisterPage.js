import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import './registerPage.css';
import constants from '../../constants';

const currentDate = new Date();

export default function RegisterPage(){
    const { _id } = useParams();
    const [registrationInfo, setRegistrationInfo] = useState({
        fullName: '',
        email: '',
        dateOfBirth: '',
        informator: '',
    })

    const handleChange = (e)=>{
        const value = e.target.value;
        setRegistrationInfo({
            ...registrationInfo,
            [e.target.name]: value
        });
    }

    function sendForm(){
        fetch(`${constants.url}/register/${_id}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({registrationInfo}),
        })
        .then(res => {
            if (!res.ok) {
              throw new Error('Network response error');
            }
            return res.json();
          })
        .catch(error =>{
            console.error('Error:', error);
        })
    }

    return(
        <div className='register-page'>
            <form className='register-page_form'>
            <span className='register-page_form_title'> Event Registration </span>
                <ul>
                    <li><input type="text" onChange={handleChange} className='register-page_form_input' value={registrationInfo.fullName} name="fullName" placeholder="Full name"></input></li>
                    <li><input type="email" onChange={handleChange}  className='register-page_form_input' value={registrationInfo.email} name="email" placeholder="Your mail"></input></li>
                    <li>
                        <label>
                            Date of birth:
                            <input type="date" className="register-page_form_date" onChange={handleChange} name="dateOfBirth"
                            max={`${currentDate.getFullYear() - 14}-${currentDate.getMonth() < 10 ? "0" + (currentDate.getMonth()+1) : currentDate.getMonth()}-${currentDate.getDate() < 10 ? "0" + currentDate.getDate() : currentDate.getDate()}`} />
                        </label>
                    </li>
                    <li> 
                        <span> Where did you hear about this event? </span>
                        <div className='register-page_ratio__wraapper'>
                            <div>
                                <label className="register-page_container">
                                    <input onChange={handleChange} className="register-page_ratio" type="radio" id="socialMedia" name="informator" value="socialMedia"/>
                                    <div className="register-page_ratio_checkmark"></div>
                                    <span className="register-page_ratio_text">Social media</span>
                                </label>
                            </div>
                            <div>
                                <label className="register-page_container">
                                    <input onChange={handleChange} className="register-page_ratio" type="radio" id="friends" name="informator" value="friends" />
                                    <div className="register-page_ratio_checkmark"></div>
                                    <span className="register-page_ratio_text">Friends</span>
                                </label>    
                            </div>
                            <div>
                                <label className="register-page_container">
                                    <input onChange={handleChange} className="register-page_ratio" type="radio" id="myself" name="informator" value="myself" />
                                    <div className="register-page_ratio_checkmark"></div>
                                    <span className="register-page_ratio_text">Found myself</span>
                                </label>    
                            </div>
                        </div>
                    </li>
                </ul>
                <button onClick={sendForm} className='register-page_form_button'> Send </button>
            </form>
        </div>
    )
}