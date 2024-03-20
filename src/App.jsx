import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Search from './pages/search';
import Favourite from './pages/favourite';
import Details from './pages/details';
import './index.css';

function App() {
 
  return (
    <div>
      <div className="min-h-screen">
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

