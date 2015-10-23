/**
 Напишите код, который отсортирует массив объектов people по полю age. */
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 48 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(function (a,b) {return (a.age-b.age); });
console.log(people);

console.log (people[0].age);

for (var key in people) {
    console.log(people[key].name);
}
