/* jshint mocha: true, expr: true, strict: false */

describe('test suite', function () {
  it('should assert true', function () {
    true.should.be.true;
    false.should.be.false;
  });
});

describe('hello', function () {
  it('should return world', function () {
    hello().should.equal('world');
  });
});

describe('getStock', function () {
  it('should return a stock object', function (done) {
    getStock('AAPL', function (stock){
      stock.Name.should.equal('Apple Inc');
      done();
    });
  });
  it('should return another stock object', function (done) {
    getStock('MSFT', function (stock) {
      stock.Name.should.equal('Microsoft Corp');
      done();
    });
  });
});

describe('addStockToTable', function () {
  it('should add a row to the table', function () {
    var stock = { Name: 'SuperCorp', Symbol: 'SCRP', LastPrice: 12.34 };
    $('tr').length.should.equal(0);
    addStockToTable(stock);
    $('tr').length.should.equal(1);
  });
  it('should use stock data in the appended row', function () {
    var stock = { Name: 'Super Corp', Symbol: 'SCRP', LastPrice: 12.34 },
        $row  = addStockToTable(stock),
        $tds  = $row.find('td');

    $tds.length.should.equal(4);
    $($tds[0]).text().should.equal('Super Corp');
    $($tds[1]).text().should.equal('SCRP');
    $($tds[2]).text().should.equal('12.34');
    $($tds[3]).text().should.equal('12.34');
  });
});

describe('getMultipleStocks', function () {
  it('should return multiple stock objects', function (done) {
    getMultipleStocks(['AAPL', 'MSFT'], function (stocks) {
      stocks.length.should.equal(2);
      stocks[0].Name.should.equal('Apple Inc');
      stocks[1].Name.should.equal('Microsoft Corp');
      done();
    });
  });
});
