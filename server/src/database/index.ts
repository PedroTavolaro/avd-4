import { createConnection } from 'typeorm';

//createConnection();
createConnection().then(() =>
console.log("Conectado")).catch(err => console.log(err))
