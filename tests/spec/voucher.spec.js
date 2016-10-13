
//1 test when valid code applied it is taken off total
describe('.addVoucherCode', function() {
	beforeEach(function() {
		instance.bagModel = new Model({
			total: 25
		});
	});

	it('should reduce total by 5 if voucher is correct', function() {
		var voucherCode = 'getMeFiveOff';

		instance.addVoucherCode(voucherCode);

		expect(instance.bagModel.attributes.total).toBe(20);
	});

	it('should not reduce total if voucher is incorrect', function() {
		var voucherCode = 'getMeSixOff';

		instance.addVoucherCode(voucherCode);

		expect(instance.bagModel.attributes.total).toBe(25);
	});
});


//2 test when spending over 50, £10 taken off total
describe('.onOverFifty', function() {

});

//3 test when spending over £75 and shoes in basket, £15 taken off total



//4 test that validation is displayed to user when incorrect code is entered