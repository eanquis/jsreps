export let left = 'apple';
export let right = 'banana';

const temporary = left;
left = right;
right = temporary;
