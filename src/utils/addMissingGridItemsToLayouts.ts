// Scan the mismatch obj and for each breakpoint take the id and find the item in gridItems
// then push the gridItem to the storedLayouts[breakpoint] value's array

import DashboardItem from "../types/DashboardItem";

const getItem = (gridItems: DashboardItem[], id: string) => gridItems.find(item => id === item.i);

const addItemToLayout = (layout: any, breakpoint: string, gridItem: any) => {
  const updatedLayout = layout;
  updatedLayout[breakpoint]?.push(gridItem);
  return updatedLayout;
}

const addMissingItem = (gridItems: any[], id: string, layout: any, breakpoint: string) => {
  const gridItem = getItem(gridItems, id);
  if(typeof gridItem === 'undefined') throw new Error("GridItem was not found when trying to add to layout");

  const formattedItem = {
    i: gridItem.i,
    ...gridItem.dimensions
  }
  const updatedLayout = addItemToLayout(layout, breakpoint, formattedItem);
  return updatedLayout;
}

// v2 handling when each breakpoint is linked to an array of ids for each mismatch key-value pair
const addMissingGridItemsToLayouts = (storedLayouts: any, gridItems: { i: string }[], mismatchObj: { [x: string]: any }) => {
  let updatedLayout = storedLayouts;
  Object.entries(mismatchObj).forEach(([breakpoint, idArray]) => {
    idArray.forEach((id: string) => {
      updatedLayout = addMissingItem(gridItems, id, updatedLayout, breakpoint);
    })
  })
  return updatedLayout;
};


export default addMissingGridItemsToLayouts;