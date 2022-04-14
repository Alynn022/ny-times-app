import React, { useContext } from 'react';
import { MyContext } from '../Context/context';
import './SortFeature.css';
import { Link } from 'react-router-dom';

const SortFeature = () => {
  const { articles } = useContext(MyContext)
  let tabs = []

  const getTabs = () => {
    if (articles && articles.length > 0) {
      articles.forEach(elem => {
      if (!tabs.includes(elem.section)) {
        tabs.push(elem.section)
      }
    })
      return tabs.map((tab, i) =>
      <Link to={`/tab/${tab}`} key={i + tab}>
        <p className='tabs'>| {tab} | </p>
      </Link>  
      )
    }
  }
  
  return(
    <section className='tabs-container'>
      <h3>Tabs to filter stories by:</h3>
      <article className='all-tabs'>
        {getTabs()}
      </article> 
    </section>
  )
}

export default SortFeature;