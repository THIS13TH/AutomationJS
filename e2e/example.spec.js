// @ts-check
import { test, expect } from '@playwright/test';

test.describe('test',() => {

  test('one', async({page}) =>{
      await page.goto('http://example.com');

    expect(await page.title()).toBe('Example Domain');
  })

})