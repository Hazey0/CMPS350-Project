import data from './phones.json';
console.log(data);
async function seed() {
    const phones = [];
  
    try {
      // 1. Read data from local JSON file (replace with your file path)
      const phoneData =  fetch('./storage/phones.json');
  
      // 2. Process and add data to phones array (assuming data is an array of objects)
      phoneData.forEach(phone => phones.push(phone));
  
      console.log('Phones data successfully loaded:', phones);
    } catch (error) {
      console.error('Error seeding data:', error);
    }
  }
  
console.log(data);