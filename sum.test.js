const sum =require('./sum')
test ('Add two nummbers properly', ()=>{
    expect(
        sum(2, 3)
        ).toBe(5)
})