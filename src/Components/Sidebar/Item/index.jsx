import styled from "styled-components"

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  gap: 22px;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
  font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
  cursor: pointer;
`

function Item({ children, iconeAtivo, iconeInativo, ativo = false }) {
    return (
      <StyledItem $ativo={ativo}>
				<img src={ativo ? iconeAtivo : iconeInativo } alt="Ícone da Sessão"/>
				{ children }
			</StyledItem>
    )
}

export default Item 