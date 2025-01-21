import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/main'; 
import { Provider } from 'react-redux'; 
import { store } from './store';

const rootElement = document.getElementById('root') as HTMLElement; 
const root = createRoot(rootElement); 

root.render(
  <StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </StrictMode>
);
