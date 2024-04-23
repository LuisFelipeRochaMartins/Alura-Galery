import styled from 'styled-components'
import tags from './tags.json'


const TagsContainer = styled.section`
	display: flex;
	width: 758px;
	height: 49px;
	align-items: center;
	gap: 15px;
	margin: 20px;
`

const TagsButton = styled.button`
	font-size: 24px;
	color: #FFFFFF;
	background: rgba(217, 217, 217, 0.3);
	border-radius: 10px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	padding: 12px;
	box-sizing: border-box;
	border: 2px solid transparent;
	&:hover {
		border-color: #C98CF1;
	}
`

const TagsTitle = styled.p`
	color: #D9D9D9;
	font-size: 24px;
`

function Tags() {
	return (
		<>
			<TagsContainer>
			<TagsTitle>Busque por Tags: </TagsTitle>
				{ tags.map(tag => <TagsButton key={ tag.id }>{ tag.titulo }</TagsButton>)}
			</TagsContainer>
		</>
	)
}

export default Tags