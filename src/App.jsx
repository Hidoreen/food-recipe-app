import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Search from './pages/search';
import Favourite from './pages/favourite';
import Details from './pages/details';
import './index.css'

function App() {
 
  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600'>
      <h1>Hello from main page!</h1>
      <Navbar/>

      <Routes>
                <Route 
          path='/'
          element={<Search/>}
          />
                  <Route 
          path='/details/:id'
          element={<Details/>}
          />
                  <Route 
          path='/favourite'
          element={<Favourite/>}
          />
      </Routes>

      </div>

    </div>
  );
}

export default App;

