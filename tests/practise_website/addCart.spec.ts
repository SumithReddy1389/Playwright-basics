import { test, expect } from "@playwright/test";

// test.describe("Add to cart", () => {
// test("Add product to cart", async ({ page }) => {
//   await page.goto("https://automationexercise.com/");

//   await page.pause();

//   await expect(page.getByRole("heading", { name: "Category" })).toBeVisible();
//   await page.getByRole("link", { name: "Products" }).click();
//   await expect(
//     page.getByRole("heading", { name: "All Products" }),
//   ).toBeVisible();

//   let products = await page
//     .locator(".features_items")
//     .locator(".product-image-wrapper");

//   for (let i = 0; i < 2; i++) {
//     await products.nth(i).hover();
//     await products
//       .nth(i)
//       .locator(".product-overlay")
//       .getByText("Add to cart")
//       .click();

//     await expect(page.getByText("Added!")).toBeVisible();

//     await expect(
//       page.getByText("Your product has been added to cart."),
//     ).toBeVisible();

//     await expect(page.getByRole("link", { name: "View Cart" })).toBeVisible();

//     let continewShoppingButton = page.getByRole("button", {
//       name: "Continue Shopping",
//     });

//     await expect(
//       page.getByRole("button", { name: "Continue Shopping" }),
//     ).toBeVisible();

//     await continewShoppingButton.click();
//   }

//   await page.getByRole("link", { name: " Cart" }).click();

//   await expect(page.getByText("Shopping Cart")).toBeVisible();

//   await expect(page.getByText("Proceed To Checkout")).toBeVisible();

//   let items = await page.locator(".cart_info").locator("tr");

//   for (let j = 1; j < (await items.count()); j++) {
//     let productName = await items
//       .nth(j)
//       .locator(".cart_description")
//       .locator("h4")
//       .textContent();
//     console.log(productName);

//     let quantity = await items
//       .nth(j)
//       .locator(".cart_quantity")
//       .locator("button")
//       .textContent();
//     console.log(quantity);

//     let price = await items.nth(j).locator(".cart_price").textContent();
//     console.log(price?.trim());

//     let total = await items.nth(j).locator(".cart_total").textContent();
//     console.log(total?.trim());
//   }
// });
// });

// test("Add to cart and register", async ({ page }) => {
//   await page.goto("https://automationexercise.com/");
//   await page.pause();

//   await page
//     .locator(".features_items")
//     .locator(".product-image-wrapper")
//     .first()
//     .hover();

//   await page
//     .locator(".features_items")
//     .locator(".product-image-wrapper")
//     .locator(".product-overlay")
//     .getByText("Add to cart").first()
//     .click();

//   await page.getByRole("link", { name: "View Cart" }).click();
//   await page.getByText("Proceed To Checkout").click();
//   await page.getByRole("link", { name: "Register / Login" }).click();

//   await page
//     .locator("form")
//     .filter({ hasText: "Login" })
//     .getByPlaceholder("Email Address")
//     .fill("sumith123@gamil.com");
//   await page.getByRole("textbox", { name: "Password" }).fill("Pass@123");
//   await page.getByRole("button", { name: "Login" }).click();
//   await page.getByRole("link", { name: " Cart" }).click();
//   await page.getByText("Proceed To Checkout").click();
//   await page.getByRole("heading", { name: "Your delivery address" }).click();
//   await page.getByRole("heading", { name: "Your billing address" }).click();
//   await page.getByRole("heading", { name: "Address Details" }).click();
//   await page.getByRole("heading", { name: "Review Your Order" }).click();
//   await page.getByRole("cell", { name: "Total Amount" }).click();
//   await page.locator('textarea[name="message"]').click();
//   await page.locator('textarea[name="message"]').fill("test");
//   await page.getByRole("link", { name: "Place Order" }).click();
//   await page.locator('input[name="name_on_card"]').click();
//   await page.locator('input[name="name_on_card"]').fill("123456576676");
//   await page.locator('input[name="card_number"]').click();
//   await page.locator('input[name="card_number"]').fill("sumith");
//   await page.locator('input[name="card_number"]').press("Tab");
//   await page.getByRole("textbox", { name: "ex." }).fill("121");
//   await page.getByRole("textbox", { name: "MM" }).click();
//   await page.getByRole("textbox", { name: "MM" }).fill("122");
//   await page.getByRole("textbox", { name: "YYYY" }).click();
//   await page.getByRole("textbox", { name: "YYYY" }).fill("2222");
//   await page.getByRole("button", { name: "Pay and Confirm Order" }).click();
//   await page.getByText("Order Placed!").click();
//   await page.getByText("Congratulations! Your order").click();
//   await page.getByRole("link", { name: "Continue" }).click();
// });

// test.describe("Add to cart", () => {
//   test("Add custom product to cart", async ({ page }) => {
//     let type: string = "Fancy Green Top";

//     await page.goto("https://automationexercise.com/");

//     // await page.pause();

//     await expect(page.getByRole("heading", { name: "Category" })).toBeVisible();
//     await page.getByRole("link", { name: "Products" }).click();
//     await expect(
//       page.getByRole("heading", { name: "All Products" }),
//     ).toBeVisible();

//     let products = await page
//       .locator(".features_items")
//       .locator(".product-image-wrapper");

//       // let productCount = await products.count();
//       // let randomIndex = Math.floor(Math.random() * productCount);

//     for (let i = 0; i < (await products.count()); i++) {
//       let text = await products
//         .nth(i)
//         .locator(".productinfo")
//         .locator("p")
//         .textContent();
//       console.log(text);

