import React, {useState} from 'react';
import './registerPage.css'

const currentDate = new Date();

export default function RegisterPage(){
    const [registrationInfo, setRegistrationInfo] = useState({
        userName: '',
        userMail: '',
        userDateOfBirth: '',
        userInfoAboutEvent: '',
    })

    const handleChange = (e)=>{
        const value = e.target.value;
        setRegistrationInfo({
            ...registrationInfo,
            [e.target.name]: value
        });
    }

    return(
        <div className='register-page'>
            <form className='register-page_form'>
            <span className='register-page_form_title'> Event Registration </span>
                <ul>
                    <li><input type="text" onChange={handleChange} className='register-page_form_input' value={registrationInfo.userName} name="userName" placeholder="Full name"></input></li>
                    <li><input type="email" onChange={handleChange}  className='register-page_form_input' value={registrationInfo.userMail} name="userMail" placeholder="Your mail"></input></li>
                    <li>
                        <label>
                            Date of birth:
                            <input type="date" className="register-page_form_date" onChange={handleChange} name="deadline" 
                            max={`${currentDate.getFullYear() - 14}-${currentDate.getMonth() < 10 ? "0" + (currentDate.getMonth()+1) : currentDate.getMonth()}-${currentDate.getDate() < 10 ? "0" + currentDate.getDate() : currentDate.getDate()}`} />
                        </label>
                    </li>
                    <li> 
                        <span> Where did you hear about this event? </span>
                        <div className='register-page_ratio__wraapper'>
                            <div>
                                <label className="register-page_container">
                                    <input className="register-page_ratio" type="radio" id="socialMedia" name="userInfoAboutEvent" value="socialMedia"/>
                                    <div className="register-page_ratio_checkmark"></div>
                                    <span className="register-page_ratio_text">Social media</span>
                                </label>
                            </div>
                            <div>
                                <label className="register-page_container">
                                    <input className="register-page_ratio" type="radio" id="friends" name="userInfoAboutEvent" value="friends" />
                                    <div className="register-page_ratio_checkmark"></div>
                                    <span className="register-page_ratio_text">Friends</span>
                                </label>    
                            </div>
                            <div>
                                <label className="register-page_container">
                                    <input className="register-page_ratio" type="radio" id="myself" name="userInfoAboutEvent" value="myself" />
                                    <div className="register-page_ratio_checkmark"></div>
                                    <span className="register-page_ratio_text">Found myself</span>
                                </label>    
                            </div>
                        </div>
                    </li>
                </ul>
                <button className='register-page_form_button'> Send </button>
            </form>
        </div>
    )
}