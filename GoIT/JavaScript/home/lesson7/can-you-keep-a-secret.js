/**
 There's no such thing as private properties on a javascript object! But, maybe there are? */
function createSecretHolder(secret) {
    var obj = {
        mySecret: secret,
        getSecret: function(){ return this.mySecret;},
        setSecret: function(secret){  this.mySecret = secret;},
    };
    return obj;
}
var obj = createSecretHolder(5);
console.log(obj.getSecret());
console.log(obj.setSecret(2));
console.log(obj.getSecret());
console.log(obj.getSecret());

