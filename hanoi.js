function hanoi(disk, source, dest, aux) {
    if (disk === 1) {
    	console.log(`Move the plate ${disk} from `, source, ' to ', dest);
    } else {
        hanoi(disk-1, source, aux, dest);
        console.log(`Move the plate ${disk} from `, source, ' to ', dest);
        hanoi(disk-1, aux, dest, source);
	}
}

console.log('start 1');
hanoi(1, 'A', 'B', 'C');
console.log('start 2');
hanoi(2, 'A', 'B', 'C');
console.log('start 3');
hanoi(3, 'A', 'B', 'C');
console.log('start 7');
hanoi(7, 'A', 'B', 'C');