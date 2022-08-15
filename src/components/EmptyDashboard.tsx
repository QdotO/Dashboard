import React from 'react';
import styled from 'styled-components';
import EmptyDashboardIcon from '../icons/EmptyDashboardIcon';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--cvna-color-blue-6);
`;

const Header = styled.h1`
  font-weight: 450;
  font-size: 1.75rem;
  line-height: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;
const SubHeader = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const SupportMessage = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
`;
const SupportLink = styled.a`
  font-weight: 450;
  font-size: 0.875rem;
  line-height: 1rem;
  color: var(--cvna-color-blue-2);
`;

const supportLink = "https://carvanapartners.zendesk.com/hc/en-us";

function EmptyDashboard() {
  return (
    <Container>
      <EmptyDashboardIcon />
      <Header>Oh no! Your dashboard seems empty...</Header>
      <SubHeader>Try refreshing the page</SubHeader>

      <SupportMessage>Or, contact our <SupportLink href={supportLink}>SUPPORT</SupportLink></SupportMessage>
    </Container>
  )
}

export default EmptyDashboard;