var mocha = require("mocha");
var chai = require("chai");
var index = require("../index");

var expect = chai.expect;

describe("index", function() {

	describe("#cardValidator", function() {

		describe("when it's empty", function() {
			it("should throw an error", function() {
				expect(() => index.cardValidator("")).to.throw(TypeError);
				expect(() => index.cardValidator()).to.throw(TypeError);
			});
		});

		describe("when it's a string", function() {
			it("should throw an error", function() {
				expect(() => index.cardValidator("ola")).to.throw(TypeError);
				expect(() => index.cardValidator("123")).to.throw(TypeError);
				expect(() => index.cardValidator(" ")).to.throw(TypeError);
			});
		});

		describe("when it's an integer number", function() {

			describe("and it has only one digit", function() {
				it("should throw an error", function() {
					expect(() => index.cardValidator(2)).to.throw(TypeError);
				});
			});	

			describe("and it has more than one digit", function() {
				it("should verify if the number is valid", function() {
					expect(index.cardValidator(36490102462661)).to.equal(true);
					expect(index.cardValidator(4716905995681)).to.be.true;
					expect(index.cardValidator(4716905995682)).to.be.false;
					expect(index.cardValidator(36490102462664)).to.be.false;										
				});
			});
		});

	});

	/*describe("#numberHasOneDigit", function() {

		describe("when is has only one digit", function() {
			it("should throw an error", function() {
				expect(() => index.numberHasOneDigit(3)).to.throw(TypeError);
				//expect(() => index.numberHasOneDigit(233)).to.be.false;
			});
		});
	});*/

}); 