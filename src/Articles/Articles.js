import React, { useContext, useEffect } from 'react';
import { MyContext } from '../Context/context';
import getData from '../apiCalls';

const Articles = () => {
  const { articles, setArticles } = useContext(MyContext)
  const { setError } = useContext(MyContext)

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
  
  }, [])

  console.log(articles)

  const renderTitle = () => {
    if (articles && articles.results && articles.results.length > 0) {
      return articles.results.map((i) => 
      <section key={i + '-' + i.title}>
        <p>{i.title}</p>
      </section>)
    }
  }

  return(
    <>
    {renderTitle()}
    </>
  )
}

export default Articles;