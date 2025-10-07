import styled from 'styled-components';
import { ContentContainer } from '../styles/ContentContainer';

const FooterWrapper = styled.footer`
  background-color: #282c34;
  padding: 20px 0;
  color: white;
  width: 100%;
  text-align: center;
`;

const Link = styled.a`
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentContainer>
        <p>
          <Link href="https://www.linkedin.com/in/joao-emanuel-752778174/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
        </p>
        <p>© {new Date().getFullYear()} João Emanuel. All rights reserved.</p>
      </ContentContainer>
    </FooterWrapper>
  );
};

export default Footer;
