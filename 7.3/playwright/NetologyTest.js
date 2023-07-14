const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 3000,
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");

  //assertion
  await browser.close();
})();
