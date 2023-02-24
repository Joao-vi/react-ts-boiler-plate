import { createRoot } from 'react-dom/client';

const App = () => {
  return <h1 style={{ color: 'red' }}>Basic Taaemplate</h1>;
};

const container = document.getElementById('root');
if (!container) throw new Error('The root Element was not found');

const root = createRoot(container);
root.render(<App />);
