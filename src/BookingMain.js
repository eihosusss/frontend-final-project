import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

// Initialize times (this function will later be used with useReducer)
const initializeTimes = () => [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
];

// Update times (this will update the available times based on the selected date)
const updateTimes = (state, action) => {
    // For now, we return the same available times regardless of the date
    return initializeTimes();
};

function BookingMain() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <div>
            <h1>Make a Reservation</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    );
}

export default BookingMain;
