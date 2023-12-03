import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import History from './components/History';
import Result from './components/Result';
import SearchBar from './components/SearchBar';
import ContextProvider from './context'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ContextProvider>
        <Routes>
          <Route path='/' 
            element={
              <div>
                <SearchBar />
                <Result />
              </div>
            }
          />
          <Route  path='/history' element={<History />}/>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
