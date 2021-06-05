Порядок подключения калькулятора

1) Сначала подключаем скрипт calculator.js перед Вашим основным скриптом
2) Запускаем в ВАШЕМ скрипте функцию 
  calculator(
        '.table',
        '.row-item',
        '.item-count',
        '.result',
        '.summ',
        '.price',
        '.button-plus',
        '.button-minus'
    );
В которой:
1) Селектор таблицы
2) Селектор строки таблицы
3) Поле ввода количества
4) Поле "Итого" ОБЩЕЕ (нужно передать конкретно селектор, который содержит цифру, не всю ячейку (см. HTML))
5) Поле "Итого" В КОНЦЕ СТРОКИ (нужно передать конкретно селектор, который содержит цифру, не всю ячейку (см. HTML))
6) Поле "Цена" (нужно передать конкретно селектор, который содержит цифру, не всю ячейку (см. HTML))
7) Кнопка "Плюс"
8) Кнопка "Минус"

Обращаю внимание, что перед каждым словом стоит ".", что означает получение элемента страницы по "классу". 
Можно использовать любой вариант селектора, который удобно.

ГЛАВНОЕ СОБЛЮДАТЬ ОЧЕРЕДНОСТЬ

Дополнительные комментарии и вариант реализации - смотри файлы репозитория