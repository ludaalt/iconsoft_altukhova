import getUniq from '../src/getUniq';

test('getUniq', () => {
  expect(getUniq('4 1 2 1 2')).toBe('4');
  expect(getUniq('42 67 67 42 42')).toBe('42');
});
