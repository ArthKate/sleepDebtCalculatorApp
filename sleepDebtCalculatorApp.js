//calculate the no. of slepe hours a day
const getSleepHours = (day) => {
  switch (day) {
    case 'Sun':
      return 8;
      break;
    case 'Mon':
      return 8;
      break;
    case 'Tue':
      return 8;
      break;
    case 'Wed':
      return 8;
      break;
    case 'Thu':
      return 8;
      break;
    case 'Fri':
      return 8;
      break;
    case 'Sat':
      return 8;
      break;
  }
};

// const getActualSleepHours = () => getSleepHours('Sun') + getSleepHours('Mon') + getSleepHours('Tue') + getSleepHours('Wed') +getSleepHours('Thu') + getSleepHours('Fri') + getSleepHours('Sat')

// const getIdealSleepHours = () => {
//   const idealHours = 7;
//   return idealHours * 7;
// }
//getActualSleepHours refactored using literal numbers
const getActualSleepHours = () => 8 + 8 + 8 + 8 + 8 + 8 + 8;

const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
  // return idealHours
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(9);
  if (actualSleepHours === idealSleepHours)
    console.log('User got the perfect amount of sleep');
  else if (actualSleepHours > idealSleepHours)
    console.log(
      `user got ${
        actualSleepHours - idealSleepHours
      } hours more sleep than needed `
    );
  else
    console.log(
      `User has a slept debt of ${
        actualSleepHours - idealSleepHours
      } hours and should get rest`
    );
};

console.log(calculateSleepDebt());
