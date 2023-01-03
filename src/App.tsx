import {Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import RepoComponent from './components/RepoComponent';
import FavouritesPage from './pages/FavouritesPage';
import HomePage from './pages/HomePage';

function App() {
  return (
		<>
		<Navigation />
	
		<Routes>
			<Route path='/' element={<HomePage />}/>
			<Route path='/favourites' element={<FavouritesPage />}/>
			<Route path='/repo/:id' element={<RepoComponent />}/>
		</Routes>
		</>
		
  );
}

export default App;