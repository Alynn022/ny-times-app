import React, { useContext, useEffect, useState} from 'react';
import { MyContext } from '../Context/context';
import { Link } from 'react-router-dom';
import getData from '../apiCalls';
import Error from '../Error/Error';

const SearchView = () => {
  const { setCurrentArticle } = useContext(MyContext)
  const [ searchedArticles, setSearchedArticles] = useState([])
  const { error, setError } = useContext(MyContext)
  const { userInput, setUserInput } = useContext(MyContext)
 
  useEffect(() => {
    getData()
    .then(data => {
      const searchArticles = data.results.filter(article => 
        article.title.includes(userInput)
      )
      setSearchedArticles(searchArticles)
    })
    .catch((response) => {
      if (response.status < 500) {
        setError(`We're sorry, something went wrong. Either the page doesn't exist, or could not be found.`)
      } else {
        setError(`We're sorry, something went wrong with the server. Please try again later`)
      }
    })
  }, [])

  const renderFilteredTitle = () => {
    if (searchedArticles && searchedArticles.length > 0) {
    return searchedArticles.map((elem, i) => 
      <Link to={`/key/${i + '-' + elem.title}`} key={elem.short_url}>
        <section className={i} id={elem.short_url} onClick={() => getCurrentArticle(elem.short_url)}>
          <p className='filtered-title'>{elem.title}</p>
        </section>
      </Link>)
    } 
  }

  const getCurrentArticle = (id) => {
    const getArticle = searchedArticles.find(article => {
      return id === article.short_url
    })
    setCurrentArticle(getArticle)
  }

  return (
    <section>
      <Link to='/'>
        <button onClick={() => setUserInput(() => '')}>Home</button>
      </Link> 
      {!error && 
        <>
          {searchedArticles && <p className='article-result'>Article results for: {userInput}</p>}
          {!searchedArticles && <p> Sorry, there were no article results for: {userInput}</p>}
          {renderFilteredTitle()}
          <p>Press the back button to explore other articles</p>
        </>
      }
      {error && <Error/>}
    </section>
  )
}

export default SearchView;