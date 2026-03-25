// variables, methods, and other code elements that are used across multiple test files. This promotes code reusability and maintainability.
import { Page, Locator } from "@playwright/test";

export class HomePage {
  page: Page;
  signupLoginLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupLoginLink = page.getByRole("link", { name: " Signup / Login" });
  }

}
