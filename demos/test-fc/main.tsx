import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Child() {
	return <span>test</span>;
}

function App() {
	const [num, setNum] = useState(100);
	// window.setNum = setNum;
	return <div onClick={() => setNum(num + 1)}>{num}</div>;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<App />
);
