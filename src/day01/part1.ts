import readInput from './utils';

export function findDistance(input: string): number {
    let list1: number[] = [], list2: number[] = [];
    [list1, list2] = readInput(input);

    list1.sort();
    list2.sort();

    let distance = 0;

    for (let i: number = 0; i < list1.length; i++) {
        distance += Math.abs(list1[i]! - list2[i]!);
    }

    return distance;
}


