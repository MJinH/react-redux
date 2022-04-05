import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/apiCalls';

const Login = () => {
    
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [comment,setComment] = useState("")

    const dispatch = useDispatch()
    const handleClick = (e) => {
        e.preventDefault()
        const userData =  {
            name:name,
            email:email,
            comment:comment
        }
        updateUser(userData,dispatch)
    }

    return (
        <form>
            <div className="form-item">
                <label>UserName</label>
                <input 
                    className="form-input"
                    type="text"
                    onChange={e => setName(e.target.value)}  
                />
            </div>
            <div className="form-item">
                <label>Email</label>
                <input 
                    className="form-input" 
                    type="text"
                    onChange={e => setEmail(e.target.value)}     
                />
            </div>
            <div className="form-item">
                <label>Comment</label>
                <textarea 
                    cols="20" 
                    rows="5"
                    maxLength="100"
                    onChange={e => setComment(e.target.value)}
                >
                </textarea>
            </div>
            <button className="form-button" type="submit" onClick={e => handleClick(e)}>
                Send
            </button>
        </form>
    );
}

export default Login;
