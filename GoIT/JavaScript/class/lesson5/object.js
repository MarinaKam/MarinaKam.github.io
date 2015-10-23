var user = {};
user.name = 'Sergey';
user.surname = 'Petrov';

console.log(user.name + ' ' + user.surname);

user.name = 'Andrey';
user.age = 30;

console.log(user.name + ' ' + user.surname + ': ' + user.age);

delete user.name;

console.log(user.name + ' ' + user.surname + ': ' + user.age);