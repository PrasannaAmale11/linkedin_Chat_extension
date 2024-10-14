import editIcon from "~/assets/edit.svg";

export const createEditIcon = (parentElement: HTMLElement) => {
  if (!parentElement.querySelector(".edit-icon")) {
    const icon = document.createElement("img");
    icon.className = "edit-icon";
    icon.src = editIcon;
    icon.alt = "Edit Icon";
    icon.style.position = "absolute";
    icon.style.bottom = "5px";
    icon.style.right = "5px";
    icon.style.width = "32px";
    icon.style.height = "32px";
    icon.style.cursor = "pointer";
    icon.style.zIndex = "1000";
    parentElement.appendChild(icon);
  }
};

export const removeEditIcon = (parentElement: HTMLElement | null) => {
  const icon = parentElement?.querySelector(".edit-icon");
  if (icon) {
    icon.remove();
  }
};
