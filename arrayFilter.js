const dataArr = ['1','5','6','1','3','5','90','334'];

const resultArr = dataArr.filter((data,index)=>{
  return dataArr.indexOf(data) === index;
})
console.log(resultArr); 