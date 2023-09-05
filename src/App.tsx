// import { ThemeProvider } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import { theme } from './Theme';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {

  // Change the title of the page based on the current route
  const location = useLocation();
  const developers: Record<string, string> = {
    Parham: 'Developer - Parham',
    Thomas: 'Developer - Thomas',
    Edvin: 'Developer - Edvin',
    Leon: 'Developer - Leon',
  };
  const title: string = developers[location.pathname.split('/')[2]] || 'FifthElement';

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    </ThemeProvider>
  );
}
