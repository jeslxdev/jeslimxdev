import styled from 'styled-components';

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  background-color: transparent;
  position: relative;
  z-index: 100;
  /* Ensure content starts below navbar and stays above footer */
  padding-top: var(--nav-safe-top);
  padding-bottom: calc(var(--footer-safe-bottom) + 20px);
`;

export default MainContent;
