/* function* generate(){
    yeild 1;
    yeild 2;
    yeild 3;
}
let gen = generate();
alert(gen); */

function* generate() {
    console.log('invoked 1st time');
    yield 1;
    console.log('invoked 2nd time');
    yield 2;
}