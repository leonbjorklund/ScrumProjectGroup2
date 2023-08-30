// import { ThemeProvider } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { theme } from './Theme';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
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
