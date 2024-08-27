import React, { useState } from 'react';

const formStyle = {
    maxWidth: '500px',
    padding: '20px',
    background: '#f4f7f8',
    margin: '10px auto',
    borderRadius: '16px',
    fontFamily: 'Karla, serif',
    fontSize: '20px',
    display: 'grid',
    gap: '20px'
};

const inputStyle = {
    fontFamily: 'Karla, serif',
    background: '#e8eeef',
    border: 'none',
    borderRadius: '4px',
    fontSize: '18px',
    margin: '0',
    outline: '0',
    padding: '10px',
    width: '100%',
    boxSizing: 'border-box',
    color: '#8a97a0',
    boxShadow: '0 1px 0 rgba(0,0,0,0.03) inset',
    marginBottom: '10px'
};

const inputErrorStyle = {
    ...inputStyle,
    border: '2px solid red'
};

const inputFocusStyle = {
    background: '#F4CE14'
};

const selectStyle = {
    ...inputStyle,
    height: '35px',
    WebkitAppearance: 'menulist-button'
};

const submitStyle = {
    position: 'relative',
    display: 'block',
    padding: '19px 39px',
    color: 'black',
    margin: '0 auto',
    background: '#F4CE14',
    fontSize: '20pt',
    textAlign: 'center',
    width: '100%',
    border: 'none',
    borderRadius: '4px',
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'background 0.3s'
};

const submitActiveStyle = {
    background: '#F4CE14',
};

const submitInactiveStyle = {
    background: '#F1B90F',
    cursor: 'not-allowed',
    border: 'none',
};

const submitHoverStyle = {
    background: '#F4CE14'
};

const buttonTextStyle = {
    fontFamily: 'Karla, serif',
    fontSize: '20pt',
    lineHeight: '1.2',
};

function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [guestError, setGuestError] = useState('');

    const isFormValid = () => {
        return date && time && guests >= 1 && guests <= 10 && occasion;
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    };

    const handleGuestsChange = (e) => {
        const guestCount = Number(e.target.value);
        if (guestCount < 1 || guestCount > 10) {
            setGuestError('Number of guests must be between 1 and 10');
        } else {
            setGuestError('');
        }
        setGuests(guestCount);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValid()) {
            submitForm({ date, time, guests, occasion });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={formStyle}
        >
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                style={inputStyle}
                onFocus={(e) => e.target.style.background = inputFocusStyle.background}
                onBlur={(e) => e.target.style.background = inputStyle.background}
                required
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={selectStyle}
                onFocus={(e) => e.target.style.background = inputFocusStyle.background}
                onBlur={(e) => e.target.style.background = selectStyle.background}
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
                onChange={handleGuestsChange}
                style={guestError ? inputErrorStyle : inputStyle}
                onFocus={(e) => e.target.style.background = inputFocusStyle.background}
                onBlur={(e) => e.target.style.background = inputStyle.background}
                required
            />
            {guestError && <div style={{ color: 'red', marginBottom: '10px' }}>{guestError}</div>}

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                style={selectStyle}
                onFocus={(e) => e.target.style.background = inputFocusStyle.background}
                onBlur={(e) => e.target.style.background = selectStyle.background}
                required
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input
                type="submit"
                value="Make Your Reservation"
                style={isFormValid() ? { ...submitStyle, ...submitActiveStyle } : { ...submitStyle, ...submitInactiveStyle }}
                onMouseOver={(e) => {
                    if (isFormValid()) {
                        e.target.style.background = submitHoverStyle.background;
                    }
                }}
                onMouseOut={(e) => {
                    if (isFormValid()) {
                        e.target.style.background = submitActiveStyle.background;
                    }
                }}
                disabled={!isFormValid()}
            />
        </form>
    );
}

export default BookingForm;