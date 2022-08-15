import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Loading from './Loading';

const loadingHeight = '1.75rem';

const Horizontal = styled.hr`
  border: 1px solid var(--cvna-color-grey-2);
`;

const LoadingTitle = styled(Loading)`
  height: ${loadingHeight};
  width: 30%;
`;

const LoadingHeader = styled(Loading)`
  height: ${loadingHeight};
  width: 40%;
`;

const LoadingParagraph = styled(Loading)`
  height: ${loadingHeight};
  width: 50%;
`;


function LoadingContent() {
  return (
    <Container>
      <LoadingTitle />
      <Horizontal />
      <LoadingHeader />
      <LoadingParagraph />
      <LoadingParagraph />
      <LoadingParagraph />
    </Container>
  )
}

export default LoadingContent;
