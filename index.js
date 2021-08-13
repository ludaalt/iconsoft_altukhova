import fs from 'fs';
import getUniq from './src/getUniq.js'

fs.readFile('./inputs/input.txt', 'utf-8', (err, data) => {
 	if(err) {
 		throw err;
 	}

 	let dataArray = data.toString().split('\n');

     let n = dataArray[0];
     let writtenIds = dataArray[1].split(' ');

     console.log(getUniq(writtenIds))
 })