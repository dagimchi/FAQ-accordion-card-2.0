"use strict";

const titles = document.querySelectorAll(".title-row");

// ITERATE THROUGH THE NODE AND APPLY A CLICK EVENT
titles.forEach((title) => {
  title.addEventListener("click", () => {
    // IF PANEL IS ALREADY OPEN WHEN CLICKED, CLOSE SAID PANEL
    if (title.classList.contains("is-open")) {
      title.classList.remove("is-open");
    } else {
      // IF PANEL IS NOT OPEN WHEN CLICKED, OPEN IT AND CLOSE ANY OTHER OPEN PANELS
      const titlesWithIsOpen = document.querySelectorAll(".is-open");
      titlesWithIsOpen.forEach((titleWithIsOpen) => {
        titleWithIsOpen.classList.remove("is-open");
      });
      title.classList.add("is-open");
    }
  });
});
