import React, { useContext } from 'react';
import '../App.css';
import axios from 'axios';
import { Context } from '../context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/action';

const SearchBar = () => {
  const { search, setSearch } = useContext(Context);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);

  const handleSearch = () => {
    dispatch(fetchData(search))
    setSearch('');
  };

  return (
    <div className='searchbar'>
      <div className='search__container'>
        <input
          type='text'
          className='search__input'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='search__button' onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

