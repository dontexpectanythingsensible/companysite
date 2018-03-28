process.env.NODE_ENV = 'test';

const path = require('path');
const connect = require('connect');
const serveStatic = require('serve-static');
const Browser = require('zombie');
const assert = require('assert');

connect().use(serveStatic(path.join(__dirname, '../../'))).listen(8080);

describe('home page', () => {
    const browser = new Browser({ site: 'http://localhost:8080' });
    
    before(() => {
        return browser.visit('/index.html');
    });

    it('should show a heading', () => {
        browser.assert.success();
        browser.assert.text('.title', 'Don\'t Expect Anything Sensible');
    });

    it('should have a link to the game', () => {
        browser.assert.element('.game-link');
    });

    it('should have a link to company twitter', () => {
        browser.assert.text('.nav-link--company', 'Twitter');
    });
    
    it('should have a link to personal twitter', () => {
        browser.assert.text('.nav-link--personal', 'James');
    });

    it('should have a signup form', () => {
        browser.assert.element('#mc-embedded-subscribe-form');
        browser.assert.element('#mce-EMAIL');
        browser.assert.element('#mc-embedded-subscribe');
    });
});