import { React, useContext } from 'react'; 
import { MyContext } from '../Context/context';
import { Link } from 'react-router-dom';
import '../Articles/Articles.css';

const SearchBar = () => {
  const { userInput, setUserInput } = useContext(MyContext)

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <form className='search-bar'> 
      <input 
        type='text'
        placeholder='Search By Title'
        name='userInput'
        value={userInput}
        onChange={handleChange}
      />
      <Link to={`/search/${userInput}`} key={userInput}>
      <button 
        className='search-btn'
      > Search </button>
      </Link> 
    </form>
  )
}

export default SearchBar; 