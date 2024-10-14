import { createEditIcon, removeEditIcon } from "./IconComponent";
import { generateMessage } from "./MessageGenerator";

export const addEventHandlers = (elements: {
  modal: HTMLDivElement;
  modalContent: HTMLDivElement;
  generateBtn: HTMLButtonElement;
  insertBtn: HTMLButtonElement;
  inputText: HTMLInputElement;
  messagesDiv: HTMLDivElement;
}) => {
  let parentElement: HTMLElement | null = null;
  let lastGeneratedMessage = "";

  // Event listener for input focus
  elements.inputText.addEventListener("focus", () => {
    if (parentElement) {
      createEditIcon(parentElement);
    }
  });

  // Event listener for input blur
  elements.inputText.addEventListener("blur", () => {
    removeEditIcon(parentElement);
  });

  // Event listener for document click
  document.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    // Check if the click is on a LinkedIn message input or editable content
    if (
      target.matches(".msg-form__contenteditable") ||
      target.matches(".msg-form__contenteditable > p")
    ) {
      parentElement =
        target.closest(".msg-form__container") ||
        target.closest(".msg-form__contenteditable > p");
      if (parentElement) {
        createEditIcon(parentElement);
      }
    } else if (
      elements.modal.style.display === "flex" &&
      !elements.modalContent.contains(target) &&
      !target.classList.contains("edit-icon")
    ) {
      // Close the modal if clicking outside of it
      elements.modal.style.display = "none";
      elements.generateBtn.textContent = "Generate";
      elements.insertBtn.style.display = "none";
    } else {
      // Remove the edit icon if clicking outside
      removeEditIcon(parentElement);
    }
  });

  // Event listener for the edit icon
  document.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("edit-icon")) {
      // Show the modal when the edit icon is clicked
      elements.modal.style.display = "flex";
    }
  });

  // Event listener for the generate button
  elements.generateBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const inputValue = elements.inputText.value.trim();
    if (!inputValue) return;

    // Add user message to the modal
    const userMessageDiv = document.createElement("div");
    userMessageDiv.textContent = inputValue;
    Object.assign(userMessageDiv.style, {
      backgroundColor: "#DFE1E7",
      color: "#666D80",
      borderRadius: "12px",
      padding: "10px",
      marginBottom: "5px",
      textAlign: "right",
      maxWidth: "80%",
      alignSelf: "flex-end",
      marginLeft: "auto",
    });
    elements.messagesDiv.appendChild(userMessageDiv);

    // Update button styles and disable state
    elements.generateBtn.disabled = true;
    elements.generateBtn.textContent = "Loading...";
    elements.generateBtn.style.backgroundColor = "#666D80";

    // Simulate message generation
    setTimeout(() => {
      lastGeneratedMessage = generateMessage();
      const generatedMessageDiv = document.createElement("div");
      generatedMessageDiv.textContent = lastGeneratedMessage;
      Object.assign(generatedMessageDiv.style, {
        backgroundColor: "#DBEAFE",
        color: "#666D80",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "5px",
        textAlign: "left",
        maxWidth: "80%",
        alignSelf: "flex-start",
        marginRight: "auto",
      });

      elements.messagesDiv.appendChild(generatedMessageDiv);
      elements.messagesDiv.scrollTop = elements.messagesDiv.scrollHeight;

      elements.generateBtn.disabled = false;

      // Update button to show Regenerate with logo
      elements.generateBtn.style.backgroundColor = "#007bff";
      elements.generateBtn.style.color = "white";
      elements.generateBtn.innerHTML = `<b>Regenerate</b>`;

      elements.inputText.value = "";
      elements.insertBtn.style.display = "inline-block";
    }, 500);
  });

  // Event listener for the insert button
  elements.insertBtn.addEventListener("click", () => {
    if (lastGeneratedMessage && parentElement) {
      const messageParagraph = document.createElement("p");
      messageParagraph.textContent = lastGeneratedMessage;
      parentElement.appendChild(messageParagraph);
      elements.modal.style.display = "none";
    }
  });
};
