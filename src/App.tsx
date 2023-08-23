import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>header</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}

export default App;
