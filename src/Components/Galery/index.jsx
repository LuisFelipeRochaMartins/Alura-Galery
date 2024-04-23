import styled from "styled-components"
import Tags from "./Tags"
import Popular from "./Popular"
import Image from "./Image"

export const Title = styled.h2`
	color: #7B78E6;
	font-size: 32px;
	text-align: ${ props => props.align ? props.align : 'left' };
` 

const GaleryContainer = styled.div`
	display: flex;
	margin-bottom: 24px;
`

const FluidSection = styled.section`
	flex-grow: 1;
`

const ImagesContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
`

function Galery({ photos = [], onSelectPhoto, onToggleFavorite }) {
	return (
		<>
			<Tags />
			<GaleryContainer>
				<FluidSection>
					<Title>Navegue pela Galeria</Title>
					<ImagesContainer>
						{ photos.map(photo =>  <Image
							onZoomInPhoto={ onSelectPhoto }
							key={ photo.id }
							onToggleFavorite={ onToggleFavorite }
							photo={ photo }
						/>
						)}
					</ImagesContainer>
				</FluidSection>
				<Popular />
			</GaleryContainer>
		</>
	)
}

export default Galery