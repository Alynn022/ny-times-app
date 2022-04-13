import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';

const App = () => {
  return (
    <main>
      <Header/>
      <Routes>
        <Route path='/' />
      </Routes>
    </main>
  )
}

export default App;
