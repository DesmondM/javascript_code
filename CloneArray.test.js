const { expect } = require('@jest/globals')
const cloneArray = require('./CloneArray')

test('Properly clones the array', ()=>{
    const array = ['A','B','C']
    expect(cloneArray(array)).toEqual(array) // toEqual for different memory locations
    expect(cloneArray(array)).not.toBe(array) //clone array is actually making a copy and then its not just the exact same array
})