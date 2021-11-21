

 import {add} from './App';
import {text} from './App'

 test('addition of two values ',()=>{
   
  expect(add(1,3)).toBe(4);
  expect(add(1,3,2)).toBe(6);
  expect(add()).toBe(0)
   
  })

  test ('check string',()=>{

    expect(text('')).toBe('Unknown');

    
  expect(text(' Good Morning ')).toBe('GoodMorning');

  expect(text('appointments')).toBe('appointmen');

   expect(text('_Good')).toBe('Good');

  })
