import React, { useContext } from 'react';
import { MyContext } from '../Context/context';
import './SortFeature.css';
import { Link } from 'react-router-dom';
import FilteredView from '../FilteredView/FilteredView';


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
        <p>| {tab} | </p>
      </Link>  
      )
    }
  }
  
  return(
    <section className='tabs-container'>
     {getTabs()}
    </section>
  )
}


export default SortFeature;