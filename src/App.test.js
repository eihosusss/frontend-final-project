import { render, screen, fireEvent } from "@testing-library/react";
import BookingMain, { initializeTimes, updateTimes } from './BookingMain'; // Ensure correct import
import BookingForm from './BookingForm';
import { jest } from '@jest/globals';

const mockFetchAPI = jest.fn();

beforeAll(() => {
    global.fetchAPI = mockFetchAPI;
});

test('initializeTimes returns the correct initial times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    mockFetchAPI.mockReturnValue(expectedTimes);

    const actualTimes = initializeTimes();

    expect(actualTimes).toEqual(expectedTimes);
});

test('updateTimes returns the updated times based on the date', () => {
    const date = '2024-08-27';
    const expectedTimes = ['17:00', '18:00', '19:00'];

    mockFetchAPI.mockReturnValue(expectedTimes);

    const initialState = [];
    const action = { type: 'UPDATE_TIMES', date };

    const updatedState = updateTimes(initialState, action);

    expect(updatedState).toEqual(expectedTimes);
});

// HTML5 Validation Tests
describe('BookingForm HTML5 Validation', () => {
    test('date input has required attribute', () => {
        render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
        const dateInput = screen.getByLabelText(/choose date/i);
        expect(dateInput).toHaveAttribute('required');
    });

    test('time select has required attribute', () => {
        render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} submitForm={() => {}} />);
        const timeSelect = screen.getByLabelText(/choose time/i);
        expect(timeSelect).toHaveAttribute('required');
    });

    test('guests input has min, max, and required attributes', () => {
        render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
        expect(guestsInput).toHaveAttribute('required');
    });

    test('occasion select has required attribute', () => {
        render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
        const occasionSelect = screen.getByLabelText(/occasion/i);
        expect(occasionSelect).toHaveAttribute('required');
    });
});

// JavaScript Validation Tests
describe('BookingForm JavaScript Validation', () => {
    test('valid form should enable submit button', () => {
        render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} submitForm={() => {}} />);

        // Fill out the form with valid inputs
        fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-08-27' } });
        fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
        fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '1' } });
        fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

        // Check if submit button is enabled
        expect(screen.getByText(/make your reservation/i)).not.toBeDisabled();
    });

    test('invalid form should disable submit button', () => {
        render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} submitForm={() => {}} />);

        // Leave the form in an invalid state (e.g., guests < 1)
        fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '0' } });

        // Check if submit button is disabled
        expect(screen.getByText(/make your reservation/i)).toBeDisabled();
    });
});