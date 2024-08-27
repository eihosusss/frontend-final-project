import React, { useReducer, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

export const initializeTimes = () => {
    const today = new Date().toISOString().split('T')[0];
    return window.fetchAPI(today);
};

export const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') {
        return window.fetchAPI(action.date);
    }
    return state;
};

function BookingMain() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    }, [selectedDate]);

    const submitForm = (formData) => {
        const success = window.submitAPI(formData);
        if (success) {
            navigate('/reservations-confirmation');
        } else {
            alert('Submission failed. Please try again.');
        }
    };

    return (
        <div>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </div>
    );
}

export default BookingMain;