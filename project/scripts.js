console.log('hi')


class Tomagatchi {
	constructor(name, birthday, gender,){
	this.name = name;
	this.birthday = birthday;
	this.gender = gender;
	this.age = 0;
	this.hunger = 0;
	this.sleepiness = 0;
	this.boredom = 0;
  }
}

const charmander = new Tomagatchi('Charmander', '7/11', 'male')




$('#hunger').on('click', () =>{
	$('#hungry').text('HUNGER: ' + charmander.hunger --);
		 if(charmander.hunger<0){
         charmander.hunger=0;  
    }
})

$('#play').on('click', () => {
	$('#boredom').text('BOREDOM: ' + charmander.boredom --);
	charmander.boredom <= 0
		 if(charmander.boredom<0){
         charmander.boredom=0;  
    }
})

$('#lights').on('click', () =>{
 	$('body').toggleClass("darkness");
})

$('#rest').on('click', () => {
	$('#sleepiness').text('SLEEPINESS: ' + charmander.sleepiness --);
	 if(charmander.sleepiness<0){
         charmander.sleepiness=0;  
    }
})

const setClockAge = () => {
	const timer = setInterval(() => {
		$('#age').text('AGE: ' + charmander.age ++);
		if(charmander.age ===3){
			$('#tomagatchi').css('background-image', 'url("https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png")');
		}
		if(charmander.age===6){
			$('#tomagatchi').css('background-image', 'url("http://media-cerulean.cursecdn.com/attachments/5/859/mega_charizard.png")');
		}
		if(charmander.age===9){
			$('#tomagatchi').css('background-image', 'url("https://i.pinimg.com/originals/64/1a/ea/641aea0ebb57673d02a2cc3b6cee2821.jpg")');
		}
	}, 2000)}
	

const setClockSleep = () => {
		const timer2 = setInterval(() => {
			   //     $('#lights').on('click', () =>{
 					// window.clearInterval(timer2);}) 




				$('#boredom').text('BOREDOM: ' + charmander.boredom ++);
				$('#hungry').text('HUNGER: ' + charmander.hunger ++);
				$('#sleepiness').text('SLEEPINESS: ' + charmander.sleepiness ++);
			if (charmander.sleepiness == 11) {
        		$('#tomagatchi').css('background-image', 'url("http://i1097.photobucket.com/albums/g358/Tim_Finnegan/013_Thumb.jpg")');
        		window.clearInterval(timer2);}
        	if (charmander.boredom == 11) {
        		$('#tomagatchi').css('background-image', 'url("http://i1097.photobucket.com/albums/g358/Tim_Finnegan/013_Thumb.jpg")');
        		window.clearInterval(timer2);
    		}
	
    		if (charmander.hunger == 11) {
        		$('#tomagatchi').css('background-image', 'url("http://i1097.photobucket.com/albums/g358/Tim_Finnegan/013_Thumb.jpg")');
        			window.clearInterval(timer2);
    }
	}, 3000)}



setClockSleep()
setClockAge()


