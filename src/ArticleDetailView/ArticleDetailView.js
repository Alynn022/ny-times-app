import React, { useContext } from 'react';
import { MyContext } from '../Context/context';

const ArticleDetailView = () => {
  const { currentArticle } = useContext(MyContext)

  return (
    <section>
      <h2>{currentArticle.title}</h2>
      <p>{currentArticle.abstract}</p>
    </section>
  )
}

export default ArticleDetailView