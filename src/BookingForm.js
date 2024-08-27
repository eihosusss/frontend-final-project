import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    // Handle date change and dispatch the action
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Call submitForm function with formData
        submitForm({
            date,
            time,
            guests,
            occasion,
        });
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '500px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                required
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            >
                {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                placeholder="1"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input
                type="submit"
                value="Make Your Reservation"
            />
        </form>
    );
}

export default BookingForm;