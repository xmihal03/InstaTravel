// globalStyles.js
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');

	* {
		box-sizing: border-box;
	}

	html {
		font-family: 'Open Sans', sans-serif;
	}

	body {
		margin: 0;
		background: #4d4d4d;
	}

	.slide-in-left-enter {
		transform: translateX(-100%);
	}

	.slide-in-left-enter-active {
		transform: translateX(0);
		opacity: 1;
		transition: all 200ms;
	}

	.slide-in-left-exit {
		transform: translateX(0%);
		opacity: 1;
	}

	.slide-in-left-exit-active {
		transform: translateX(-100%);
		opacity: 0;
		transition: all 200ms;
	}

	main {
		margin-top: 5rem;
	}

	.modal-enter {
  transform: translateY(-10rem);
  opacity: 0;
}

.modal-enter-active {
  transform: translateY(0);
  opacity: 1;
  transition: all 200ms;
}

.modal-exit {
  transform: translateY(0);
  opacity: 1;
}

.modal-exit-active {
  transform: translateY(-10rem);
  opacity: 0;
  transition: all 200ms;
}
`

export default GlobalStyle