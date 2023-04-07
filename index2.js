// import puppeteer เข้ามา
const puppeteer = require('puppeteer');

const test = async () => {
    // เปิด Browser ขึ้นมา
    const browser = await puppeteer.launch({ headless: false });
    // เปิด page ขึ้นมา
    const page = await browser.newPage();
    // เข้าเว็บซักเว็บนึง
    await page.goto('https://shopee.co.th/');

    let searchResultSelector = ".language-selection__list > .language-selection__list-item:nth-child(1) > button";
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);

    await page.mouse.click(10, 10);

    searchResultSelector = "header  .navbar__links .navbar__link--login";
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);
    //  searchResultSelector = ".home-popup__close-area";
    // // await page.waitForSelector(searchResultSelector);
    // // await page.click(searchResultSelector);
    // await page.evaluate(() => {
    //     document.querySelector(searchResultSelector).click();
    //   });
    // const f = await page.$('.form-select')
    // await f.select("2")k
    // await page.select('#cars', 'Audi');

    // const n = await page.$("table > tbody > .trline:nth-child(2) > .em")
    // const t = await (await n.getProperty('textContent')).jsonValue()

    // console.log(t);
    // const searchResultSelector = "[track='listportal']";
    // await page.waitForSelector(searchResultSelector);
    // await page.click(searchResultSelector);

    // ถ้าจะกรอกอะไรก่อนหรือ กดอะไรก่อนก็ทำตรงนี้
    // page.focus('#search')
    // page.type('Hello')
    // page.click('#search_btn')

    // const dimensions = await page.evaluate(() => {
    //     // code ส่วนนี้จะถูกรันบนหน้าเพจ เหมือนเราไปพิมพ์ใน console 
    //     console.log(document.documentElement.clientWidth);
    //     return {
    //         width: document.documentElement.clientWidth,
    //         height: document.documentElement.clientHeight,
    //         deviceScaleFactor: window.devicePixelRatio
    //     };
    // });
    // ปิด Browser 
    //   await browser.close();
};

test();

module.exports = { test };