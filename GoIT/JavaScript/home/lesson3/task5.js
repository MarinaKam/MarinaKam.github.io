var line=8;
var board='';
for(y=0; y<line; y++){
    for(x=0; x<line; x++){
        if((x+y)%2==0){
            board+='#';
        }
        else{
            board+=' ';
        }
    }
    board+='\n';
}
console.log(board);