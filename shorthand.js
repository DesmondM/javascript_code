function sayHello(name) {
  console.log('Hello', name);
}
//equivalent to
sayHello = name => console.log('Hello', name);

sayHello('Matty');

setTimeout(function() {
  console.log('Loaded')
}, 2000);

// equivalent to
setTimeout(() => console.log('Loaded'), 2000);


