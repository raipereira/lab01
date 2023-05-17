const getResult = (operation, num1, num2) => {
  firstNum = +num1;
  secondNum = +num2;

  switch(operation){
    case "+":
      return {
        operation: "Sum",
        result: firstNum + secondNum,
      }
    case "-":
      return {
        operation: "Subtraction",
        result: firstNum - secondNum,
      }
    case "/":
      return {
        operation: "Division",
        result: firstNum / secondNum,
      }
    case "*":
      return {
        operation: "Multiplication",
        result: firstNum * secondNum,
      }
  }
}

exports.execute = function (req,res,vals) {
  const { operation, firstNum, secondNum } = vals;

  var result = getResult(operation, firstNum, secondNum); 
  
  parseInt(firstNum) + parseInt(secondNum);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<!DOCTYPE html><html><head><meta charset=\"utf-8\"/><title>Calculator Web Site</title></head><body>  <p>The ${result.operation} is: ${String(result.result)}</p>  <a href="http://localhost:8080/">Home</a></body></html>`);
  return res.end();
};