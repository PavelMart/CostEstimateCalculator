const calculator = (tableSelector, rowItemSelector, itemCountSelector, resultSelector, summSelector, priceSelector, buttonPlusSelector, buttonMinusSelector) => {
    
    //Получаем элементы по селекторам, переданным из файла index.js
    const table = document.querySelector(tableSelector),
        rowItemElems = document.querySelectorAll(rowItemSelector),
        itemCountElems = document.querySelectorAll(itemCountSelector),
        result = document.querySelector(resultSelector);

    // Функция, которая добавляет 1 к значению поля ввода
    const addCount = ( elem ) => {
        elem.value++;
    };

    // Функция, которая отнимает 1 к значению поля ввода
    const removeCount = ( elem ) => {
        if (elem.value > 0) {
        elem.value--;
        }
    };

    /* Проверка данных поля ввода. Если введена не цифра или значение меньше 0, возвращает false, 
    и когда курсор убирают из поля ввода, значение поля ввода устанавливается равным 0*/
    const validate = ( value ) => {
        const regExp = /\D/;

        if (value.match(regExp)) {
            return false;
        } 

        if (value < 0) {
            return false;
        }
        
        return true;
    };

    // Функция для общего расчета Итого
    const calculateSumm = () => {
        let resultValue = 0;

        rowItemElems.forEach( row => {
            const summ = row.querySelector(summSelector),
                price = row.querySelector(priceSelector),
                count = row.querySelector(itemCountSelector);
            
            const sum = price.textContent * count.value;

            summ.textContent = sum;
            resultValue += sum;
        });

        result.textContent = resultValue;
    };

    // Активация кнопок "+" и "-" и расчета "Итого" при нажатии на них
    table.addEventListener('click', e => {
        const target = e.target;

        if (target.closest(buttonPlusSelector)) {
            addCount(target.previousElementSibling);
            calculateSumm();
        }
        if (target.closest(buttonMinusSelector)) {
            removeCount(target.nextElementSibling);
            calculateSumm();
        }
    });

    // Активация проверки правильности ввода и расчета "Итого" при смене поля ввода
    itemCountElems.forEach( item => {
        item.addEventListener('change', e => {
            let target = e.target;

            if (!validate(target.value)) {
                target.value = 0;
            }

            calculateSumm();
        });
        item.addEventListener('focus', e => {
            e.target.select();
        });
    });
};
