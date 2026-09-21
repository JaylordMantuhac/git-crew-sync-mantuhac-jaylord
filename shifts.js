
function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  if (hours < 0 || rate < 0) {
    throw new Error("Hours and rate cannot be negative");
  }

  const regularHours = Math.min(hours, 8);
  const overtimeHours = Math.max(hours - 8, 0);

  const regularPay = regularHours * rate;
  const overtimePay = overtimeHours * rate * 1.5;

  return Math.round(regularPay + overtimePay);
}

module.exports = { isValidShift, calculatePay };