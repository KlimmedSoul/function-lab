let totalCost = 5000;
const numberOfGoods = 1;
const promoСode = 'ДАРИМ300';
let count = 0;

function calculate(totalCost, numberOfGoods, promoСode = null) {
    if (promoСode == 'ДАРИМ300' && totalCost >= 300) { 
        totalCost -= 300;
        console.log('Скидка ДАРИМ300 применена')
    } else if (promoСode == 'ДАРИМ300' && totalCost < 300) {
        totalCost = 0;
        console.log('Скидка ДАРИМ300 применена при сумме меньше 0')
        count += 1;
    }

    if (numberOfGoods >= 10 && count == 0) {
        totalCost = totalCost - totalCost * 0.05;
        console.log('Скидка 5% применена')
    }

    if (totalCost > 50000) {
        totalCost = totalCost + (totalCost - 50000) * 0.2 - (totalCost - 50000);
         console.log('Скидка на сумму превышения применена')
    }

    if (promoСode == 'СКИДКА15' && totalCost > 20000) {
        totalCost =totalCost - totalCost * 0.15;
        console.log('Скидка 15% применена')
    }
    return totalCost
}

console.log('Итоговая сумма составляет -', calculate(totalCost, numberOfGoods, promoСode))
