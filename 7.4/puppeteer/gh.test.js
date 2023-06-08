//const { TimeoutSettings } = require("puppeteer");

let page;
const timeout = 70000;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test(
    "The h1 header content'",
    async () => {
      const firstLink = await page.$("header div div a");
      await firstLink.click();
      await page.waitForSelector("h1");
      const title2 = await page.title();

      expect(title2).toEqual(
        "GitHub: Where the world builds software · GitHub"
      );
    },
    timeout
  );

  test(
    "The first link attribute",
    async () => {
      const actual = await page.$eval("a", (link) => link.getAttribute("href"));
      expect(actual).toEqual("#start-of-content");
    },
    timeout
  );

  test(
    "The page contains Sign in button",
    async () => {
      const btnSelector = ".btn-large-mktg.btn-mktg";
      await page.waitForSelector(btnSelector, {
        visible: true,
      });
      const actual = await page.$eval(btnSelector, (link) => link.textContent);
      expect(actual).toContain("Sign up for free");
    },
    timeout
  );
});

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/enterprise");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test(
    "The h1 header content'",
    async () => {
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
      const actual = await page.$eval("a", (link) => link.getAttribute("href"));
      expect(actual).toEqual("#start-of-content");
    },
    timeout
  );

  test(
    "The page contains Sign in button",
    async () => {
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
