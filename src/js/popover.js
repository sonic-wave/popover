export default function popoverFunc() {
  const popoverExist = document.querySelector(".popover");

  if (popoverExist) {
    popoverExist.classList.toggle("hidden");
    setTimeout(() => popoverExist.remove(), 1);

    return;
  }
  const popover = document.createElement("div");
  popover.className = "popover";

  const arrow = document.createElement("div");
  arrow.className = "arrow";

  const popoverHeader = document.createElement("h3");
  popoverHeader.className = "popover-header";
  popoverHeader.textContent = "Popover title";

  const popoverBody = document.createElement("div");
  popoverBody.className = "popover-body";
  popoverBody.textContent = `And here's some amazing content. It's very engaging. Right?`;

  popover.appendChild(arrow);
  popover.appendChild(popoverHeader);
  popover.appendChild(popoverBody);

  const { left, top } = this.getBoundingClientRect();

  setTimeout(() => {
    popover.style.top = top - popover.offsetHeight - arrow.offsetHeight + "px";
    popover.style.left =
      left + this.offsetWidth / 2 - popover.offsetWidth / 2 + "px";
  }, 1);

  this.before(popover);
}
