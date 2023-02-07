import { createRoot } from 'react-dom/client'


// ensure the app loads
it('renders without crashing', () => {
  createRoot(document.createElement('root')).render(<h1>portfolio-terminal:luke-weller</h1>)
});


