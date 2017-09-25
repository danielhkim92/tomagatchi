console.log('hi')

class Tomagatchi {
	constructor(name, birthday, gender,){
	this.name = name;
	this.birthday = birthday;
	this.age = 0;
	this.gender = gender;
	this.hunger = 1;
	this.sleepiness = 1;
	this.boredom = 1;
}
	
}

const charmander = new Tomagatchi('Charmander', '7/11', 'male')

const $div = $('<div>').addClass('Tomagatchi')
$div.appendTo($('body'))

const $hunger = $('<button>').attr('id', 'Hunger')
$hunger.text('Hunger')
$hunger.appendTo($('body'))

const $light = $('<button>').attr('id', 'Lights')
$light.text('Lights')
$light.appendTo($('body'))

const $play = $('<button>').attr('id', 'Play')
$play.text('Play')
$play.appendTo($('body'))
let time = 0
const setTimer = () => {
	const timer = setInterval(() => {
		time++

		// if(time === 0){
		// 	clearInterval(timer)
		// 	round++;
			// $('modal-hidden'.toggleClass('.modal')
	
		$('#timer').text(`timer: ${time}second old`);
	}, 1000)}
