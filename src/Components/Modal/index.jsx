import styled from "styled-components"
import Image from "../Galery/Image"
import Botao from "../Button"

const Overlay = styled.div`
	background-color: rgba(0, 0, 0, 0.7);
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
`

const Dialog = styled.dialog`
	display: flex;
	justify-content: center;
	position: absolute;
	top: 254px;
	border: none;
	background: transparent;
	width: 578px;
	form {
		button {
			position: relative;
			top: 20px;
			right: 60px;
		}
	}
`

function Modal({ photo = false, onClosePhoto, onToggleFavorite }) { 
	return (
		<>	
			{photo && <>
				<Overlay>
					<Dialog open={ photo } onClose={ onClosePhoto }>
						<Image photo={ photo } expanded onToggleFavorite={ onToggleFavorite }/> 
						<form method="dialog">
							<Botao formMethod="dialog">
								<img src="/icons/fechar.png" alt="Ícone de Fechar" />
							</Botao>
						</form>
					</Dialog>
				</Overlay>
			</>}	
		</>
	)
}

export default Modal