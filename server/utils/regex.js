// alphabetic values A thru Z (minus S, L, O, I, B, Z)
const alphabetic = '(?![SLOIBZsloibz])[A-Za-z]';

// values 0 thru 9 and A thru Z (minus S, L, O, I, B, Z)
const alphaNumeric = '(?![SLOIBZsloibz])[A-Za-z0-9]';

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
const getRegex = (strict = false) => {
  const enforceDash = strict ? '' : '?';
  const mbiFormat = [
    '[1-9]',
    alphabetic,
    alphaNumeric,
    `${numeric}-${enforceDash}`,
    alphabetic,
    alphaNumeric,
    `${numeric}-${enforceDash}`,
    alphabetic,
    alphabetic,
    numeric,
    numeric
  ];

  return new RegExp(mbiFormat.join(''));
};

export default getRegex;
