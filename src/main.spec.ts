import { describe, it, expect } from "vitest"
import { isLeadYear } from "./main.js"

/*
 * Use cases
 * 
 *  - isLeapYear(2008)  => true      [divisible by 4 but not by 100]
 *  - isLeapYear(4000)  => true      [divisible by 4, 100 and 400]
 *  - isLeapYear(2000)  => true      [divisible by 400]
 * 
 *  - isLeapYear(7)     => false     [not divisible by 4]
 *  - isLeapYear(1800)  => false     [divisible by 100 but not by 400]
*/

describe("Lead year function test suit", () => {

    it("should not be leap year if is not divisible by 4", () => {
        const year: number = 7

        const result: boolean = isLeadYear(year)
    
        expect(result).toBe(false)
    })

    it("should be leap year if is divisible by 4 but not by 100", () => {
        const year: number = 2008

        const result: boolean = isLeadYear(year)
    
        expect(result).toBe(true)
    })

    it("should not be leap year if is divisible by 100 but not by 400", () => {
        const year: number = 1800 

        const result: boolean = isLeadYear(year)
    
        expect(result).toBe(false)
    })

})