import validate from './validate';

describe('validate', () => {
  it('it returns true for a valid MBI with dashes', () => {
    expect(validate('1EG4-TE5-MK72')).toBeTruthy();
  });

  it('it returns true for a valid MBI without dashes', () => {
    expect(validate('1EG4TE5MK72')).toBeTruthy();
  });

  it('it returns false for an valid MBI with dashes', () => {
    expect(validate('AEG4-TE5-MK72')).toBeFalsy();
  });

  it('it returns false for an valid MBI without dashes', () => {
    expect(validate('AEG4TE5MK72')).toBeFalsy();
  });

  it('it returns false for an empty MBI', () => {
    expect(validate('')).toBeFalsy();
  });
});
