import 'reset-css';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import ThemeProvider from 'theme/theme';
import GlobalStyle from 'theme/globalStyle';
import App from './App';
import reportWebVitals from './reportWebVitals';

render(
  <StrictMode>
    <GlobalStyle />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
