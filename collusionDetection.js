const detect =(sqr1_x, sqr1_y,sqr1_width, sqr2_x, sqr2_y,sqr2_width)=>{
    
    
    if(sqr1_x >sqr2_x + sqr2_width||
      sqr1_x + sqr1_width<sqr2_x ||
      sqr1_y>sqr2_y+sqr1_width||
      sqr1_y+sqr1_width<sqr2_y){
          return "There is no collusion"
      }else{
          return "Big bang..."
      }
}
//Arbitrary x&y coordinates and width of two squares to test
console.log(detect(4, 6, 5, 5,8,6))