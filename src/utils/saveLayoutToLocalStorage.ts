const saveLayoutToLocalStorage = (key: string, value: any) => {
  if (window.localStorage) {
    window.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}

export default saveLayoutToLocalStorage;