const { test, expect } = require("@playwright/test");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 300,
  });

  //assertion
  await browser.close();
})();
test("test", async ({ page }) => {
  // Go to https://netology.ru/free/management#/
  await page.goto("https://netology.ru/free/management#/");

  // Click a
  await page.click("a");
  await expect(page).toHaveURL("https://netology.ru/");

  // Click text=Учиться бесплатно
  await page.click("text=Учиться бесплатно");
  await expect(page).toHaveURL("https://netology.ru/free");

  page.click("text=Бизнес и управление");

  // Click text=Как перенести своё дело в онлайн
  await page.click("text=Как перенести своё дело в онлайн");
  await expect(page).toHaveURL(
    "https://netology.ru/programs/kak-perenesti-svoyo-delo-v-onlajn-bp"
  );
});

test("Success login", async ({ page }) => {
  // Go to https://netology.ru/free/management#/
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.click('[placeholder="Email"]');
  await page.fill(`[placeholder="Email"]`, email);
  await page.click('[placeholder="Пароль"]');
  await page.fill('[placeholder="Пароль"]', password);
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page).toHaveURL("https://netology.ru/profile");
});

test("wrong login", async ({ page }) => {
  // Go to https://netology.ru/free/management#/
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.click('[placeholder="Email"]');
  await page.fill(`[placeholder="Email"]`, "email");
  await page.click('[placeholder="Пароль"]');
  await page.fill('[placeholder="Пароль"]', "password");
  await page.click('[data-testid="login-submit-btn"]');
  await expect(getByText("Обязательное поле").first());
  await expect(getByText("Обязательное поле").nth(1));
});
