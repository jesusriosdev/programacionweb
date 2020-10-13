function doSum() {

    var inputSum1 = document.getElementById('inputSum1');
    var inputSum2 = document.getElementById('inputSum2');

    var result = Number(inputSum1.value) + Number(inputSum2.value);
    // console.log(result);

    var lblSumResult = document.getElementById('lblSumResult');
    lblSumResult.innerHTML = `The result is: ${result}`;
}