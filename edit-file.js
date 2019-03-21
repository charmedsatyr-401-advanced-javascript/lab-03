'use strict';

const fs = require('fs');

const targetFile = `${process.argv[2]}`;
/**
 * @param  {} targetFile
 * @param  {} (err
 * @param  {} data
 * @param  {} =>{if(err
 * @param  {} {console.error(err
 * @param  {} ;return;}console.log(`Read${data}from${targetFile}.`
 * @param  {} ;constrandom=Math.random(
 * @param  {} .toString(
 * @param  {} ;consttoWrite=Buffer.from(random
 * @param  {} ;fs.writeFile(targetFile
 * @param  {} toWrite
 * @param  {} 'utf8'
 * @param  {} err=>{if(err
 * @param  {} {console.error(err
 * @param  {} ;return;}console.log(`Wrote${toWrite}to${targetFile}.`
 * @param  {} ;}
 * @param  {} ;}
 */
/* 
 * This reads and writes to a file. 
 */
fs.readFile(targetFile, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Read ${data} from ${targetFile}.`);
  const random = Math.random().toString();
  const toWrite = Buffer.from(random);
  fs.writeFile(targetFile, toWrite, 'utf8', err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Wrote ${toWrite} to ${targetFile}.`);
  });
});
