import React, { useContext } from 'react';
import { MyContext } from '../Context/context';
import { Link } from 'react-router-dom';
import './ArticleDetailView.css';

const ArticleDetailView = () => {
  const { currentArticle } = useContext(MyContext)

  const displayMedia = () => {
    let currentImage = currentArticle.multimedia.find(image => {
      return image.width === 600
    })
      return (
        <img className='detail-image' src={currentImage.url} key={currentImage.url} alt={currentImage.caption}/>
      )
    }

  return (
    <section className='detail-view'>
       <Link to='/'>
        <button>Home</button>
      </Link> 
      {displayMedia()}
      <h2>{currentArticle.title}</h2>
      <p className='abstract'>{currentArticle.abstract}</p>
      <p> To read more: <a href={currentArticle.url} target="_blank" rel="noreferrer">click here</a></p>
    </section>
  )
}

export default ArticleDetailView