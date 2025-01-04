document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "PrintScreen") {
      e.preventDefault();
    }
  });

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
});

document.addEventListener("keydown", (e) => {
  // F12 key
  if (e.key === "F12") {
    e.preventDefault();
  }

  // Ctrl+Shift+I or Cmd+Option+I
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "I") {
    e.preventDefault();
  }

  // Ctrl+Shift+C or Cmd+Option+C
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "C") {
    e.preventDefault();
  }
});
