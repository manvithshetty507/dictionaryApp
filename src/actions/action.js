import axios from 'axios';
import reducer from '../reducers/reducer'
import historyReducer from '../reducers/historyReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';

//constants
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY'

const rootReducer = combineReducers({
    data: reducer,  // Assuming your reducer handles data state
    history: historyReducer,
  });

//create and export store
export const store = createStore(rootReducer,applyMiddleware(logger,thunk));

//action creators
export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const AddToHistory = (data) => ({ type: ADD_TO_HISTORY, payload: data });


// async action using thunk => NOTE: thunk recieves dispatch as default

export const fetchData = (search) => {
    return async (dispatch) => {
      dispatch(fetchDataRequest());
      try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
        dispatch(fetchDataSuccess(response.data));
        // Check if response.data is defined before accessing its properties
        const word = response.data && response.data.length > 0 ? response.data[0].word : '';
        dispatch(AddToHistory(word));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };
  };

  export const historyFetchData = (word) => {
    return async(dispatch) => {
      try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        console.log(response.data);
        dispatch(fetchDataSuccess(response.data))
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    }
  }

export default rootReducer;