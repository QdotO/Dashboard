import React from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  border: 1px solid var(--cvna-color-grey-2);
  background-color: white;
`;

const WelcomeMessage = styled.p`
  font-weight: 450;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: var(--cvna-color-blue-6);
`;

const DashboardHeader = ({ name }: Props) => (
    <Container>
      <WelcomeMessage>Welcome, {name}.</WelcomeMessage>
    </Container>
  );

export default DashboardHeader;
