export const filterProyects = (proyects, filter) => {
  // new array return
  let newArrayProyects = [];
  if (newArrayProyects.length === 0 && filter.length === 0) {
    return proyects;
  }

  for (let i in filter) {
    let filterValue = filter[i];
    console.log(filterValue);
    proyects.map((proyect) => {
      const { tecnology } = proyect;
      return tecnology.map((nombre) => {
        return nombre === filterValue
          ? newArrayProyects.push(proyect)
          : proyects;
      });
    });
  }

  // delete duplicates
  let uniqueArray = [...new Set(newArrayProyects)];
  return uniqueArray;
};
