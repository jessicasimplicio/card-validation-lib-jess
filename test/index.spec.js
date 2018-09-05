var mocha = require("mocha");
var chai = require("chai");
var index = require("../index");

var expect = chai.expect;

describe("index", function() {

	describe("#cardValidator", function() {

		describe("when is empty", function() {
			it("should throw an error", function() {
				expect(() => index.cardValidator("")).to.throw(TypeError);
				expect(() => index.cardValidator()).to.throw(TypeError);
			});
		});

		describe("when is a string", function() {
			it("should throw an error", function() {
				//expect(index.cardValidator('')).to.be.empty;
				expect(() => index.cardValidator("ola")).to.throw(TypeError);
				expect(() => index.cardValidator("123")).to.throw(TypeError);
			});
		});

		describe("when is an integer number", function() {
			it("should throw an error", function() {
				//expect(index.cardValidator('')).to.be.empty;
				expect(() => index.cardValidator()).to.throw(TypeError);

			});
		});





	});

	/*describe("#badFn", function() {

		describe.only("when is empty", function() {
			it("should throw an error", function() {
				//expect(index.cardValidator('')).to.be.empty;
				expect(index.badFn).to.throw(TypeError);

			});
		});

	});*/


	

}); 