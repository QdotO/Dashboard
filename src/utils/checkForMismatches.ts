// v2 find and return the layout keys of the mismatch and the gridItem i values

import DashboardItem from "../types/DashboardItem";

const findMismatchInLayout = (breakpoint: string, layout: any, mismatchObj: {}, gridItems: any[]) => {
  const mismatches: any = {};
  gridItems.forEach((item: { i: string; }) => {
    const result = layout.find((layout: { i: string }) => item.i === layout.i);
    if( result === undefined) {
      mismatches[breakpoint] = typeof mismatches[breakpoint] !== "undefined"
        ?  [...mismatches[breakpoint], item.i] 
        : [item.i];
    }
  });
  return {
    ...mismatchObj,
    ...(mismatches !== {} ? mismatches : undefined)
  }
}; 


const checkForMismatches = (layouts: { [s: string]: unknown; } | ArrayLike<unknown>, gridItems: DashboardItem[]) => {
  let mismatchObj = {};
  if(!layouts) return mismatchObj;
  
  Object.entries(layouts).forEach(([breakpoint, layoutArray]) => {
    mismatchObj = findMismatchInLayout(breakpoint, layoutArray, mismatchObj, gridItems);
  });
  return mismatchObj;
};



export default checkForMismatches;