import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';

const App = () => {
  return (
    <main>
      <Header/>
      <Routes>
        <Route path='/' element={<Articles/>} />
      </Routes>
    </main>
  )
}

export default App;
