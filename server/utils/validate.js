// alphabetic values A thru Z (minus S, L, O, I, B, Z)
const alphabetic = '[^SLOIBZsloibz]';

// values 0 thru 9 and A thru Z (minus S, L, O, I, B, Z)
const alphaNumeric = '[^SLOIBZsloibz|^0-9]';

// numeric values 0 thru 9
const numeric = '[0-9]';

/**
 * Position 1 – numeric values 1 thru 9
 * Position 2 – alphabetic values A thru Z (minus S, L, O, I, B, Z)
 * Position 3 – alpha-numeric values 0 thru 9 and A thru Z (minus S, L, O, I, B, Z)
 * Position 4 – numeric values 0 thru 9
 * Position 5 – alphabetic values A thru Z (minus S, L, O, I, B, Z)
 * Position 6 – alpha-numeric values 0 thru 9 and A thru Z (minus S, L, O, I, B, Z)
 * Position 7 – numeric values 0 thru 9
 * Position 8 – alphabetic values A thru Z (minus S, L, O, I, B, Z)
 * Position 9 – alphabetic values A thru Z (minus S, L, O, I, B,Z)
 * Position 10 – numeric values 0 thru 9
 * Position 11 – numeric values 0 thru 9
 */
const mbiFormat = [
  `^[1-9]{1}`,
  `${alphabetic}{1}`,
  `${alphaNumeric}{1}`,
  `${numeric}{1}-?`,
  `${alphabetic}{1}`,
  `${alphaNumeric}{1}`,
  `${numeric}{1}-?`,
  `${alphabetic}{1}`,
  `${alphabetic}{1}`,
  `${numeric}{1}`,
  `${numeric}{1}`
];

const mbiRegex = new RegExp(mbiFormat.join(''));

const validate = mbi => (mbi ? mbiRegex.test(mbi) : false);

export default validate;
