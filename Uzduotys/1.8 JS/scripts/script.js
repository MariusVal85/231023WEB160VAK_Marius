function tempConvert(temperature) {
    let convertedTemperature = ((temperature - 32)/1.8).toFixed(1);
    let tempResult = `Lietuvoje siuo metu ${convertedTemperature} laipsniu pagal Celsiju`;
    return tempResult;
}

console.log(tempConvert(26));