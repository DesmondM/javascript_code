const doTheyCollide =(circle1_x,circle1_y,radius1, circle2_x,circle2_y,radius2,)=>{

    let dx= circle2_x - circle1_x; 
    let dy =circle2_y-circle1_y;
    //pythagoras theorem to determine distance btwn 2 circles' centers
    let distance = Math.sqrt( dx*dx + dy*dy);
    let radius = radius1+radius2;
    if(distance<radius){
        return "Points lie within other circle"
    }else{
        return "No collusion"
    }
}
//Arbitrary x&y coordinates and radius of two circles to test
console.log(doTheyCollide(2, 4, 2, 8,7, 3))