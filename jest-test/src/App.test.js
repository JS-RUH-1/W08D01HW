import { render, screen } from '@testing-library/react';
import {addFunc , checkStr} from './App';

test('addition', () => {
  expect(addFunc(1,2)).toBe(3);
  expect(addFunc(7,3,10)).toBe(20);
  expect(addFunc(50,50)).toBe(100);

});

test('check string' , () => {
  expect(checkStr('')).toBe('Unknown')
  expect(checkStr('hello world')).toBe('helloworld')
  expect(checkStr('_hello')).toBe('hello')
  expect(checkStr('hello world hello world hello world')).toBe('helloworld')

})