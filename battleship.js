var location1 = 3;	//первая позиция корабля
var location2 = 4;	//вторая позиция корабля
var location3 = 5;	//третья позиция корабля

var guess;			//координата текущего выстрела
var hits = 0;		//количество попаданий
var guesses = 0;	//количество попыток

var isSunk = false;	//потоплен корабль или нет

while (isSunk == false) {	//проверка, потоплен ли корабль
	guess = prompt("Ready, aim, fire! (enter a number 0-6):");	//предложение 
	// пользователю, ввести координаты, куда стрелять, через всплывающее окно.
	if (guess < 0 || guess > 6) {		//если введенное значение меньше 0 или больше 6
		alert("Please enter a valid cell number!");		//просим ввести значение поновой
	} else {							//если введенное значение в нужном диапазоне
		guesses = guesses + 1;			//добавляем к количеству попыток +1
		if(guess == location1 || guess == location2 || guess == location3) {	
			//проверяем, совпал ли выстрел с координатой корабля
			hits = hits + 1;	//если да, то +1 к попаданию.
			alert("HIT!")
			
			if(hits == 3) {		// если было совершено 3 попадания
				isSunk = true;	//корабль потоплен
				alert("You sank my battleship!");	//выводим сообщение об этом
			}
		} else {
			alert("MISS!")
		}
	}
}
var stats = "You took " + guesses + " guesses to sink the battleshiop, " + 	//формирование статистики игры
			"which means your shooting accuracy was " + (3/guesses);
alert(stats);				//после цикла, вывод статистики игры.