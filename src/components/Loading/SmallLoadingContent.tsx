import React from 'react'
import styled from 'styled-components';
import Container from './Container';
import Loading from './Loading';

const Title = styled(Loading)`
  margin: 0.5rem;
  height: 1rem;
  width: 80%;
`;

const Body = styled(Loading)`
  margin: 0.5rem;
  height: 2rem;
  width: 33%;
`;

const Footer = styled(Body)`
  height: 1rem;
`;


function SmallLoadingContent() {
  return (
    <Container>
      <Title />
      <Body />
      <Footer />
    </Container>
  )
}

export default SmallLoadingContent;
