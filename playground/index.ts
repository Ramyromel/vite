import { describe, it, expect } from 'vitest';
import { createServer } from 'vite';
import { resolve } from 'path';
import { chromium } from 'playwright-chromium';

describe('Vite Playground Integration Tests', () => {
  let server;
  let browser;
  let page;

  beforeAll(async () => {
    server = await createServer({
      root: resolve(__dirname, 'playground'),
      server: {
        port: 3000,
      },
    });
    await server.listen();

    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    await server.close();
  });

  it('should load the playground index page', async () => {
    await page.goto('http://localhost:3000');
    const title = await page.title();
    expect(title).toBe('Vite Playground');
  });

  it('should display the correct heading', async () => {
    await page.goto('http://localhost:3000');
    const heading = await page.textContent('h1');
    expect(heading).toBe('Welcome to Vite Playground');
  });

  it('should have a working counter', async () => {
    await page.goto('http://localhost:3000');
    const counter = await page.$('#counter');
    const initialValue = await counter.textContent();
    expect(initialValue).toBe('0');

    await counter.click();
    const updatedValue = await counter.textContent();
    expect(updatedValue).toBe('1');
  });
});
