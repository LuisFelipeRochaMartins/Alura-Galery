import styled from "styled-components"

const Image = styled.figure`
	background-image: ${props => `url(${props.$image})`};
	flex-grow: 1;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	align-items: center;
	min-height: 328px;
	margin: 0;
	border-radius: 20px;
	max-width: 100%;
`

const Text = styled.h1`
	font-weight: 400;
	font-size: 40px;
	line-height: 48px;
	padding: 0 64px;
	max-width: 300px;
	color: #FFFFFF;
`

function Banner({image, text}) {
	return (
		<Image $image={ image }> 
			<Text>{ text }</Text>
		</Image>
	)
}

export default Banner