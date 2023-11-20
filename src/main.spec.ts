import { describe, it, expect } from "vitest"
import { isLeadYear } from "./main.js"

/*
 * Use cases
 * 
 *  - isLeapYear(8)     => true      [divisible by 4]
 *  - isLeapYear(2008)  => true      [divisible by 4 but not by 100]
 *  - isLeapYear(2000)  => true      [divisible by 400]
 * 
 *  - isLeapYear(1800)  => false     [divisible by 4 but not by 400]
*/

describe("Lead year function test suit", () => {
  
})