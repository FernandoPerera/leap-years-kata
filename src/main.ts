export function isLeadYear(year: number): boolean {

  const isDivisibleByFour: boolean = year % 4 === 0
  if (isDivisibleByFour) { return true }

  return false
}
