import { render, screen } from "@testing-library/react";
import BookingMain from './BookingMain';
import { initializeTimes, updateTimes } from './BookingMain';

test('Renders the BookingMain heading', () => {
    render(<BookingMain />);
    const headingElement = screen.getByText("Make a Reservation");
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns the correct initial times', () => {
    const expectedTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ];

    const actualTimes = initializeTimes();

    expect(actualTimes).toEqual(expectedTimes);
});

test('updateTimes returns the same state that is provided', () => {
    const initialState = initializeTimes(); // The initial state
    const action = { type: 'UPDATE_TIMES', date: '2024-08-27' }; // Action with a sample date

    const updatedState = updateTimes(initialState, action);

    expect(updatedState).toEqual(initialState);
});