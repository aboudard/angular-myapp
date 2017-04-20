import { browser, element, by } from 'protractor';

export class MyAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ma-root h1')).getText();
  }
}