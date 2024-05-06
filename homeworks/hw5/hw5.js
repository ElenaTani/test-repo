'use strict';

// приклад об'єкту
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
  };
  
  let updatedPriceData = Object.fromEntries(
    Object.entries(priceData).map(([key,value]) => [key.toLowerCase(), Number(value).toFixed(2)])
  );
  
  console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
