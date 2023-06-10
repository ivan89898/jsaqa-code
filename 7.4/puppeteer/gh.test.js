//const { TimeoutSettings } = require("puppeteer");

let page;
const timeout = 1200000;
beforeEach(async () => {
  page = await browser.newPage();
});
afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test(
    "The h1 header content'",
    async () => {
      await page.goto("https://github.com/team");
      const firstLink = await page.$("header div div a");
      await firstLink.click();
      await page.waitForSelector(`h1`);
      const title2 = await page.title();
      expect(title2).toEqual(
        "GitHub for teams · Build like the best teams on the planet · GitHub"
      );
    },
    timeout
  );

  test(
    "The first link attribute",
    async () => {
      await page.goto("https://github.com/team");
      const actual = await page.$eval("a", (link) => link.getAttribute("href"));
      expect(actual).toEqual("#start-of-content");
    },
    timeout
  );

  test(
    "The page contains Sign in button",
    async () => {
      await page.goto("https://github.com/team");
      const btnSelector = ".btn-large-mktg.btn-mktg";
      await page.waitForSelector(btnSelector, {
        visible: true,
      });
      const actual = await page.$eval(btnSelector, (link) => link.textContent);
      expect(actual).toContain("Get started with Team");
    },
    timeout
  );

  test(
    "The h1 header content'",
    async () => {
      await page.goto("https://github.com/enterprise");
      const firstLink = await page.$("header div div a");
      await firstLink.click();
      await page.waitForSelector("h1");
      const title2 = await page.title();
      expect(title2).toEqual(
        "Enterprise · A smarter way to work together · GitHub"
      );
    },
    timeout
  );

  test(
    "The first link attribute",
    async () => {
      await page.goto("https://github.com/enterprise");
      const actual = await page.$eval("a", (link) => link.getAttribute("href"));
      expect(actual).toEqual("#start-of-content");
    },
    timeout
  );

  test(
    "The page contains Sign in button",
    async () => {
      await page.goto("https://github.com/enterprise");
      const btnSelector = ".btn-large-mktg.btn-mktg";
      await page.waitForSelector(btnSelector, {
        visible: true,
      });
      const actual = await page.$eval(btnSelector, (link) => link.textContent);
      expect(actual).toContain("Contact sales");
    },
    timeout
  );
});
