import React from 'react';
import { StyledFooter, FooterContainer, SocLink } from './Footer.elements';
import { FaFacebookSquare } from 'react-icons/fa';

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <SocLink>
          <FaFacebookSquare />
        </SocLink>
      </FooterContainer>
    </StyledFooter>
  );
};
