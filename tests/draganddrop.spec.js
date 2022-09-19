import { test, expect } from "@playwright/test";

test("can drag and drop", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const frameLocator = page.frameLocator("[title=app-frame]");

  const sourceLocator = frameLocator.locator(".source");
  const targetLocator = frameLocator.locator(".target");

  expect(await targetLocator.innerHTML()).toBe("drop here");

  const sourceBoundingBox = await sourceLocator.boundingBox();
  const targetBoundingBox = await targetLocator.boundingBox();

  await page.mouse.move(
    sourceBoundingBox.x + sourceBoundingBox.width / 2,
    sourceBoundingBox.y + sourceBoundingBox.height / 2,
    { steps: 5 }
  );
  await page.mouse.down();
  await page.mouse.move(
    targetBoundingBox.x + targetBoundingBox.width / 2,
    targetBoundingBox.y + targetBoundingBox.height / 2,
    { steps: 5 }
  );
  await page.mouse.up();

  expect(await targetLocator.innerHTML()).toBe("dropped!");
});
