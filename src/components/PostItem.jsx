import React from 'react'
import styled from 'styled-components'

const LI = styled.li`
	width: 60%;
	height: 90%;
	margin-bottom: 50px;
	background-color: red;
	list-style-type: none;
	&:hover {
		background: rgba(0, 0, 0, 0);
		color: #3a7999;
		box-shadow: inset 0 0 0 3px #3a7999;
	}
`

const PostItem = (props) => {
	return (
		<LI>
			<h5>{props.title}</h5>
			<img src={props.thumbnailUrl} alt='foto' />
		</LI>
	)
}

export default PostItem
