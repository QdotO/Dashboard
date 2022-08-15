import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { WidthProvider, Responsive as RGL } from 'react-grid-layout';
import DashboardItem from './types/DashboardItem';
import DashboardMockData from './utils/DashboardMockData';
import DashboardHeader from './components/DashboardHeader';
import checkForMismatchesinStoredLayout from './utils/checkForMismatches';
import addMissingGridItemsToLayout from './utils/addMissingGridItemsToLayouts';
import isEmpty from './utils/isEmpty';
import isSame from './utils/isSame';
import getLayoutFromLocalStorage from './utils/getLayoutFromLocalStorage';
import saveLayoutToLocalStorage from './utils/saveLayoutToLocalStorage';
import EmptyDashboard from './components/EmptyDashboard';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ReactGridLayout = WidthProvider(RGL);

const StyledRGL = styled(ReactGridLayout)`
  background: var(--cvna-color-grey-1);
  min-height: 100vh;
`;

type DashboardProps = {
  username: string;
  gridItems?: DashboardItem[];
};

const Container = styled.div`
  min-height: 90vh;
  box-shadow: 0px 2px 3px rgba(24, 53, 88, 0.1);
  background: var(--cvna-color-grey-1);
`;

const DashboardItemStyle = styled.div`
    border: 1px solid var(--cvna-color-grey-2);
    border-radius: 6px;
    text-align: center;
  `;

const originalLayout = getLayoutFromLocalStorage("layouts");

const Dashboard: React.FC<DashboardProps> = ({ username, gridItems = DashboardMockData() }) => {
  const [layouts, setLayouts] = useState(originalLayout)
  
  const onLayoutChange = (layout: any, _layouts: any) => {
    setTimeout(() => {
      if(!isSame(_layouts, layouts)){
        console.log("Saving layouts to state...", _layouts );
        setLayouts(_layouts);
      }
    }, 0)
  };
  
  useEffect(() => {
    console.log("Saving layouts to local storage...", layouts );
    saveLayoutToLocalStorage("layouts", layouts);
  }, [layouts])

  const createElement = (item: DashboardItem) => (
    <DashboardItemStyle key={item.i} data-grid={item.dimensions}>
      <span className="text">{item.layout}</span>
    </DashboardItemStyle>
  );


  const mismatchObj = checkForMismatchesinStoredLayout(layouts, gridItems);
  if(!isEmpty(mismatchObj)) {
    const updatedLayout = addMissingGridItemsToLayout(layouts, gridItems, mismatchObj)
    console.log({ updatedLayout });
  //   // onLayoutChange(null, updatedLayout);
  }
  const gridElements = gridItems.map(item => createElement(item));
  
  // const AddItem = () => {
  //   const dashboardItems = items;
  //   const newItem = {
  //     i: `C4PDashboardItem-${dashboardItems.length + 1}`,
  //     x: (dashboardItems.length * 2) % (gridCols || 12),
  //     y: Infinity,
  //     w: 12,
  //     h: 4
  //   };

  //   setItems(dashboardItems.concat(newItem));
  // };


  return (
    <Container>
      <DashboardHeader name={username} />
      {gridItems.length === 0 ?
       <EmptyDashboard /> :
      <StyledRGL
        className="layout"
        breakpoints={{ md: 768, sm: 414, xs: 0 }}
        cols={{ md: 12, sm: 6, xs: 4 }}
        rowHeight={50}
        autoSize
        onLayoutChange={(layout, _layouts) => onLayoutChange(layout, _layouts)}
        layouts={layouts}
        margin={[16, 16]}
      >
        
        {gridElements}
      </StyledRGL>}
    </Container>
  );
};

export default Dashboard;
