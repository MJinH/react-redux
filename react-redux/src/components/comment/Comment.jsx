import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../redux/apiCalls';

const Comment = () => {

    const {userData} = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleClick = () => {
        remove(dispatch)
    }

    return (
        <>
            <div className="comment">
                <span>{`UserName: ${userData.name}`}</span>
                <span>{`UserEmail: ${userData.email}`}</span>
                <span>{`Comment: ${userData.comment}`}</span>
            </div>
            <button className="remove" onClick={handleClick}>Remove</button>
        </>
    );
}

export default Comment;
