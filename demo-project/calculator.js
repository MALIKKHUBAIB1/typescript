var result = [];
var investmentData = {
    initailInvetment: 100,
    contribution: 500,
    expectedReturn: 5,
    duration: 10,
};
function calculateInvetment(data) {
    for (var key in data) {
        console.log(data[key]);
    }
    return result;
}
calculateInvetment(investmentData);
