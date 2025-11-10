import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  position: relative;

  /* O aside menu está no lado direito, não precisa de margem à esquerda */
  /* Removido margin-left que estava causando espaço vazio no lado esquerdo */
`;

export default AppWrapper;
