export const generateMessage = () => {
    const messages = [
      "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.",
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };
  