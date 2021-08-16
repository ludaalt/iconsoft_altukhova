import getUniq from '../src/getUniq';

test('getUniq', () => {
  expect(getUniq('4 1 2 1 2')).toBe('4');
  expect(getUniq('42 67 67 42 42')).toBe('42');

  expect(getUniq('1 2 2 3 3')).toBe('1');
  expect(getUniq('2 2 3 3 1')).toBe('1');

  expect(getUniq('42 67 67 42 42 42')).toBe('');
});
