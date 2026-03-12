import { test, expect } from "@playwright/test";

// [attr="value"] - CSS Selector
// //tagname[@attr="value"] - XPath Selector
//tagname[text()="text"] - XPath Selector

// test('Validating DemoQA Elements Page', async ({ page }) => {
//     await page.goto('https://demoqa.com/');

//     await page.locator('[href="/elements"]').click();

//     await page.locator('[href="/text-box"]' ).click();

//     // page.getByText('Text Box')
//     await expect(page.locator('//h1[text()="Text Box"]')).toBeVisible();

//     await page.getByPlaceholder('Full Name').fill('John Doe');
//     await page.locator("//input[@id='userEmail']").fill('xyz@gamil.com');
//     await page.locator('[id="currentAddress"]').fill('123 Main St, Anytown, USA');
//     await page.locator('//textarea[@id="permanentAddress"]').fill('456 Elm St, Othertown, USA');

//     await page.getByRole('button', { name: 'Submit' }).click();

//     await page.getByText("Home")
// });

// // // getByRole()
// // // getByLabel()
// // // getByTestId()
// // // locator(CSS)
// // // locator(XPath)

// test('Validating DemoQA check Box Page', async ({ page }) => {
//     await page.goto('https://demoqa.com/');

//     await page.locator('[href="/elements"]').click();

//     await page.locator('[href="/checkbox"]' ).click();

//     let checkBox = page.locator('[aria-label="Select Home"]');

//     await checkBox.check();

//     await expect(checkBox).toBeChecked();

//     await checkBox.click();

//     await expect(checkBox).not.toBeChecked();

//     await page.locator("//span[contains(@class,'rc-tree-switcher')]").click();

//     let docCheckBox = page.locator('[aria-label="Select Documents"]');

//     await docCheckBox.click();

//     await expect(docCheckBox).toBeChecked();

//     let results = page.locator('#result').allTextContents();
//     // await expect(results).toContain('You have selected');
//     // await expect(results).toContain('documents workspace office react angular veu public private classified general');

// })

// test('Validating DemoQA Radio Button  Page', async ({ page }) => {
//     await page.goto('https://demoqa.com/');

//     await page.locator('[href="/elements"]').click();

//     await page.locator('[href="/radio-button"]' ).click();

//     let yesRadioButton = page.locator('#yesRadio');
//     let impressiveRadioButton = page.locator('#impressiveRadio');
//     let noRadioButton = page.getByTestId('noRadio');

//     // button(type: string){
//     //     return page.getByRole('button', { name: type });
//     // }

//     // await button('No').click();

//     await yesRadioButton.click();

//     // . - class
//     // # - id
//     // [attr="value"] - attribute

//     let results = await page.locator('.text-success').textContent();
//     console.log(results);
//     expect(results).toContain('Yes');

//     await impressiveRadioButton.click();

//     results = await page.locator('.text-success').textContent();
//     console.log(results);
//     expect(results).toContain('Impressive');
// })

// test('Validating DemoQA  Button  Page', async ({ page }) => {
//     await page.goto('https://demoqa.com/');

//     await page.locator('[href="/elements"]').click();

//     await page.locator('[href="/buttons"]').click();

//     await page.locator('#doubleClickBtn').dblclick();

//     let doubleClickMessage = page.locator('#doubleClickMessage')

//     await expect(doubleClickMessage).toBeVisible();
//     await expect(doubleClickMessage).toHaveText('You have done a double click');

//     await page.getByRole('button', { name: 'Click Me', exact: true }).click();

//     await page.getByText('Right Click Me').click({ button: 'right' });
// })

// test("Validating DemoQA Links Page", async ({ page }) => {
//   await page.goto("https://demoqa.com/");

//   await page.locator('[href="/elements"]').click();

//   await page.locator('[href="/links"]').click();

//   //     let homelink = page.locator('#simpleLink');

//   //     // await homelink.click();
//   // // switching to new tab
//   //     const [newPage] = await Promise.all([
//   //         page.waitForEvent('popup'),
//   //         homelink.click()
//   //     ]);

//   //     await expect(newPage).toHaveURL('https://demoqa.com/');

//   //     await newPage.locator('[href="/elements"]').click();
//   //     await newPage.close();

//   //     await newPage.locator('[href="/elements"]').click();

// //   let firstLink = page.locator("#created");
// //   await firstLink.click();

//   let responseMessage = page.locator("#linkResponse");

// //Parameterization - Data Driven Testing
//   const links = [
//     { id: "#created", status: "201", text: "Created" },
//     { id: "#no-content", status: "204", text: "No Content" },
//     { id: "#moved", status: "301", text: "Moved Permanently" },
//     // { id: "#bad-request", status: "400", text: "Bad Request" },
//     { id: "#unauthorized", status: "401", text: "Unauthorized" },
//     { id: "#forbidden", status: "403", text: "Forbidden" },
//     { id: "#invalid-url", status: "404", text: "Not Found" },
//   ];

//     for (const link of links) {
//         await page.locator(link.id).click();

//         await expect(responseMessage).toBeVisible();
//         await expect(responseMessage).toHaveText(
//             `Link has responded with staus ${link.status} and status text ${link.text}`
//         );
//     }
// });

// test("dropdown example", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");

//   // by value
//   await page.selectOption("#country", "india");
//   // by index
//   await page.selectOption("#country", { index: 1 });
//   // by label
//   await page.selectOption("#country", { label: "India" });

//   //   let input = await page.locator('#country').inputValue()

//   // console.log(input);

//   //     expect(input).toBe('india');

//   //   const options = await page.locator('#country option').allTextContents();

//   // console.log(options);
// });

// test("Upload file example", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");
//   await page.pause()
//   await page.locator('#singleFileInput').setInputFiles("c:\\Users\\SumithReddy\\Desktop\\Playwright Notes.txt")
 
//    await page.locator('#singleFileInput').setInputFiles(["\\data\\Playwright Notes.txt",
//     "\\data\\Playwright Notes.txt"
//    ])
// });

// mouse hover example
test("Mouse hover example", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/#"); 
  await page.pause();
  await page.getByRole('button', { name: 'Point Me' }).hover();

  await page.getByRole('link', { name: 'Mobiles' }).click();

});
// double click example