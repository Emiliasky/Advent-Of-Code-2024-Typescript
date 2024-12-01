import fs from 'fs';
import { findDistance } from '../../day01/part1'
import path from 'path';

test('expect distance to be 11', () => {
    expect(findDistance(fs.readFileSync(path.resolve(__dirname, './part1-testinput.txt')).toString())).toBe(11)
})
