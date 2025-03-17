import { AINav } from "../components/ai-section/ai-nav.js"
import { AIChat } from "../components/ai-section/ai-chat.js"

export const AIChatpage = () => {
  return`
  <div class="ai-chat-wrapper">
    ${AINav()}
    ${AIChat()}
  </div>
  `
}