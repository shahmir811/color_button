import { useState } from 'react';

import './App.css';

const App = () => {
	const [buttonColor, setButtonColor] = useState('red');
	const [checked, setChecked] = useState(false);
	const [text, setText] = useState('Change to blue');

	const onChangeColor = () => {
		const newColor = buttonColor === 'red' ? 'blue' : 'red';
		const newText = text === 'Change to blue' ? 'Change to red' : 'Change to blue';

		setButtonColor(newColor);
		setText(newText);
	};

	return (
		<div>
			<button disabled={checked} style={{ backgroundColor: buttonColor }} onClick={onChangeColor}>
				{text}
			</button>

			<label htmlFor='enable-button-checkbox'>
				<input
					type='checkbox'
					id='enable-button-checkbox'
					defaultChecked={checked}
					aria-checked={checked}
					onChange={() => setChecked(!checked)}
				/>
				Check Me!
			</label>
		</div>
	);
};

export default App;
