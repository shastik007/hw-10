import React, { useEffect, useState } from 'react'
import './App.css'
import Button from './UI/Button'
import Post from './components/Post'

function App() {
	const [data, setData] = useState([])
	const [button, setButton] = useState(false)
	useEffect(() => {
		const request = async () => {
			const data = await fetch(
				'https://jsonplaceholder.typicode.com/photos?_limit=10',
			)
			console.log(data)
			const json = await data.json()
			return setData([...json])
		}
		request()
	}, [button])

	return (
		<div className='App'>
			<Post data={data} />
		</div>
	)
}

export default App
