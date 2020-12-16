module.exports = {
  input: [
    {
      name: 'Usturoi',
      stoc: 50,
      unit: 'kg',
      pricePerUnit: 3.99,
      curreny: 'RON',
      type: 'vegetables'
    },
    {
      name: 'Portocale',
      stoc: 100,
      unit: 'kg',
      pricePerUnit: 4.99,
      curreny: 'RON',
      type: 'fruits'
    },
    {
      name: 'Mere',
      stoc: 92,
      unit: 'kg',
      pricePerUnit: 3.99,
      curreny: 'RON',
      type: 'fruits'
    },
    {
      name: 'Rodii',
      stoc: 25,
      unit: 'unit',
      pricePerUnit: 14.99,
      curreny: 'RON',
      type: 'fruits'
    },
    {
      name: 'Piersici',
      stoc: 80,
      unit: 'kg',
      pricePerUnit: 6.99,
      curreny: 'RON',
      type: 'fruits'
    }
  ],
  expected: {
    vegetables: [
      {
        name: 'Usturoi',
        stoc: 50,
        unit: 'kg',
        pricePerUnit: 3.99,
        curreny: 'RON'
      }
    ],
    fruits: [
      {
        name: 'Portocale',
        stoc: 100,
        unit: 'kg',
        pricePerUnit: 4.99,
        curreny: 'RON'
      },
      {
        name: 'Mere',
        stoc: 92,
        unit: 'kg',
        pricePerUnit: 3.99,
        curreny: 'RON'
      },
      {
        name: 'Rodii',
        stoc: 25,
        unit: 'unit',
        pricePerUnit: 14.99,
        curreny: 'RON'
      },
      {
        name: 'Piersici',
        stoc: 80,
        unit: 'kg',
        pricePerUnit: 6.99,
        curreny: 'RON'
      }
    ]
  }
};
