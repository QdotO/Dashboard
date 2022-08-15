import React from 'react';
import styled from 'styled-components';
import DashboardCardProps from '../../types/DashboardCardProps';
import DashboardItem from '../../types/DashboardItem';
import Card from './Card';

const LargeCard = styled(Card)`
  max-height: 329px;
`;

const LargeDashboardCard = ({ layout, x, y, i }: DashboardCardProps): DashboardItem => {
  const gridSpecs = {
    x,
    y,
    w: 12,
    h: 5.25,
    minW: 4,
    maxW: 12,
    isResizable: false
  };

  return {
    i: i || 'LargeMockCard',
    dimensions: gridSpecs,
    layout: <LargeCard>{layout}</LargeCard>
  };
};

export default LargeDashboardCard;
