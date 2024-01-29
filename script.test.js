var filter = require('./script.js');

describe("test suite", () => {
    beforeEach(()=>{

    });
    
    it("test", () => {
        arr = [0,10,20,30];
        fn = function greaterThan10(n) { return n > 10; }
        ans = [20,30];
        res = filter(arr, fn);
        console.log(res);
        expect(res).toEqual(ans);
  });

  const mockFn=jest.fn();
  mockFn();
  mockFn(1,2,3);
  expect(mockFn).toHaveBeenCalledTimes(2);
  expect(mockFn).toHaveBeenCalledWith(1,2,3);
  expect(mockFn).not.toHaveBeenCalledWith(1,2,3,4);
});
