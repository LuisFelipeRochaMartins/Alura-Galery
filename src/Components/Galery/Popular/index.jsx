import styled from "styled-components";
import { Title } from "..";

import photos from './fotos-populares.json'

const PopularSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

const Image = styled.img`
	max-width: 212px;
	border-radius: 20px;
`

const Button = styled.button`
	background-color: transparent;
	color: #FFFFFF;
	border: 2px solid;
	border-color: #C98CF1;
	padding: 12px 20px;
	font-size: 20px;
	border-radius: 10px;
	cursor: pointer;
	width: 100%;
	margin-top: 16px;
`

function Popular() {
	return(
		<section>	
			<Title $align='center'>Populares</Title>
			<PopularSection>
				{photos.map(photo => <Image key={ photo.id } src={ photo.path } alt={ photo.titulo }/>)}
			</PopularSection>
			<Button>Ver Mais</Button>
		</section>
	)
}

export default Popular