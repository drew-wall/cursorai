import { aiData } from './aiData';

// Transform aiData into navigation structure
export const navigationData = aiData.reduce((acc, item) => {
  // If category doesn't exist in accumulator, create it
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  
  // Add the item to its category
  acc[item.category].push({
    name: item.name,
    url: item.url
  });
  
  return acc;
}, {}); 