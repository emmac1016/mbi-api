import RandExp from 'randexp';
import getRegex from './regex';

const generate = () => {
  const regex = getRegex(true);
  const mbi = new RandExp(regex);

  return mbi.gen();
};

export default generate;
