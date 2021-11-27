import '../styles/globals.scss';
import { useEffect } from 'react';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>

  <content>

    <div className='appWrapper'>
        <div>
        <MainNav/>
        <Component {...pageProps} />
        </div>
        
        <div className=''>
        <Footer/>
        </div>
    </div>
   
  </content>
  </ThemeProvider>
  )
}

export default MyApp
