// data
//initail investment
// annual contribution
// expected return
// duration
type investmentType = {
  initailInvetment: number;
  contribution: number;
  expectedReturn: number;
  duration: number;
};

let investmentData = {
  initailInvetment: 5000,
  contribution: 500,
  expectedReturn: 8,
  duration: 10,
};
type investmentResult = {
  year: string;
  totalAmount: number;
  totalContribution: number;
  totalInterestEarned: number;
};
let result: investmentResult[] = [];
function calculateInvetment(data: investmentType): investmentResult[] | string {
  let { duration, initailInvetment, expectedReturn, contribution } = data;

  if (initailInvetment < 0) {
    return "initial invetment not be zero ";
  }
  if (duration <= 0) {
    return "duration invalid ";
  }
  if (contribution < 0) {
    return "invalid contribution ";
  }

  let currentValue = initailInvetment;
  let totalInterestEarned = 0;
  let totalContribution = 0;
  for (let i = 1; i <= duration; i++) {
    const expectReturnPerYear = currentValue * (expectedReturn / 100);
    currentValue += expectReturnPerYear + contribution;
    totalContribution += contribution;
    totalInterestEarned += expectReturnPerYear;
    result.push({
      year: i + " year",
      totalInterestEarned: Math.round(totalInterestEarned),
      totalContribution: Math.round(totalContribution),
      totalAmount: Math.round(currentValue),
    });
  }
  return result;
}

let error = calculateInvetment(investmentData);
console.log(error);
console.log(result);
