import React from 'react';
import LargeDashboardCard from '../components/Cards/LargeDashboardCard';
import LoadingContent from '../components/Loading/LoadingContent';
import MediumDashboardCard from '../components/Cards/MediumDashboardCard';
import SmallDashboardCard from '../components/Cards/SmallDashboardCard';
import SmallLoadingContent from '../components/Loading/SmallLoadingContent';


export const MockMedium = (name = 'BasicMediumMockCard') =>
  MediumDashboardCard({
    i: name,
    x: 0,
    y: 0,
    layout: <LoadingContent />
  });

export const MockLarge = (name = 'BasicLargeMockCard') =>
  LargeDashboardCard({
    i: name,
    x: 0,
    y: 0,
    layout: <LoadingContent />
  });

  export const MockSmall = (name = 'BasicSmallMockCard') =>
  SmallDashboardCard({
    i: name,
    x: 0,
    y: 0,
    layout: <SmallLoadingContent />
  });

const DashboardMockData = () => [
  MockLarge("9"), 
  MockMedium("8"), 
  MockMedium("7"), 
  MockSmall("6"),
  MockSmall("5"), 
  MockSmall("4"), 
  MockSmall("3"), 
  MockSmall("2"), 
  MockSmall("1"), 
  ];

export default DashboardMockData;
