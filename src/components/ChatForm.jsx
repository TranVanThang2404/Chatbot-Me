import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // Thêm tin nhắn của user
    // const newHistory = [...chatHistory, { role: "user", text: userMessage }];
    // setChatHistory(newHistory);

    // // Hiển thị "Thinking..." trước khi bot trả lời
    // setTimeout(() => {
    //   setChatHistory((history) => [
    //     ...history,
    //     { role: "model", text: "Thinking..." }
    //   ]);

    //   // Gọi hàm generateBotResponse với lịch sử mới
    //   generateBotResponse(newHistory);
    // }, 600);
    setChatHistory((history) => [...history, { role: "user", text: userMessage}]);

    setTimeout(() => {
      setChatHistory((history) => [...history, { role: "model", text: "Thinking..."}]);
      generateBotResponse([...chatHistory, { role: "user", text: `Using the details provided above, please address this query: ${userMessage}`}]);
    },600);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

export default ChatForm;
