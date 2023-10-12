import { BrowserRouter } from 'react-router-dom';
import { StyledToastContainer } from 'styles/App.styles';
import GlobalStyles from 'styles/GlobalStyles.styles';
import { LoadingContextProvider } from 'context/loadingContext';
import { ThemeProvider } from 'context/themeContext';
import Router from './Router';
import 'rc-picker/assets/index.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/swiper.css';
import 'swiper/swiper-bundle.min.css';

function App() {
  return (
    <LoadingContextProvider>
      <ThemeProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <StyledToastContainer />
      </ThemeProvider>
    </LoadingContextProvider>
  );
}

export default App;
