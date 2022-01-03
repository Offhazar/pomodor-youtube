import ReactDOM from 'react-dom';
import SettingsContextProvider from './context/SettingsContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>,
  document.getElementById('root')
);
