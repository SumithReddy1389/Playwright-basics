import { test, expect } from "@playwright/test";



test('Validating DemoQA new tab Page', async ({ page }) => {
    await page.goto('https://demoqa.com/');

    await page.locator('[href="/alertsWindows"]').click();

    await page.locator('[href="/browser-windows"]' ).click();

    const [newPage] =   await Promise.all([
        page.waitForEvent('popup'),
        page.locator('#tabButton').click()
    ]);

    console.log(await newPage.url());

    let text = await newPage.locator('#sampleHeading').textContent();
    console.log(text);
});

test.only('Validating DemoQA new window Page', async ({ page }) => {
    await page.goto('https://demoqa.com/');

    await page.locator('[href="/alertsWindows"]').click();

    await page.locator('[href="/browser-windows"]' ).click();

    const [newTab] =   await Promise.all([
        page.waitForEvent('popup'),
        page.locator('#windowButton').click()
    ]);

    await newTab.waitForLoadState();

    console.log(await newTab.url());

    let text = await newTab.locator('#sampleHeading').textContent();
    console.log(text);
    await newTab.close();

    await page.locator('#tabButton').click()


    await page.selectOption('#react-select-3-placeholder', 'NCR')   
    
});