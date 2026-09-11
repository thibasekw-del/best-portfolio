const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs = require('node:fs/promises');
const assert = require('node:assert/strict');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const errors = [];
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  const base = process.env.TEST_URL || 'http://127.0.0.1:3000';
  const results = [];
  for (const width of [1440, 1024, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 960 });
    const response = await page.goto(base, { waitUntil: 'networkidle' });
    assert.equal(response.status(), 200);
    await page.evaluate(() => document.fonts.ready);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    assert.equal(overflow, false, 'Horizontal overflow at ' + width);
    assert.equal(await page.locator('h1').innerText(), 'Hi, I’m BEST.');
    assert.equal(await page.locator('.project-card').count(), 4);
    assert.equal(await page.locator('#about, #skills, #projects, #education, #contact').count(), 5);
    if (width === 1440 || width === 390) await page.screenshot({ path: 'artifacts/home-' + width + '.png', fullPage: true });
    if (width === 390 || width === 1440) await page.screenshot({ path: 'artifacts/viewport-' + width + '.png' });
    results.push({ width, horizontalOverflow: overflow, status: response.status() });
  }
  await page.setViewportSize({ width: 390, height: 844 });
  const toggle = page.getByRole('button', { name: 'Open navigation' });
  await toggle.click();
  await page.getByRole('navigation').getByRole('link', { name: 'Projects' }).click();
  await page.waitForURL('**/#projects');
  assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
  await toggle.click();
  await page.keyboard.press('Escape');
  assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
  await page.getByRole('link', { name: 'Case Study : Customer Segmentation' }).click();
  await page.waitForURL('**/projects/customer-segmentation/');
  assert.match(await page.locator('h1').innerText(), /Customer Segmentation/);
  assert.equal(await page.locator('.case-notice').count(), 1);
  await page.screenshot({ path: 'artifacts/case-study-mobile.png', fullPage: true });
  await page.getByRole('link', { name: 'Back to Projects' }).first().click();
  await page.waitForURL('**/#projects');
  for (const slug of ['customer-segmentation','business-dashboard','dormitory-management','next-project']) {
    const response = await page.goto(base + '/projects/' + slug + '/', { waitUntil: 'networkidle' });
    assert.equal(response.status(), 200);
    assert.equal(await page.locator('.case-body section').count(), 4);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    results.push({ route: slug, status: 200 });
  }
  await page.goto(base);
  assert.equal(await page.locator('#contact a').filter({ hasText: 'GitHub' }).getAttribute('href'), 'https://github.com/thibasekw-del');
  assert.equal(await page.locator('#contact a').filter({ hasText: 'LinkedIn' }).getAttribute('href'), 'https://www.linkedin.com/in/thibase-kanwongsa-928218384/');
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.reload();
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Skip to content');
  await page.keyboard.press('Enter');
  await page.addStyleTag({ content: 'html { font-size: 200% !important }' });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'Overflow at 200% root font size');
  const notFound = await page.goto(base + '/this-page-does-not-exist/');
  assert.equal(notFound.status(), 404);
  assert.match(await page.locator('h1').innerText(), /get you back/);
  assert.deepEqual(errors, []);
  await fs.writeFile('artifacts/browser-checks.json', JSON.stringify({ results, mobileMenu: 'passed', caseNavigation: 'passed', socialLinks: 'passed', keyboardSkipLink: 'passed', enlargedText: 'passed', notFound: 'passed', pageErrors: errors }, null, 2));
  console.log(JSON.stringify({ passed: true, results, pageErrors: errors }));
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });

