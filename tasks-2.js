//------------TASK 1--------------//
//спитати вік користувача
//якщо більше 18 і менше 60 вивести відповідне повідомлення
//в іншому випадку вивести інше повідомлення

//------------TASK 2--------------//
//спитати користувача номер школи, місто та дату закінчення
//якщо номер школи 25, місто Львів та дата закінчення 2005 то вивести відповідне повідомлення

//------------TASK 3--------------//
//спитати користувача чи він одружений, чи має дітей, в якому місті живе та його вік
//якщо вік користувача більше 12 та менше 17,
//якщо місто Львів,
//якщо не одружений
//якщо не має дітей
//тоді вивести відповідне повідомлення

//------------TASK 4--------------//
//запитати в користувача суму в доларах
//повернути числове значення без значка долара

//------------TASK 5--------------//
//є стрінг 1234567
//вивести 123

//------------TASK 6--------------//
//В діапазоні від 1 до 50 вивести всі числа кратні 3.(while)

//------------TASK 7--------------//
//В діапазоні від 0 до 20 додати всі парні числа. тобто код має додати 0+2+4+6+8+10+12+14+16+18 = 90

//------------TASK 8--------------//
//Використовуючи prompt i while напишіть код, який питає в юзера число, якщо число менше 100 ,то попросіть знову ввести число. Хай вводить число до тих пір, поки не введе 100 або більше

//------------TASK 9--------------//
//Перевірити стрічку "Hello Admin!" на те чи перший символ з великої літери, чи є в реченні пробіл і чи останній символ знак оклику. Якщо всі умови справджуються, то виводимо "hello admin". В іншому випадку виводимо "bye".

//------------TASK 10--------------//
//Є стрічка “qwerty”. Написати код, який міняє регістр з нижнього на верхній. Тобто результат має бути “QWERTY”

//------------TASK 11--------------//
//Є стрічка “qWeRtY”. Написати код, який міняє регістр з нижнього на верхній і навпаки. Тобто результат має бути “QwErTy”



// task 1 

var x = 'qWeRtY';

var y = '';
for(var i = 0; i < x.length; i++) {
	if (x[i].toUpperCase() == true) {
		x[i].toLowerCase();
		y += x[i]; 
		console.log(x[i]);
	} else {
		y += x[i]; 
	}
	console.log(y);	
}		

