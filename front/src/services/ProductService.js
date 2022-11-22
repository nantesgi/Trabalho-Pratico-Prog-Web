import axios from 'axios';

// const baseUrl = 'https://ecommerce-progweb-server.herokuapp.com/products/import-photo';
const baseUrlBook = 'https://ecommerce-progweb-server.herokuapp.com/books';
// const baseUrlGame = 'localhost:3000/games';
// const baseUrlLaptop = 'localhost:3000/laptops';
// const baseUrlRefrigerator = 'localhost:3000/refrigerators';
// const baseUrlWashingMachine = 'localhost:3000/washing-machines';
// const baseUrlMicroWave = 'localhost:3000/washing-machines';

// const getAll = () => {
//     return axios.get(baseUrl);
//   };

  //   create book
  const createBook = (data) => {
    return axios.post(baseUrlBook, data);
  };

  // //   create game
  // const createGame = (data) => {
  //   return axios.post(baseUrlGame, data);
  // };

  // //   create laptop
  // const createLaptop = (data) => {
  //   return axios.post(baseUrlLaptop, data);
  // };

  // //   create refrigerator
  // const createRefrigerator = (data) => {
  //   return axios.post(baseUrlRefrigerator, data);
  // };

  // //   create washing machine
  // const createWashingMachine = (data) => {
  //   return axios.post(baseUrlWashingMachine, data);
  // };

  // //   create micro wave
  // const createMicroWave = (data) => {
  //   return axios.post(baseUrlMicroWave, data);
  // };

//   const get = (name, status) => {
//     return axios.get(baseUrl + "?name=" + name + "&status=" + status);
//   };
  
  const TagService = {
    // getAll,
    createBook,
  };