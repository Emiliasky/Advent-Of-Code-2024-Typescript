import { findDistance } from "./part1"
import fs from 'fs';
import path from 'path'
import  { findSimilarityScore } from "./part2";


console.log('part 1:')
console.log(findDistance(fs.readFileSync(path.resolve(__dirname, './part1-input.txt')).toString()))
console.log('')
console.log('part 2:')
console.log(findSimilarityScore(fs.readFileSync(path.resolve(__dirname, './part2-input.txt')).toString()))
