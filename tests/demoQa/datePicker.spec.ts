import { test, expect } from "@playwright/test";


// test("Date picker example", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");

//   let date = "10/17/2026";
//     await page.pause()
//   // Date picker
//     let datePicker = page.locator("#datepicker");
//     await datePicker.click();
//     await datePicker.fill(date);

//     expect(await datePicker.inputValue()).toBe(date);
// });

test("Date picker example with keyboard", async ({ page }) => { 
    await page.goto("https://testautomationpractice.blogspot.com/");
await page.pause()

await page.locator("#txtDate").click();
    let month = page.locator("[aria-label='Select month']");
    let year = page.locator("[aria-label='Select year']");

    // await month.selectOption("10");
    await month.selectOption({ label: "Apr" });

    await year.selectOption("2024");

    await page.locator("[data-date='1']").first().click();

});