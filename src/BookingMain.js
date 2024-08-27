import React, { useReducer, useEffect, useState } from 'react';
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

    useEffect(() => {
        // Fetch times when the component mounts or date changes
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    }, [selectedDate]);

    return (
        <div>
            <h1>Make a Reservation</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    );
}

export default BookingMain;