
it('should calculate the monthly rate correctly', function () {
  const values = {
  amount:20000,
  years: 10,
  rate: 5.
};

expect(calculateMonthlyPayment(values)).toEqual('212.13');
}),


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 15000,
    years: 8,
    rate: 7
  };
  expect(calculateMonthlyPayment(values)).toEqual('204.51');
});

