import {Routes, Route} from 'react-router-dom'
import FavouritesPage from './pages/FavouritesPage';
import HomePage from './pages/HomePage';

function App() {
  return (
		<Routes>
			<Route path='/' element={<HomePage />}/>
			<Route path='/favourites' element={<FavouritesPage />}/>
		</Routes>
  );
}

export default App;