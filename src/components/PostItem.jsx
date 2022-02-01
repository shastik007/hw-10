import React from 'react'
import styled from 'styled-components'

const LI = styled.li`
	width: 300px;
	height: 350px;
	margin-bottom: 50px;
	background-color: red;
	list-style-type: none;
	border-radius: 20px;
	transition: 1s;
	&:hover {
		background: rgba(0, 0, 0, 0);
		color: royalblue;
		box-shadow: inset 0 15px 15px 3px black;
	}

	& div {
		display: flex;
		justify-content: space-around;
		padding: 10px;
	}
	& div > div {
		width: 40px;
		height: 30px;
		background-color: black;
		border-radius: 10px;
		align-items: center;
		align-self: center;
	}
`

const PostItem = (props) => {
	return (
		<LI>
			<div>
				<h3>Card</h3>
				<div>
					<h4>{props.id}</h4>
				</div>
			</div>
			<h6>{props.title}</h6>
			<img src={props.thumbnailUrl} alt='foto' />
		</LI>
	)
}

export default PostItem
