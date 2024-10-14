import editIcon from "~/assets/edit.svg";
import insertIcon from "~/assets/insert.svg";
import genIcon from "~/assets/generate.svg";
import reGenIcon from "~/assets/regenerate.svg";
import { createModal } from "@/components/ModalComponent";
import { addEventHandlers } from "@/components/EventHandler";

export default defineContentScript({
  matches: ["*://*.linkedin.com/*"],
  main() {
    const elements = createModal();
    addEventHandlers(elements);
  },
});
