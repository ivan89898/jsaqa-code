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
  await page.goto("http://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
  page.close();
});

test("The first test'", async () => {
  await clickElement(page, `::-p-xpath(/html/body/nav/a[2])`);
  await clickElement(page, '::-p-aria([name="11:00"][role="link"])');
  await clickElement(
    page,
    `::-p-xpath(/html/body/main/section/div[2]/div[1]/div[9]/span[7])`
  );
  await clickElement(page, '::-p-aria([name="ЗАБРОНИРОВАТЬ"][role="button"])');

  expect("http://qamid.tmweb.ru/client/payment.php");
});

test("The 3Ticket test'", async () => {
  await clickElement(page, `::-p-xpath(/html/body/nav/a[2])`);
  await clickElement(page, '::-p-aria([name="11:00"][role="link"])');
  await clickElement(
    page,
    `::-p-xpath(/html/body/main/section/div[2]/div[1]/div[2]/span[7])`
  );
  await clickElement(
    page,
    `::-p-xpath(/html/body/main/section/div[2]/div[1]/div[6]/span[3])`
  );
  await clickElement(
    page,
    `::-p-xpath(/html/body/main/section/div[2]/div[1]/div[1]/span[6])`
  );
  await clickElement(page, '::-p-aria([name="ЗАБРОНИРОВАТЬ"][role="button"])');

  expect("http://qamid.tmweb.ru/client/payment.php");
});

test("The falseTicket test'", async () => {
  await clickElement(page, `::-p-xpath(/html/body/nav/a[2])`);
  await clickElement(page, '::-p-aria([name="11:00"][role="link"])');
  await clickElement(
    page,
    `::-p-xpath(/html/body/main/section/div[2]/div[1]/div[2]/span[7])`
  );
  await clickElement(
    page,
    `::-p-xpath(/html/body/main/section/div[2]/div[1]/div[6]/span[3])`
  );
  await clickElement(
    page,
    `::-p-xpath(/html/body/main/section/div[2]/div[1]/div[2]/span[7])`
  );
  await clickElement(
    page,
    `::-p-xpath(/html/body/main/section/div[2]/div[1]/div[6]/span[3])`
  );
  expect('::-p-aria([name="ЗАБРОНИРОВАТЬ"][role="button"])', {
    visible: false,
  });
  expect("http://qamid.tmweb.ru/client/hall.php");
});
