import { useState } from 'react';

import './App.css';

const App = () => {
	const [buttonColor, setButtonColor] = useState('red');
	const [text, setText] = useState('Change to blue');

	const onChangeColor = () => {
		const newColor = buttonColor === 'red' ? 'blue' : 'red';
		const newText = text === 'Change to blue' ? 'Change to red' : 'Change to blue';

		setButtonColor(newColor);
		setText(newText);
	};

	return (
		<div>
			<button style={{ backgroundColor: buttonColor }} onClick={onChangeColor}>
				{text}
			</button>
		</div>
	);
};

export default App;
