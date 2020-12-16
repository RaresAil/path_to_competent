const toExport = {};

const sortByPrice = ({ pricePerUnit: priceA }, { pricePerUnit: priceB }) =>
  priceB - priceA;
const isVegetable = ({ type }) => type === 'vegetables';
const isFruit = ({ type }) => type === 'fruits';

const removeTypeField = (object) => {
  const { type, ...restObject } = object;
  return restObject;
};

toExport.getMostExpensive = (collection) => collection.sort(sortByPrice)[0];
toExport.getVegetables = (collection) =>
  collection.filter(isVegetable).map(removeTypeField);
toExport.getFruits = (collection) =>
  collection.filter(isFruit).map(removeTypeField);

module.exports = toExport;
