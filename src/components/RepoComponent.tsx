import React from 'react'
import { useLocation} from 'react-router-dom'

const RepoComponent = () => {
	const location = useLocation();
	const {repo} = location.state;
	console.log(repo)

	return (
		<div className='flex flex-col m-auto items-center pt-4 max-w-[500px]'>
			<h3 className='font-bold'>Создатель: {repo.owner.login}</h3>
			<ul className=''>
				<li>Название репозитория: {repo.name}</li>
				<li>Время создания: {repo.created_at}</li>
				<li>Последнее обновление: {repo.pushed_at}</li>
				<li>SSH: {repo.ssh_url}</li>
			</ul>
		</div>
	)
}

export default RepoComponent