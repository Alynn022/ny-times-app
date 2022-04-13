import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';
import ArticleDetailView from '../ArticleDetailView/ArticleDetailView';
import FilteredView from '../FilteredView/FilteredView';


const App = () => {
  return (
    <main>
      <Header/>
      <Routes>
        <Route path='/' exact element={ <Articles/> } />
        <Route path='/tab/:key' exact element={ <FilteredView/> } />
        <Route path='/key/:key' exact element={ <ArticleDetailView/> } />
      </Routes>
    </main>
  )
}

export default App;
