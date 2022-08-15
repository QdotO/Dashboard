import React from 'react';
import styled from 'styled-components';
import DashboardCardProps from '../../types/DashboardCardProps';
import DashboardItem from '../../types/DashboardItem';
import Card from './Card';

const MediumCard = styled(Card)`
  max-height: 329px;
`;

const MediumDashboardCard = ({ layout, x, y, i }: DashboardCardProps): DashboardItem => {
  const gridSpecs = {
    x,
    y,
    w: 6,
    h: 5.25,
    minW: 4,
    maxW: 6,
    isResizable: false
  };

  return {
    i: i || 'MediumMockCard',
    dimensions: gridSpecs,
    layout: <MediumCard>{layout}</MediumCard>
  };
};

export default MediumDashboardCard;
