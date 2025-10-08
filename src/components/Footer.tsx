import styled from 'styled-components';
import { ContentContainer } from '../styles/ContentContainer';

const FooterWrapper = styled.footer`
  background-color: transparent;
  padding: 40px 20px;
  color: #f5f5f5;
  width: 100%;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  position: relative;
  z-index: 100;
`;

const Link = styled.a`
  color: #f5f5f5;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: rgba(245, 245, 245, 0.7);
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
        <p>© {new Date().getFullYear()} Jeslimx. All rights reserved.</p>
      </ContentContainer>
    </FooterWrapper>
  );
};

export default Footer;