//       if (text?.trim() === type) {
//         await products.nth(i).hover();
//         await products
//           .nth(i)
//           .locator(".product-overlay")
//           .getByText("Add to cart")
//           .click();

//         await expect(page.getByText("Added!")).toBeVisible();

//         await expect(
//           page.getByText("Your product has been added to cart."),
//         ).toBeVisible();

//         await expect(
//           page.getByRole("link", { name: "View Cart" }),
//         ).toBeVisible();

//         let continewShoppingButton = page.getByRole("button", {
//           name: "Continue Shopping",
//         });

//         await expect(
//           page.getByRole("button", { name: "Continue Shopping" }),
//         ).toBeVisible();

//         await continewShoppingButton.click();

//         break;
//       }
//     }

//     await page.getByRole("link", { name: " Cart" }).click();

//     await expect(page.getByText("Shopping Cart")).toBeVisible();

//     await expect(page.getByText("Proceed To Checkout")).toBeVisible();

//     let items = await page.locator(".cart_info").locator("tr");

//     for (let j = 1; j < (await items.count()); j++) {
//       let productName = await items
//         .nth(j)
//         .locator(".cart_description")
//         .locator("h4")
//         .textContent();
//       console.log(productName);

//       let quantity = await items
//         .nth(j)
//         .locator(".cart_quantity")
//         .locator("button")
//         .textContent();
//       console.log(quantity);

//       let price = await items.nth(j).locator(".cart_price").textContent();
//       console.log(price?.trim());

//       let total = await items.nth(j).locator(".cart_total").textContent();
//       console.log(total?.trim());
//     }
//   });
// });

test("Add to cart register at checkout", async ({ page }) => {
  await page.goto("https://automationexercise.com/");

  await page
    .locator(".features_items")
    .locator(".product-image-wrapper")
    .first()
    .hover();

  await page
    .locator(".features_items")
    .locator(".product-image-wrapper")
    .locator(".product-overlay")
    .getByText("Add to cart")
    .first()
    .click();

  await page.getByRole("link", { name: "View Cart" }).click();
  await page.getByText("Shopping Cart").click();
  await page.getByText("Proceed To Checkout").click();
  await page.getByRole("heading", { name: "Checkout" }).click();
  await page.getByText("Register / Login account to").click();
  await page.getByRole("link", { name: "Register / Login" }).click();
  await page.getByRole("heading", { name: "New User Signup!" }).click();
 
  await page.getByRole("textbox", { name: "Name" }).fill("sumith");
  
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
    .fill("sumtih2309@gmail.com");
  await page.getByRole("button", { name: "Signup" }).click();

  await page.getByText("Enter Account Information").click();
  await page.locator("#uniform-id_gender1").click();
  await page.getByRole("textbox", { name: "Name *", exact: true }).click();
  await page.getByRole("textbox", { name: "Password *" }).fill("Pass@123");
  await page.locator("#days").selectOption("16");
  await page.locator("#months").selectOption("12");
  await page.locator("#years").selectOption("2003");
  await page.getByText("Address Information").click();
  await page.getByRole("textbox", { name: "First name *" }).fill("sumith");
  await page.getByRole("textbox", { name: "Last name *" }).fill("reddy");
  await page
    .getByRole("textbox", { name: "Company", exact: true })
    .fill("india");
  await page
    .getByRole("textbox", { name: "Address * (Street address, P." })
    .fill("12");
  await page
    .getByRole("textbox", { name: "Address * (Street address, P." })
    .fill("1212");
  await page.getByRole("textbox", { name: "Address 2" }).fill("2");
  await page.getByRole("textbox", { name: "State *" }).fill("te");
  await page.getByRole("textbox", { name: "City * Zipcode *" }).fill("hy");
  await page.locator("#zipcode").fill("121212");
  await page
    .getByRole("textbox", { name: "Mobile Number *" })
    .fill("97654345678");
  await page.getByRole("button", { name: "Create Account" }).click();
  await page.getByText("Account Created!").click();

  await page.getByRole("link", { name: "Continue" }).click();
  await page.getByRole("link", { name: " Cart" }).click();
  await page.getByText("Proceed To Checkout").click();

  await expect(page.getByRole("heading", { name: "Address Details" })).toBeVisible();
  await page.getByRole("heading", { name: "Your delivery address" }).click();
  await page.getByRole("heading", { name: "Your billing address" }).click();
  await page.getByRole("heading", { name: "Review Your Order" }).click();
  await page.getByText("If you would like to add a").click();
  await page.locator('textarea[name="message"]').fill("test");
  await page.getByRole("link", { name: "Place Order" }).click();

  await page.getByRole("heading", { name: "Payment" }).click();
  await page.locator('input[name="name_on_card"]').fill("sumith");
  await page.locator('input[name="card_number"]').fill("781690623105018234");
  await page.getByRole("textbox", { name: "ex." }).fill("121");
  await page.getByRole("textbox", { name: "MM" }).fill("09");
  await page.getByRole("textbox", { name: "YYYY" }).fill("123");
  await page.getByRole("button", { name: "Pay and Confirm Order" }).click();

  await expect(page.getByText("Order Placed!")).toBeVisible();
  await expect(page.getByText("Congratulations! Your order")).toBeVisible();

  await page.getByRole("link", { name: "Continue" }).click();

  await expect(page.getByRole("heading", { name: "Features Items" })).toBeVisible();

  //delete account
  await page.getByRole("link", { name: " Delete Account" }).click();
  await expect(page.getByText("Account Deleted!")).toBeVisible();
  await page.getByRole("link", { name: "Continue" }).click();
});
