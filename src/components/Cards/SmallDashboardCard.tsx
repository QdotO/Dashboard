import React from 'react';
import styled from 'styled-components';
import DashboardCardProps from '../../types/DashboardCardProps';
import DashboardItem from '../../types/DashboardItem';
import Card from './Card';

const SmallCard = styled(Card)`
  padding: 0;
  height: 131px;
`;

const SmallDashboardCard = ({ layout, x, y, i }: DashboardCardProps): DashboardItem => {
  const gridSpecs = {
    x,
    y,
    w: 2,
    h: 2.25,
    isResizable: false
  };

  return {
    i: i || 'SmallMockCard',
    dimensions: gridSpecs,
    layout: <SmallCard>{layout}</SmallCard>
  };
};

export default SmallDashboardCard;
