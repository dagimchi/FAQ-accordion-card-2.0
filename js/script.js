"use strict";

const titles = document.querySelectorAll(".title-row");

titles.forEach((title) => {
  title.addEventListener("click", () => {
    if (title.classList.contains("is-open")) {
      title.classList.remove("is-open");
    } else {
      const titlesWithIsOpen = document.querySelectorAll(".is-open");
      titlesWithIsOpen.forEach((titleWithIsOpen) => {
        titleWithIsOpen.classList.remove("is-open");
      });
      title.classList.add("is-open");
      let panel = document.querySelector(".content");
    }
  });
});
