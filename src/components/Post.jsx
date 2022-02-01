import React from 'react'
import PostItem from './PostItem'
import styled from 'styled-components'

const Ul = styled.ul`
	background-color: gray;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`

const Post = (props) => {
	return (
		<Ul>
			{props.data.map((el) => {
				return (
					<PostItem
					    id={el.id}
						key={el.id}
						title={el.title}
						thumbnailUrl={el.thumbnailUrl}
					/>
				)
			})}
		</Ul>
	)
}

export default Post
