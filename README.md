# HRnet Simple Modal

## Description

This component is a simple modal used for the hrnet project as part of my React training at Openclassrooms.
This provide a component for Vite and React project.

## Install

#### **Requirements (minimal):**

```bash
React     v19.1.0
ReactDOM  v19.1.0
Vite      v6.3.5
```

#### **Command**

```bash
npm i hrnet-simple-modal
```

## Props

### `title` (string):

This modal have a H2 html element

### `content` (boolean):

Must contain HTML element
ex.

```html
<p classname="my-css-clss">text content</p>
```

```html
<form>...</form>
```

Choose your structure and your css styles.

### `styles`

You can add inline style with this props (ex. fontFace:'your font')

### `onClose` (callback function):

This is the callback function to close the modal.

## Usage

Example of how to integrate this modal into your project.

Import the component into your dedicated file

```jsx
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from 'hrnet-simple-modal';

function App() {
	// create a state to control the toggle
	const [isOpen, setIsOpen] = useState(false);

	// create a function to toggle setIsOpen state
	const handleClickEvent = (e) => {
		e.preventDefault();
		setIsOpen(true);
	};

	return (
		<>
			<button onClick={handleClickEvent}>open Modal</button>
			{isOpen &&
				createPortal(
					<Modal
						title='h2 title'
						content='content display in the modal'
						styles='' // can be empty
						onClose={() => setIsOpen(false)} // this props must be a function it is used into onClick event of the close button on the modal
					/>,
					document.getElementById('modalPortal') // ID of the container where the modal will be rendered
				)}
			{/* Container for the modal */}
			<div id='modalPortal'></div>
		</>
	);
}
```
