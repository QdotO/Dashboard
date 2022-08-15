const getLayoutFromLocalStorage = (key: string) => {
  let ls: { [x: string]: any } = {};
  if (window.localStorage) {
    try {
      const layoutFromLocalStorage = window.localStorage.getItem("rgl-8") || "{}";
      ls = JSON.parse(layoutFromLocalStorage);
      console.log({ ls, layoutFromLocalStorage })
    } catch (e) {
      return ls;
    }
  }
  return ls[key];
}

export default getLayoutFromLocalStorage;