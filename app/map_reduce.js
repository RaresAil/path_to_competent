'use strict';

const mapToObject = (map) => Object.fromEntries(map.entries());
const objectToMap = (obj) => new Map(Object.entries(obj));

const groupByType = (storeStock) => {
  const groupedStock = storeStock.reduce((prev, current) => {
    const { type, ...value } = current;

    return {
      ...prev,
      [type]: [...(prev[type] || []), value]
    };
  }, {});

  return objectToMap(groupedStock);
};

module.exports = {
  objectToMap,
  mapToObject,
  groupByType
};
