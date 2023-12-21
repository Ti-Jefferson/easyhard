alert('©️Слишком лёгко, чтобы не усложнять');

function eTask(func) {
    func();
}

//------------------------------------------------------------------------------------------easy task 1------------------------------------------------------------------------------------------//

function et1() {

    let hi = 'Hello, world!';
    console.log(hi);

}

//------------------------------------------------------------------------------------------easy task 2------------------------------------------------------------------------------------------//

function et2() {

    let name = 'Василий';
    let age = '13 лет';
    let skill = 'пошлый';
    console.log(name, age);

}

//------------------------------------------------------------------------------------------easy task 3------------------------------------------------------------------------------------------//

function et3() {

    let num1 = 4;
    let num2 = 5;
    let sum = num1 + num2
    console.log(sum);

}

//------------------------------------------------------------------------------------------easy task 4------------------------------------------------------------------------------------------//

function et4() {

    function sqrNum() {
        let num = prompt('Введите число, которое хотите возвести в квадрат');
        let sqrNum = num**2;
        let msg1 = 'При возведение числа ';
        let msg2 = ' в квадрат, получаем - ';
        return msg1 + num + msg2 + sqrNum;
    }

    console.log(sqrNum());

}

//------------------------------------------------------------------------------------------easy task 5------------------------------------------------------------------------------------------//

function et5() {

    let num = prompt('Введите число, которое хотите проверить на чётность');
    let nullCheck = (num === null || num === "");
    let check = (num !== null && num % 2 === 0);

    if (nullCheck) {
        console.log('Чтобы проверить число, ВАМ НУЖНО ВВЕСТИ ЕГО!')
    }
    else if (check) {
        console.log(num, 'является чётным числом')
    }
    else {
        console.log(num, 'является нечётным числом')
    }

}

//------------------------------------------------------------------------------------------easy task 6------------------------------------------------------------------------------------------//

function et6() {
    
    console.log('Начало цикла');

    function rndNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    } 

    let num1 = rndNum(1, 1000);
    let num2 = rndNum(1, 1000);
    let num3 = rndNum(1, 1000);
    let num4 = rndNum(1, 1000);
    let num5 = rndNum(1, 1000);
    let num6 = rndNum(1, 1000);
    let num7 = rndNum(1, 1000);
    let num8 = rndNum(1, 1000);

    let numList = [num1, num2, num3, num4, num5, num6, num7, num8];

    let stop = (numList.length);
    
    for (let num = 0; num < stop; num++) {
    console.log(numList[num]);
    }

}

//------------------------------------------------------------------------------------------easy task 7------------------------------------------------------------------------------------------//

function et7() {

    console.log('Начало цикла');
    
    function rndNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    } 

    let num1 = rndNum(1, 1000);
    let num2 = rndNum(1, 1000);
    let num3 = rndNum(1, 1000);
    let num4 = rndNum(1, 1000);
    let num5 = rndNum(1, 1000);
    let num6 = rndNum(1, 1000);
    let num7 = rndNum(1, 1000);
    let num8 = rndNum(1, 1000);

    let numList = [num1, num2, num3, num4, num5, num6, num7, num8];

    let stop = (numList.length);
    
    for (let num = 0; num < stop; num++) {
    console.log(numList[num]);
    }

    function maxNumList(listName) {
        let txt = 'Максимальное число среди списка выше -';
        let list = listName;
        let maxNum = Math.max.apply(Math, list);
        console.log(txt, maxNum);
    }

    maxNumList(numList);

}

//------------------------------------------------------------------------------------------easy task 8------------------------------------------------------------------------------------------//

function et8() {

    let student = {
        firstName: 'Пётр',
        age: '22',
        argRating: '4.1'
    }

    console.log(student);

}

//------------------------------------------------------------------------------------------easy task 9------------------------------------------------------------------------------------------//

function et9() {

    function combination() {
        let txt1 = prompt('Введите первую часть текста');
        let txt2 = prompt('Введите вторую часть текста');
        let bigTxt = txt1 + ' ' + txt2;
        console.log(bigTxt);
    }

    combination();

}

//------------------------------------------------------------------------------------------easy task 10------------------------------------------------------------------------------------------//

function et10() {

    let num = 1;
    
    while (num < 11) {
        console.log(num);
        num++;
    }

}

//------------------------------------------------------------------------------------------easy task 11------------------------------------------------------------------------------------------//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             //Создано Ульяновым Т.

function et11() {
    
    function pldCheck() {
        let word = prompt('Введите слово, которое хотите проверить на полидромность');
        let nullCheck = (word === null || word === "");
       
        if (nullCheck) {
            console.log('Невозможно проверить пустоту на полидромность!');
            return;
       }

        let rWord1 = word.split('');
        let rWord2 = rWord1.reverse();
        let rWord = rWord2.join('');
        let pldCheck = (word === rWord);
        let result1 = ('Слово ' + word + ' является полидромом');
        let result2 = ('Слово ' + word + ' не является полидромом');

        if (pldCheck) {
            console.log(result1);
        }
        else {
            console.log(result2);
        }

    }

    pldCheck();

}

//------------------------------------------------------------------------------------------easy task 12------------------------------------------------------------------------------------------//

function et12() {

    console.log('Начало конца');

    let student1 = {
        firstName: 'Пётр',
        age: '22',
        argRating: '4.1'
    }

    let student2 = {
        firstName: 'Мария',
        age: '21',
        argRating: '4.63'
    }

    let student3 = {
        firstName: 'Виктор',
        age: '21',
        argRating: '3.79'
    }

    let student4 = {
        firstName: 'Александр',
        age: '20',
        argRating: '4.51'
    }

    let student5 = {
        firstName: 'Елизавета',
        age: '23',
        argRating: '3.46'
    }

    let finalTaskStudentList = [student1, student2, student3, student4, student5];

    let stop = (finalTaskStudentList.length);
    
    for (let num = 0; num < stop; num++) {
    console.log(finalTaskStudentList[num]);
    }

}

//----------------------------------------------------------------------------------------summon a tasks----------------------------------------------------------------------------------------//


