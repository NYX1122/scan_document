import app from '../app';

describe('app', () => {
  it('should add two numbers correctly', () => {
    expect(app(2, 3)).toBe(5);
    expect(app(-1, 4)).toBe(3);
    expect(app(0, 0)).toBe(0);
  });
});