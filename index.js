module.exports.cardValidator = function cardValidator(cardNumber) {
	var result;
	isEmpty(cardNumber);
	isString(cardNumber);

	if (isNumber(cardNumber)){
		if (isNumberInteger(cardNumber) && !numberHasOneDigit(cardNumber)){
			result = cardNumberValidation(cardNumber);
		}
	}
	//console.log(result);
	return result;
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
	if(typeof cardNumber === "number"){
		return true;
	} else{
		return false;
	}
}

function isNumberInteger(cardNumber){
	if(Number.isInteger(cardNumber)){
		return true;
	} else {
		throw new TypeError("Numero precisa ser inteiro");
		return false;
	}
}


function numberHasOneDigit(cardNumber){
	if (cardNumber.toString().length === 1){
		throw new TypeError("Numero precisa ter mais de 1 digito!");
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

	//==========>  FAZER COM MAP/REDUCE
	for (let index = 1; index < arrayNumberInverted.length; index = index + 2) {
		let doubleNumber = arrayNumberInverted[index] * 2;
		if (doubleNumber > 9) {
			arrayNumberInverted[index] = doubleNumber - 9;
		} else {
			arrayNumberInverted[index] = doubleNumber;
		}
	}

	arrayNumberInverted.forEach(function(element) {
		sum += parseInt(element);
	});


	//USAR TERNARIO
	if ( sum % 10 === 0){
    return true;
  }else {
  	return false;  	
  }

}
