import getRegex from './regex';

const validate = mbi => {
  if (!mbi) return false;

  const regex = getRegex();

  return regex.test(mbi);
};

export default validate;
