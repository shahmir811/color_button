import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
	render(<App />);

	// find an element with a role of button and text of 'Change to blue'
	const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

	// expect the background color to be MediumVioletRed
	expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

	// click button
	fireEvent.click(colorButton);

	// expect the background color to be MidnightBlue
	expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

	// expect the button text to be 'Change to Medium Violet Red'
	expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
	render(<App />);

	// check that the button starts out enabled
	const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
	expect(colorButton).toBeEnabled();

	// check that the checkbox starts out unchecked
	const checkbox = screen.getByRole('checkbox');
	expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', () => {
	render(<App />);
	const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
	const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

	fireEvent.click(checkbox);
	expect(colorButton).toBeDisabled();

	fireEvent.click(checkbox);
	expect(colorButton).toBeEnabled();
});

describe('spaces before camel-case capital letters', () => {
	test('Works for no inner capital letters', () => {
		expect(replaceCamelWithSpaces('Red')).toBe('Red');
	});
	test('Works for one inner capital letter', () => {
		expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
	});
	test('Works for multiple inner capital letters', () => {
		expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
	});
});
