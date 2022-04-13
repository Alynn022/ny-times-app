import React, { useContext, useEffect, useState} from 'react';
import { MyContext } from '../Context/context';
import { Link } from 'react-router-dom';
import getData from '../apiCalls';
import SortFeature from '../SortFeature/SortFeature';

const FilteredView = () => {
  const { setCurrentArticle } = useContext(MyContext)
  const [ filteredArticles, setFilteredArticles] = useState([])
  
 const getPathName = window.location.pathname.split('/')
 
 useEffect(() => {
  getData()
  .then(data => {
    const filterArticles = data.results.filter(article => 
       article.section === getPathName[2]
    )
      console.log('filtered', filterArticles)
      setFilteredArticles(filterArticles)
  })
 }, [])


  
  console.log('here', filteredArticles)

  const renderFilteredTitle = () => {
    console.log('meep')
    if (filteredArticles && filteredArticles.length > 0) {
      console.log('inhere', filteredArticles)
    return filteredArticles.map((elem, i) => 
      <Link to={`/key/${i + '-' + elem.title}`} key={elem.short_url}>
        <section id={elem.short_url} onClick={() => getCurrentArticle(elem.short_url)}>
          <p>{elem.title}</p>
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
      <SortFeature/>
      {renderFilteredTitle()}
    </section>
  )
}


export default FilteredView;
