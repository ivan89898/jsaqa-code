const { expect } = require("chai");
const {
  clickElement,
  putText,
  getText,
  clickPlace,
} = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");
const { ticketDate } = require("./lib/newDate.js");
let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Netology.ru tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  test("The first test'", async () => {
    await getText(page, ticketDate).click();
    await clickElement(page, '::-p-aria([name="11:00"][role="link"])');
    await clickElement(page, "section[@class='buying']");
    await clickPlace(page);
    await clickElement(page, "button[contains(text(),'Забронировать')]");
    await clickElement(
      page,
      "button[contains(text(),'Получить код бронирования')]"
    );
    expect(page("http://qamid.tmweb.ru/client/ticket.php"));
  });
});
