import generate from './generate';

describe('generate', () => {
  it('it generates a random valid MBI', () => {
    const mbi = generate();

    expect(mbi).not.toBeNull();
  });
});
