/**
 Задание 4 (Object counter)

 Добавить в конструктор Article:

 * Подсчёт общего количества созданных объектов.
 * Запоминание даты последнего созданного объекта.
 * Используйте для этого статические свойства.

 Пусть вызов `Article.showStats()` выводит то и другое.

 Использование:

 ```js
 function Article() {
  this.created = new Date();
  // ... ваш код ...
}

 new Article();
 new Article();

 Article.showStats(); // Всего: 2, Последняя: (дата)

 new Article();

 Article.showStats(); // Всего: 3, Последняя: (дата)
 ```
 */
function Article() {
    Article.created = new Date();
    Article.count++;
}
Article.count = 0;
Article.showStats = function() {
    console.log("Всего: " + this.count + ", Последняя: "+ this.created);
};
new Article();
new Article();

Article.showStats();

new Article();

Article.showStats();
