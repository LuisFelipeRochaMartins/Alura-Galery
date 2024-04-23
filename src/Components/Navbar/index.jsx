import styled from "styled-components"
import Field from "../Field"

const Header = styled.header`
	padding: 32px;
	display: flex;
	justify-content: space-around;
	img {
		max-width: 212px;
	};
`

function Navbar({ filterValue, onChangeFilter }) {
	return (
		<>
			<Header>
				<img src="/images/logo.png" alt="Logo do Site"/>
				<Field value={ filterValue } onChange={ onChangeFilter }/>
			</Header>
		</>
	)
}

export default Navbar
