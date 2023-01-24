const stringFunctions = require('./app')
const Calculator = require('./calculator')
const capitalize = require('./capitalize')

describe('String functions tested', () => {
  test('Return count of characters in string', () => {
    expect(stringFunctions.stringLength('string')).toBe(6)
    expect(stringFunctions.stringLength('stringwith')).toBe(10)
    expect(stringFunctions.stringLength('A')).toBe(1)
  })

  test('Return errors', () => {
    expect(() => stringFunctions.stringLength('')).toThrow(Error)
    expect(() => stringFunctions.stringLength('stringlongerthan')).toThrow(Error)
  })

  test('Return a reversed string', () => {
    expect(stringFunctions.reverseString('string')).toMatch(/gnirts/)
    expect(stringFunctions.reverseString('words')).toMatch(/sdrow/)
  })}
)

describe('Calculator operation tests', () => {
  test('Return the addition of two values, a+b', () => {
    expect(new Calculator(1,2).add()).toBe(3)
    expect(new Calculator(5,5).add()).toBe(10)
    expect(new Calculator(0,2).add()).toBe(2)
  })
  
  test('Return the substraction of two values, a-b', () => {
    expect(new Calculator(1,2).substract()).toBe(-1)
    expect(new Calculator(5,5).substract()).toBe(0)
    expect(new Calculator(0,2).substract()).toBe(-2)
  })

  test('Return the multiplication of two values, a*b', () => {
    expect(new Calculator(1,2).multiply()).toBe(2)
    expect(new Calculator(5,5).multiply()).toBe(25)
    expect(new Calculator(0,2).multiply()).toBe(0)
  })

  test('Return the division of two values, a/b', () => {
    expect(new Calculator(1,2).divide()).toBe(0.5)
    expect(new Calculator(5,5).divide()).toBe(1)
    expect(new Calculator(0,2).divide()).toBe(0)
  })
})

describe('Capitalize function', () => {
  test('Return the string given with the first letter capitalized', () => {
    expect(capitalize('string')).toMatch(/String/)
  })
  test('Throws an Error if the argument given is not a string', () => {
    expect(() => capitalize(123)).toThrow(Error)
  })
})