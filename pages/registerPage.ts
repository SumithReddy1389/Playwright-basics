import { Page, Locator } from "@playwright/test";

export class RegisterPage {
  page: Page;
  enterAccountInformationText: Locator;
  titleMr: Locator;
  titleMrs: Locator;
  name: Locator;
  email: Locator;
  password: Locator;
  dobDay: Locator;
  dobMonth: Locator;
  dobYear: Locator;
  firstName: Locator;
  lastName: Locator;
  company: Locator;
  address: Locator;
  address2: Locator;
  country: Locator;
  state: Locator;
  city: Locator;
  zipcode: Locator;
  mobileNumber: Locator;
  createAccountButton: Locator;
  accountCreatedText: Locator;
  congratulationsText: Locator;
  continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.enterAccountInformationText =  page.getByText("Enter Account Information");
    this.titleMr = page.getByRole("radio", { name: "Mr." });
    this.titleMrs = page.getByRole("radio", { name: "Mrs." });
    this.name = page.locator('[data-qa="name"]');
    this.email = page.locator('[data-qa="email"]');
    this.password = page.locator('[data-qa="password"]');
    this.dobDay = page.locator("#days")
    this.dobMonth = page.locator("#months");
    this.dobYear = page.locator("#years");
    this.firstName = page.locator('[data-qa="first_name"]');
    this.lastName = page.locator('[data-qa="last_name"]');
    this.company = page.locator('[data-qa="company"]');
    this.address = page.locator('[data-qa="address"]');
    this.address2 = page.locator('[data-qa="address2"]');
    this.country = page.locator('[data-qa="country"]');
    this.state = page.locator('[data-qa="state"]');
    this.city = page.locator('[data-qa="city"]');
    this.zipcode = page.locator('[data-qa="zipcode"]');
    this.mobileNumber = page.locator('[data-qa="mobile_number"]');
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' })
    this.accountCreatedText = page.getByText("Account Created!");
    this.congratulationsText = page.getByText(
      "Account Created! Congratulations! Your new account has been successfully",
    );
    this.continueButton = page.getByRole("link", { name: "Continue" });
  }
}
