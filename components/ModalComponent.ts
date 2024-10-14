import insertMessageArrow from "~/assets/insert.svg";
import generateMessageIcon from "~/assets/generate.svg";
 export const createModal = () => {
    const modalHtml = `
      <div id="custom-modal" style="position: fixed; inset: 0; background: #0D0D1233; display: none; justify-content: center; align-items: center; z-index: 4000;">
        <div id="modal-content" style="background: white; border-radius: 8px; width: 100%; max-width: 570px; padding: 20px;">
          <div id="messages" style="margin-top: 10px; max-height: 200px; overflow-y: auto; padding: 10px; display: flex; flex-direction: column;"></div>
          <div style="margin-bottom: 10px;">
            <input id="input-text" type="text" placeholder="Your prompt" style="width: 100%; padding:8px; border: 1px solid #C1C7D0; border-radius: 8px; height:40px; outline:none;"/>
          </div>
          <div style="text-align: right; margin-top: 12px;">
            <button id="insert-btn" style="background: #fff; color: #666D80; padding: 8px 16px; border: 2px solid #666D80; border-radius: 4px; cursor: pointer; display: none; margin-right: 10px;">
            <img src="${insertMessageArrow}" alt="Insert" style="vertical-align: middle; margin-right: 5px; width: 14px; height: 14px;"> 
              <b>Insert</b>
            </button>
            <button id="generate-btn" style="background: #007bff; color: white; padding: 8px 16px; border: 2px solid #007bff; border-radius: 4px; cursor: pointer;">
             <img src="${generateMessageIcon}" alt="Generate" style="vertical-align: middle; margin-right: 5px; width: 14px; height: 14px"> 
              <b>Generate</b>
            </button>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML("beforeend", modalHtml);
    return {
      modal: document.getElementById("custom-modal") as HTMLDivElement,
      modalContent: document.getElementById("modal-content") as HTMLDivElement,
      generateBtn: document.getElementById("generate-btn") as HTMLButtonElement,
      insertBtn: document.getElementById("insert-btn") as HTMLButtonElement,
      inputText: document.getElementById("input-text") as HTMLInputElement,
      messagesDiv: document.getElementById("messages") as HTMLDivElement,
    };
  };
  