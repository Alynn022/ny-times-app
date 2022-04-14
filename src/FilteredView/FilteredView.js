import React, { useContext, useEffect, useState} from 'react';
import { MyContext } from '../Context/context';
import { Link } from 'react-router-dom';
import getData from '../apiCalls';
import Error from '../Error/Error';

const FilteredView = () => {
  const { setCurrentArticle } = useContext(MyContext)
  const [ filteredArticles, setFilteredArticles] = useState([])
  const { error, setError } = useContext(MyContext)

  const getPathName = window.location.pathname.split('/')
 
  useEffect(() => {
    getData()
    .then(data => {
      const filterArticles = data.results.filter(article => 
        article.section === getPathName[2]
      )
      setFilteredArticles(filterArticles)
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
    if (filteredArticles && filteredArticles.length > 0) {
    return filteredArticles.map((elem, i) => 
      <Link to={`/key/${i + '-' + elem.title}`} key={elem.short_url}>
        <section className={i} id={elem.short_url} onClick={() => getCurrentArticle(elem.short_url)}>
          <p className='filtered-title'>{elem.title}</p>
        </section>
      </Link>)
    }
  }

  const getCurrentArticle = (id) => {
    const getArticle = filteredArticles.find(article => {
      return id === article.short_url
    })
    setCurrentArticle(getArticle)
  }

  return (
    <section>
      <Link to='/'>
        <button>Home</button>
      </Link> 
      {!error && 
        <>
          <p className='article-result'>Article results for: {getPathName[2]}</p>
          {renderFilteredTitle()}
          <p>Press the back button to explore other articles</p>
        </>
      }
      {error && <Error/>}
    </section>
  )
}

export default FilteredView;