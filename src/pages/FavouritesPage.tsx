import React from 'react'
import { useAppSelector } from '../hooks/redux'

const FavouritesPage = () => {

	const {favourites} = useAppSelector(state => state.github);

	if(favourites.length === 0) return <p className='text-center mt-4'>Not Found</p>

	return (
		<ul className='list-none text-center mt-4'>
			{favourites.map(repo => <li key={repo} className='mb-2'>{repo}</li>)}
		</ul>
	)
}

export default FavouritesPage