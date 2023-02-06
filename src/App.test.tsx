import { createRoot } from 'react-dom/client'

it('renders without crashing', () => {
  createRoot(document.createElement('root')).render(<h1>lwterm</h1>)
});


