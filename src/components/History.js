import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { historyFetchData } from '../actions/action';
import Result from './Result';

function History() {
  const searchHistory = useSelector((state) => state.history.history);
  const[flag,setFlag] = useState(false)

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  const handleHistoryItemClick = (word) => {
    dispatch(historyFetchData(word));
    setFlag(true);
  };

  return (
    <div className='history'>
      <h2>Search History</h2>
      {searchHistory &&
        searchHistory.map((word, ind) => (
          <a key={ind} onClick={() => handleHistoryItemClick(word)}>
            {word}
            <br></br>
          </a>
        ))}
       {flag && <Result/>} 
    </div>
  );
}

export default History;
