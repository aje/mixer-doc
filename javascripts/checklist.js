document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = [...document.querySelectorAll(".task-list-item input[type='checkbox']")];
  if (checkboxes.length === 0) {
    return;
  }

  const summary = document.createElement("p");
  summary.className = "checklist-summary";
  const isChinese = window.location.pathname.includes("/zh/");
  const updateSummary = () => {
    const done = checkboxes.filter((checkbox) => checkbox.checked).length;
    summary.textContent = isChinese
      ? `已完成：${done}/${checkboxes.length}`
      : `Done: ${done}/${checkboxes.length}`;
  };

  checkboxes[0].closest("ul").before(summary);

  checkboxes.forEach((checkbox, index) => {
    checkbox.disabled = false;

    const key = `${window.location.pathname}:checklist:${index}`;
    const saved = window.localStorage.getItem(key);
    if (saved !== null) {
      checkbox.checked = saved === "true";
    }

    checkbox.addEventListener("change", () => {
      window.localStorage.setItem(key, checkbox.checked);
      updateSummary();
    });
  });

  updateSummary();
});
