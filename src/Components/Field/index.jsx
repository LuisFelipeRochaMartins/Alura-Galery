import styled from "styled-components";
import search from './search.png'

const Container = styled.div`
	display: inline-block;
	position: relative; 
`

const Input = styled.input`
	width: 566px;
	height: 56px;
	padding: 12px 16px;
	border-radius: 10px;
	border: 2px solid;
	border-color: #C98CF1;
	box-sizing: border-box;
	background-color: transparent;
	color: #D9D9D9;
	font-weight: 400;
	font-size: 20px;
	line-height: 20px;
`

const Icon = styled.img`
	position: absolute;
	top: 10px;
	right: 10px;
	width: 38px;
	height: 38px;
`

function Field({ value, onChange }) {
	return (
		<>
			<Container>
				<Input 
					placeholder="O que você procura?" 
					value={ value } 
					onChange={ e => onChange(e.target.value) }
				/>
				<Icon 
					src={search} 
					alt="Ícone de Lupa"
				/>
			</Container>
		</>
	);
}

export default Field;