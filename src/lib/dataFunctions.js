export function filterData(data, filterBy, value) {
  const dataCopy = data.map((obj) => obj);
  return dataCopy.filter((obj) => obj.facts[filterBy] === value);
}

export function sortData(data, sortBy, sortOrder) {
  const dataCopy = data.map((obj) => obj);
  if (sortOrder === "asc") {
    return dataCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  } else {
    return dataCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  } 
}

export function computeStats(data) {
  const dataCopy = data.map((obj) => obj);
  const maxUsers = dataCopy.reduce((obj, objActual) => {
    return parseFloat(obj.facts["percentageOfUsers"]) > parseFloat(objActual.facts["percentageOfUsers"]) ? obj : objActual;
  });

  const oldest = dataCopy.reduce((obj, objActual) => {
    return parseFloat(obj.facts["yearOfCreation"]) < parseFloat(objActual.facts["yearOfCreation"]) ? obj : objActual;
  });

  const newest = dataCopy.reduce((obj, objActual) => {
    return parseFloat(obj.facts["yearOfCreation"]) > parseFloat(objActual.facts["yearOfCreation"]) ? obj : objActual;
  });

  return [ maxUsers, oldest, newest ];
}