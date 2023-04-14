import React from 'react';
import ReactDOM from 'react-dom/client';

function Child() {
  return <span>test</span>;
}

function App() {
	return (
		<div>
			<Child />
		</div>
	);
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<App />
);
