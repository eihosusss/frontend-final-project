import React, { useReducer, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import BookingForm from './BookingForm';

// Initialize times (this function will later be used with useReducer)
export const initializeTimes = () => {
    const today = new Date().toISOString().split('T')[0];
    return window.fetchAPI(today); // Use the global fetchAPI function
};

// Update times (this will update the available times based on the selected date)
export const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') {
        return window.fetchAPI(action.date); // Fetch the available times for the selected date
    }
    return state;
};

function BookingMain() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        // Fetch times when the component mounts or date changes
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    }, [selectedDate]);

    // Function to handle form submission
    const submitForm = (formData) => {
        const success = window.submitAPI(formData); // Use the global submitAPI function
        if (success) {
            navigate('/reservations-confirmation'); // Navigate to the confirmation page
        } else {
            alert('Submission failed. Please try again.');
        }
    };

    return (
        <div>
            <h1>Make a Reservation</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </div>
    );
}

export default BookingMain;