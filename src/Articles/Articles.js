import React, { useContext, useEffect } from 'react';
import { MyContext } from '../Context/context';
import { Link } from 'react-router-dom';
import getData from '../apiCalls';
import SortFeature from '../SortFeature/SortFeature';
import Error from '../Error/Error';

const Articles = () => {
  const { articles, setArticles } = useContext(MyContext)
  const { error , setError } = useContext(MyContext)
  const { setCurrentArticle } = useContext(MyContext)

  useEffect(() => {
    getData()
    .then(data => {
      setArticles(data.results)
    })
    .catch((response) => {
      if (response.status < 500) {
        setError(`We're sorry, something went wrong. Either the page doesn't exist, or could not be found.`)
      } else {
        setError(`We're sorry, something went wrong with the server. Please try again later`)
      }
    }) 
  }, [setArticles, setError])

  const renderTitle = () => {
    if (articles && articles.length > 0) {
      return articles.map((elem, i) => 
        <Link to={`/key/${i + '-' + elem.title}`} key={elem.short_url}>
          <section className={i} id={elem.short_url} onClick={() => getCurrentArticle(elem.short_url)}>
            <p className='article-title'>{elem.title}</p>
          </section>
        </Link>
      )
    }
  }
  
  const getCurrentArticle = (id) => {
    const getArticle = articles.find(article => {
      return id === article.short_url
    })
    setCurrentArticle(getArticle)
  }

  return(
    <section className='articles-container'>
      <SortFeature/>
      {!error &&
        <>
          <h3>Top Articles:</h3>
          {renderTitle()}
        </>  
      }
      {error && <Error/>} 
    </section>
  )
}

export default Articles;