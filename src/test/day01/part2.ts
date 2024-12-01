import findSimilarityScore from "../../day01/part2"
import fs from 'fs';
import path from 'path';

test('expect similarity score to be 32', () => {
    expect(findSimilarityScore(fs.readFileSync(path.resolve(__dirname, './part2-testinput.txt')).toString())).toBe(31)
})
