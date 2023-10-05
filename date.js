//1
function dateDifference(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = Math.abs(end - start);
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  }
  
  
  const startDate = "2023-01-01";
  const endDate = "2024-02-02"; // my bd
  const difference = dateDifference(startDate, endDate);
  console.log(`Difference: ${difference.days} days, ${difference.hours} hours, ${difference.minutes} minutes, ${difference.seconds} seconds`);

//2
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
}

const currentDate = new Date();
const formattedDate = formatDate(currentDate);
console.log(formattedDate);

//3
function addDaysToDate(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const current = new Date();
const future = addDaysToDate(currentDate, 7);
console.log("Current: " + current.toLocaleDateString());
console.log(" Future Date (+7 days): "+ future.toLocaleDateString());
