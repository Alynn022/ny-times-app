import React, { useContext, useEffect } from 'react';
import { MyContext } from '../Context/context';
import getData from '../apiCalls';
import { Link } from 'react-router-dom';

const Articles = () => {
  const { articles, setArticles } = useContext(MyContext)
  const { setError } = useContext(MyContext)
  const { setCurrentArticle } = useContext(MyContext)

  useEffect(() => {
    getData()
    .then(data => {
      setArticles(data)
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
    if (articles && articles.results && articles.results.length > 0) {
      return articles.results.map((i) => 
      <Link to={`/${i + '-' + i.title}`} key={i.short_url}>
        <section key={i + '-' + i.title} id={i.short_url} onClick={() => getCurrentArticle(i.short_url)}>
          <p>{i.title}</p>
        </section>
      </Link>)
    }
  }
  
  const getCurrentArticle = (id) => {
    const getArticle = articles.results.find(article => {
      return id === article.short_url
    })
    setCurrentArticle(getArticle)
  }

  return(
    <>
    {renderTitle()}
    </>
  )
}

export default Articles;