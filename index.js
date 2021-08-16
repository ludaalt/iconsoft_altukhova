import fs from 'fs';
import getUniq from './src/getUniq.js'

fs.readFile('./inputs/input.txt', 'utf-8', (err, data) => {
 	if(err) {
 		throw err;
 	}

 	let dataArray = data.toString().split('\n');

     let n = dataArray[0];
	 let arrOfIds = dataArray[1].split(' ');

	 if(n % 2 === 0 && getUniq(arrOfIds) === '') {
		console.log('Всё сотрудники записали свои ID')
		return
	 }     

     console.log(getUniq(arrOfIds))
 })