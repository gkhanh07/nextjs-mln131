'use client'
import { useState, useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import { format } from "date-fns";
const { GoogleGenerativeAI } = require("@google/generative-ai");

interface Message {
    id: number;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

const ChatBox = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>("");
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const genAI = new GoogleGenerativeAI("AIzaSyB3v0Eus3IMmB36kopqYZSfOVV706PCQRI");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    useEffect(() => {
        if (messages.length > 0) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        // Tạo tin nhắn người dùng
        const userMessage: Message = {
            id: Date.now(),
            text: input.trim(),
            isUser: true,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        try {
            // Gửi đến AI và nhận phản hồi
            const result = await model.generateContent(input);
            const responseText = result.response.text();

            // Tạo tin nhắn từ AI
            const aiMessage: Message = {
                id: Date.now() + 1,
                text: responseText || "Xin lỗi, tôi không thể trả lời ngay bây giờ.",
                isUser: false,
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
            console.error("Lỗi khi gửi tin nhắn:", error);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="flex flex-col w-1/2 h-1/2 bg-white shadow-lg rounded-lg overflow-hidden mx-auto mt-10">
            {/* Tiêu đề "Hỏi cũng AI" */}
            <div className="bg-white-500 text-black text-center py-2 text-lg font-semibold">
                Chat with AI
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`p-2 max-w-xs rounded-lg ${message.isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                        >
                            <p>{message.text}</p>
                            <span className="block text-xs text-gray-500 mt-1">
                                {format(message.timestamp, "HH:mm")}
                            </span>
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="p-2 bg-gray-200 text-black rounded-lg">...</div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="p-3 border-t border-gray-300 flex items-center">
                <input
                    type="text"
                    className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            sendMessage();
                        }
                    }}
                />
                <button
                    className="ml-2 p-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
                    onClick={sendMessage}
                    disabled={!input.trim()}
                >
                    <IoSend size={20} />
                </button>
            </div>
        </div>
    );
};

export default ChatBox;
