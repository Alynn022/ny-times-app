import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';
import ArticleDetailView from '../ArticleDetailView/ArticleDetailView';

const App = () => {
  return (
    <main>
      <Header/>
      <Routes>
        <Route path='/' element={<Articles/>} />
        <Route path='/:key' element={<ArticleDetailView/>} />
      </Routes>
    </main>
  )
}

export default App;
