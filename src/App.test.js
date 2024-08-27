import { render, screen } from "@testing-library/react";
import BookingMain, { initializeTimes, updateTimes } from './BookingMain';
import { jest } from '@jest/globals'; // Import jest for mocking

// Mock the fetchAPI function
const mockFetchAPI = jest.fn();

// Set the mock implementation for fetchAPI
beforeAll(() => {
    global.fetchAPI = mockFetchAPI;
});

test('initializeTimes returns the correct initial times', () => {
    // Define the times you want to return from fetchAPI
    const expectedTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ];

    // Mock fetchAPI to return expectedTimes
    mockFetchAPI.mockImplementation(() => expectedTimes);

    // Run the function
    const actualTimes = initializeTimes();

    // Check the result
    expect(actualTimes).toEqual(expectedTimes);
});

test('updateTimes returns the updated times based on the date', () => {
    // Define the times you want to return from fetchAPI for a given date
    const date = '2024-08-27';
    const expectedTimes = [
        '17:00',
        '18:00',
        '19:00',
    ];

    // Mock fetchAPI to return expectedTimes for the given date
    mockFetchAPI.mockImplementation(() => expectedTimes);

    // Initial state (can be empty or any default value)
    const initialState = [];

    // Action with the date
    const action = { type: 'UPDATE_TIMES', date };

    // Run the function
    const updatedState = updateTimes(initialState, action);

    // Check the result
    expect(updatedState).toEqual(expectedTimes);
});