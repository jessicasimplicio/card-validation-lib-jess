/*eslint-env node*/
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
	if (typeof cardNumber === "number"){
		return true;
	} else{
    throw new TypeError("Precisa ser número!");
	}
}

function isNumberInteger(cardNumber){
	if (Number.isInteger(cardNumber)){
		return true;
	} else {
		throw new TypeError("Numero precisa ser inteiro");
	}
}


function numberHasOneDigit(cardNumber){
	if (cardNumber.toString().length === 1){
		throw new TypeError("Numero precisa ter mais de 1 digito!");
	} else {
		return false;
	}
}

function cardNumberValidation(cardNumber){

  let sum = 0;
	let arrayNumberInverted = cardNumber.toString().split("").reverse();

  arrayNumberInverted = arrayNumberInverted.map(Number);

  arrayNumberInverted.map((number, index) => {
    if (index % 2 === 1) {//se o indice for impar
      let doubleNumber = number * 2;
      if (doubleNumber > 9) {
        number = doubleNumber - 9;
      } else {
        number = doubleNumber;
      }
    } 
  })


	arrayNumberInverted.forEach(function(element) {
		sum += element;
	});

  return (sum % 10 === 0) ? true : false; 
}
