function cardValidator(cardNumber) {

	isEmpty(cardNumber);
	isString(cardNumber);
	isNumber(cardNumber);
	//console.log(isNumber(cardNumber));

}

function isEmpty(cardNumber){
	if (cardNumber === undefined || cardNumber === "") {		
		throw new TypeError('Vazio! Digite um numero válido.');
	}
}

function isString(cardNumber){
	if (typeof cardNumber === "string"){
		throw new TypeError('String! Digite apenas numeros.');
	}
}

function isNumber(cardNumber){
	if (typeof cardNumber === "number"){

		if(Number.isInteger(cardNumber)){

			if (numberHasOneDigit(cardNumber)){
				throw new TypeError("Numero precisa ter mais de 1 digito!");	
			} else {
				return cardNumberValidation(cardNumber);	
			}
			
		} else{
			throw new TypeError("Numero precisa ser inteiro");
		}
	}
}

function numberHasOneDigit(cardNumber){
	if (cardNumber.toString().length === 1){
		return true;
	} else {
		return false;
	}
}

function cardNumberValidation(cardNumber){
	cardNumber = cardNumber.toString();
	let arrayNumbers = [];
	let arrayNumberInverted = [];
	let sum = 0;

	for (let char of cardNumber){
		arrayNumbers.push(char);
	}

	arrayNumberInverted = arrayNumbers.reverse();

	//==========> VER SE DÁ PARA FAZER COM MAP/REDUCE
	for (let index = 1; index < arrayNumberInverted.length; index = index + 2) {
		let doubleNumber = arrayNumberInverted[index] * 2;
		if (doubleNumber > 9) {
			arrayNumberInverted[index] = doubleNumber - 9;
		} else {
			arrayNumberInverted[index] = doubleNumber;
		}
	}

		//Soma todos os valores do array
	arrayNumberInverted.forEach(function(element) {
		sum += parseInt(element);
	});


	//O número do cartao é valido se for divisível por 10
	if ( sum % 10 === 0){
		console.log("valido");
    return true;
  }else {
  	console.log("nao valido");
  	return false;  	
  }

}

module.exports = cardValidator; 


cardValidator(36490102462661);

cardValidator(4716905995681);

