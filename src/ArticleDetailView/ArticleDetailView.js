import React, { useContext } from 'react';
import { MyContext } from '../Context/context';

const ArticleDetailView = () => {
  const { currentArticle } = useContext(MyContext)

  const displayMedia = () => {
    let currentImage = currentArticle.multimedia.find(image => {
      return image.width === 600
    })
      return (
        <img src={currentImage.url} key={currentImage.url} alt={currentImage.caption}/>
      )
    }
  
  console.log(currentArticle)

  return (
    <section>
      {displayMedia()}
      <h2>{currentArticle.title}</h2>
      <p>{currentArticle.abstract}</p>
      <p> To read more: <a href={currentArticle.url}>click here</a></p>
    </section>
  )
}

export default ArticleDetailView