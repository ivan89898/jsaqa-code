const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { putText, getText, clickElement } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on cinema page", async function () {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`, {
    setTimeout: 20000,
  });
});
When("user click on date", async function () {
  return await clickElement(this.page, `::-p-xpath(/html/body/nav/a[2])`, {
    setTimeout: 20000,
  });
});
When("user click on time", function () {
  return clickElement(this.page, '::-p-aria([name="11:00"][role="link"])');
});
When("user click on place", function () {
  return clickElement(
    this.page,
    "::-p-xpath(/html/body/main/section/div[2]/div[1]/div[9]/span[7])"
  );
});
When("user click on забронировать", function () {
  return clickElement(
    this.page,
    '::-p-aria([name="ЗАБРОНИРОВАТЬ"][role="button"])'
  );
});
Then("user is on payment page", function () {
  return expect(`http://qamid.tmweb.ru/client/payment.php`);
});

Given("user is on cinema page 2 тест", async function () {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`, {
    setTimeout: 20000,
  });
});
When("user click on date 2 тест", async function () {
  return await clickElement(this.page, `::-p-xpath(/html/body/nav/a[2])`, {
    setTimeout: 20000,
  });
});
When("user click on time 2 тест", function () {
  return clickElement(this.page, '::-p-aria([name="11:00"][role="link"])');
});
When("user click on place1 2 тест", function () {
  return clickElement(
    this.page,
    `::-p-xpath(/html/body/main/section/div[2]/div[1]/div[2]/span[7])`
  );
});
When("user click on place2 2 тест", function () {
  return clickElement(
    this.page,
    `::-p-xpath(/html/body/main/section/div[2]/div[1]/div[6]/span[3])`
  );
});
When("user click on place3 2 тест", function () {
  return clickElement(
    this.page,
    `::-p-xpath(/html/body/main/section/div[2]/div[1]/div[1]/span[6])`
  );
});
When("user click on забронировать 2 тест", function () {
  return clickElement(
    this.page,
    '::-p-aria([name="ЗАБРОНИРОВАТЬ"][role="button"])'
  );
});
Then("user is on payment page 2 тест", function () {
  return expect(`http://qamid.tmweb.ru/client/payment.php`);
});

Given("user is on cinema page false test", async function () {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`, {
    setTimeout: 20000,
  });
});
When("user click on date false test", async function () {
  return await clickElement(this.page, `::-p-xpath(/html/body/nav/a[2])`, {
    setTimeout: 20000,
  });
});
When("user click on time false test", function () {
  return clickElement(this.page, '::-p-aria([name="11:00"][role="link"])');
});
When("user click on place1 false test", function () {
  return clickElement(
    this.page,
    `::-p-xpath(/html/body/main/section/div[2]/div[1]/div[2]/span[7])`
  );
});
When("user click on place2 false test", function () {
  return clickElement(
    this.page,
    `::-p-xpath(/html/body/main/section/div[2]/div[1]/div[6]/span[3])`
  );
});
When("user click again on place1 false test", function () {
  return clickElement(
    this.page,
    `::-p-xpath(/html/body/main/section/div[2]/div[1]/div[2]/span[7])`
  );
});
When("user click again on place2 false test", function () {
  return clickElement(
    this.page,
    `::-p-xpath(/html/body/main/section/div[2]/div[1]/div[6]/span[3])`
  );
});
Then("button {string} is invisible", function (string) {
  return expect('::-p-aria([name="ЗАБРОНИРОВАТЬ"][role="button"])', {
    visible: false,
  });
});
Then("user is still on ticket page", function () {
  return expect(`http://qamid.tmweb.ru/client/hall.php`);
});
