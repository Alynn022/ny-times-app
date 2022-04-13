import React, { createContext, useEffect, useState } from 'react';

const MyContext = createContext() 

const MyProvider = props => {
  const [articles, setArticles] = useState({})
  const [error, setError] = useState()
  const [currentArticle, setCurrentArticle] = useState()

  return (
    <MyContext.Provider value={{
      articles, setArticles,
      error, setError,
      currentArticle, setCurrentArticle
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export { MyContext, MyProvider }