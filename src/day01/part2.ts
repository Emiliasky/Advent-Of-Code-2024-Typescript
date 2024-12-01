import readInput from "./utils";

export function findSimilarityScore(input: string): number {
    let list1: number[], list2: number[];
    [list1, list2] = readInput(input)

    const mappedList1 = list1.map((e) => e * list2.reduce((count, x) => x === e ? count + 1 : count, 0))

    return mappedList1.reduce((partialSum, a) => partialSum + a, 0);
}
