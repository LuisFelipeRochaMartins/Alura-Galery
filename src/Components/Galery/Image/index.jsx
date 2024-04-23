import styled from "styled-components"

import Botao from "../../Button"

const Figure = styled.figure`
	width: ${(props) => (props.$expanded ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
			max-width: 100%;
			border-radius: 20px 20px 0 0;
    }
    figcaption {
			background-color: #001634;
			border-radius: 0px 0px 20px 20px;
			color: white;
			box-sizing: border-box;
			padding: 12px;
			h3 {
				font-family: 'GandhiSansBold';
			}
			h4 {
				flex-grow: 1;
			}
			h3,
			h4 {
				margin: 0;
				font-size: 16px;
			}
    }
`

const Footer = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

function Image({ photo, expanded = false, onZoomInPhoto, onToggleFavorite }) {
	return (
		<Figure $expanded={ expanded } id={`foto-${photo.id}`}>
			<img src={ photo.path } alt={ photo.titulo }/>
			<figcaption>
				<h3>{ photo.titulo }</h3>
				<Footer>
					<h4>{ photo.fonte }</h4>
					<Botao onClick={ () => onToggleFavorite(photo) }>
						<img src={ photo.favorite ? "/icons/favorito-ativo.png" : "/icons/favorito.png" } alt="Icone de favorito" />
					</Botao>
					{!expanded && <Botao aria-hidden={ expanded } onClick={() => onZoomInPhoto(photo) }>
						<img src="/icons/expandir.png" alt="Icone de expandir" />
					</Botao>}
				</Footer>
			</figcaption>
		</Figure> 
	)
}

export default Image