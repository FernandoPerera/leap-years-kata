export function isLeadYear(year: number): boolean {

  const isAtypicalLeapYear: boolean = year % 100 === 0 && year % 400 !== 0
  if (isAtypicalLeapYear) { return false }

  const isDivisibleByFour: boolean = year % 4 === 0
  if (isDivisibleByFour) { return true }

  return false
}
