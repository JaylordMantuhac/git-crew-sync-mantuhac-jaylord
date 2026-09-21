function calculatePay(hours, rate) {
  const regularHours = Math.min(hours, 8);
  const overtimeHours = Math.max(hours - 8, 0);

  const regularPay = regularHours * rate;
  const overtimePay = overtimeHours * rate * 1.5;

  return Math.floor(regularPay + overtimePay);
}