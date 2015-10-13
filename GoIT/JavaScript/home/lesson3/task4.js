var n = 1;
for ( ; n < 100; n++ ) {
    if ( n % 5 === 0 || n % 3 === 0 ){
        console.log('FizzBuzz');
    }
    else {
        console.log( n);
    }
}