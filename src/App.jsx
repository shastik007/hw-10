import React, { useEffect, useState } from 'react'
import './App.css'
import Post from './components/Post'
import Backdrop from './UI/Backdrop'
import Loading from './UI/Loading'

function App() {
	const [data, setData] = useState([])
	const [loading, setLoad] = useState(true)
	useEffect(() => {
		const request = async () => {
			const data = await fetch(
				'https://jsonplaceholder.typicode.com/photos?_limit=10',
			)
			if (data.ok) {
				setTimeout(() => {
					setLoad(false)
				}, 2000);
				
			}
			console.log(data)
			const json = await data.json()
			return setData([...json])
		}
		request()
	}, [])

	return (
		<div className='App'>
			{loading && <Loading className="loading" type="spinningBubbles" color="blue" height="150px" width="150px" />}
			{loading && <Backdrop/>}
			{!loading && <Post data={data} />}
		</div>
	)
}

export default App
