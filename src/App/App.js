import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';
import ArticleDetailView from '../ArticleDetailView/ArticleDetailView';
import FilteredView from '../FilteredView/FilteredView';
import Error from '../Error/Error';
import SearchView from '../SearchBar/SearchView';

const App = () => {
  return (
    <main>
      <Header/>
      <Routes>
        <Route path='/' exact element={ <Articles/> } />
        <Route path='/tab/:key' exact element={ <FilteredView/> } />
        <Route path='/search/:key' exact element={ <SearchView/> } />
        <Route path='/key/:key' exact element={ <ArticleDetailView/> } />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </main>
  )
}

export default App;
