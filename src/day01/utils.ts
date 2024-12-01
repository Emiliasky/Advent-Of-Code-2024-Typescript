export default function readInput(input: string): [number[], number[]] {
    let list1: number[] = [];
    let list2: number[] = [];

    for (let line of input.split(/\r?\n/).filter(e => e)) {
        const [number1, number2] = line.split('   ');
        list1.push(Number(number1));
        list2.push(Number(number2));
    }

    return [list1, list2];
}
