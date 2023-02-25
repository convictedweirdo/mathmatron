/* return random int from 2 integers in a 
 range between min and max values */
export function randInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}