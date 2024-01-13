/**
 * @jest-environment jsdom
 */

import popoverFunc from "./popover";

const content = `
<div class="popover hidden">
<div class="arrow"></div>
<h3 class="popover-header">Popover title</h3>
<div class="popover-body">And here's some amazing content. It's very engaging. Right?</div>
</div>
<button class="btn">Click to toggle popover</button>
`;

test("open popover", () => {
  document.body.innerHTML = content;

  const result = popoverFunc;

  const btn = document.querySelector(".btn");
  const popover = document.querySelector(".popover");

  btn.addEventListener("click", result);
  btn.click();

  expect(popover.classList.contains("hidden")).toBe(false);
});

test("close popover", () => {
  document.body.innerHTML = content;

  const result = popoverFunc;

  const btn = document.querySelector(".btn");
  const popover = document.querySelector(".popover");

  btn.addEventListener("click", result);
  btn.click();
  btn.click();

  expect(popover.classList.contains("hidden")).toBe(true);
});
