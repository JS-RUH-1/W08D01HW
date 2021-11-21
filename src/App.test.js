
import { add, filter } from './App'

test('adds 1 + 2 to equal 3', () => {
    expect(add()).toBe(0);
    expect(add(1,2)).toBe(3);
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(filter('jkhfhjrbuhvdfuhrgijrdnghiurhd')).toBe('jkhfhjrbuh');
    expect(filter('')).toBe('Unknown');
    expect(filter('_jkhfhjrbuhvdfuhrgijrdnghiurhd')).toBe('jkhfhjrbuh');
    expect(filter(' jkhfhjrbuhvdfuhrgijrdnghiurhd')).toBe('jkhfhjrbuh');
  });