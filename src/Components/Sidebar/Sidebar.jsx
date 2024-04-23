import styled from "styled-components";
import Item from "./Item";

const StyledList = styled.ul`
	list-style: none;
	padding:  0;
	margin: 0;
	width: 212px;
`

function Sidebar() {
	return (
		<aside>
			<nav>
				<StyledList>
					<Item 
						children="Ínicio"
						iconeAtivo="/icons/home-ativo.png"
						iconeInativo="/icons/home-inativo.png"
						ativo={ true }
					/>
					<Item 
						children="Mais Curtidas"
						iconeAtivo="/icons/mais-curtidas-ativo.png"
						iconeInativo="/icons/mais-curtidas-inativo.png"
					/>
					<Item 
						children="Mais Vistas"
						iconeAtivo="/icons/mais-vistas-ativo.png"
						iconeInativo="/icons/mais-vistas-inativo.png"
					/>
					<Item 
						children="Novas"
						iconeAtivo="/icons/novas-ativo.png"
						iconeInativo="/icons/novas-inativo.png"
					/>
					<Item 
					children="Surpreenda-me"
					iconeAtivo="/icons/surpreenda-me-ativo.png"
					iconeInativo="/icons/surpreenda-me-inativo.png"
					/>
				</StyledList>
			</nav>
		</aside>
	)
}

export default Sidebar;