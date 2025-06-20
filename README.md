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

### `onClose` (callback function):

This is the callback function to close the modal.

## Usage

Example of how to integrate this modal into your project.

First, create a div with ID for triggering the modal into your index.html

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title></title>
	</head>
	<body>
		<div id="root"></div>
		<!-- ID to refer for modal container -->
		<div id="modalPortal"></div>
		<script type="module" src="/src/main.jsx"></script>
	</body>
</html>
```

Then, import the component into your dedicated file

```jsx
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from 'hrnet-simple-modal';

function App() {
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
						onClose={() => setIsOpen(false)} // this props must be a function
					/>,
					document.getElementById('modalPortal') //ID of the container in index.html
				)}
		</>
	);
}
```
