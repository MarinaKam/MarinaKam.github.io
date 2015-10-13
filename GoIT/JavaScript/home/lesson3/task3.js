var n=1;
for (; n<100; n++){
    if ( n%5 === 0 ){
        console.log( 'Buzz' );
    }
    else {
        if ( n%3 === 0 ){
            console.log( 'Fizz');
        }
        else {
            console.log( n);
        }
    }
}