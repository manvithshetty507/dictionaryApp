import React from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';

function Result() {
  const data = useSelector((state) => state.data.data);
  const error = useSelector((state) => state.data.error);
  const isLoading = useSelector((state) => state.data.isLoading);
  const dispatch = useDispatch();

  return (
    <div className='result'>
      {isLoading ? (
        <p><Loading/></p>
      ) : (
        error ? (
          <p>{error}</p>
        ) : (
          data ? (
            data.map((wordInfo, index) => (
              <div key={index} className='result__content'>
                <h1>{wordInfo.word}</h1>
                <p>{wordInfo.phonetic}</p>
                {wordInfo.phonetics && wordInfo.phonetics.length > 0 && (
                  <audio controls key={wordInfo.word}>
                    {/* Map through phonetics to find the first valid audio source */}
                    {wordInfo.phonetics.map((phonetic, phoneticIndex) => (
                      <source key={phoneticIndex} src={phonetic.audio} type='audio/mpeg' />
                    ))}
                    Your browser does not support the audio element.
                  </audio>
                )}
  
                {wordInfo.meanings && (
                  wordInfo.meanings.map((meaning, index) => (
                    <div key={index}>
                      <h3>{meaning.partOfSpeech}</h3>
                      {meaning.definitions.map((def, ind) => (
                        <div key={ind}>
                          <p>{def.definition}</p>
                        </div>
                      ))}
                    </div>
                  ))
                )}
              </div>
            ))
          ) : (
            <p>No data available</p>
          )
        )
      )}
    </div>
  );
}

export default Result;

