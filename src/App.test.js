import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct inital color', () => {
	render(<App />);

	// find an element with the role of button and text of 'Change to blue'
	const colorButton = screen.getByRole('button', { name: 'Change to blue' });

	//expect the background color to be red
	expect(colorButton).toHaveStyle({
		backgroundColor: 'red',
	});

	// button has been clicked
	fireEvent.click(colorButton);

	// button turns blue when clicked
	expect(colorButton).toHaveStyle({
		backgroundColor: 'blue',
	});

	// expect the button text to be "Change to red"
	expect(colorButton.textContent).toBe('Change to red');
});
