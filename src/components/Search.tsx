
import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, SendIcon, User, Bot, Edit3, Trash2, PlusCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedTransition from './AnimatedTransition';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from '@/components/ui/separator';

// Type definitions for our chat structure
interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface Chat {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

export const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [isEditingTitle, setIsEditingTitle] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [showSidebar, setShowSidebar] = useState(true);
  
  // Initialize with a sample chat on first render
  useEffect(() => {
    if (chats.length === 0) {
      const newChat: Chat = {
        id: generateId(),
        title: 'New Chat',
        messages: [],
        createdAt: new Date(),
        updatedAt: new Date()
      };
      setChats([newChat]);
      setActiveChat(newChat);
    }
  }, []);

  // Generate a random ID for chats and messages
  const generateId = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  // Create a new chat
  const createNewChat = () => {
    const newChat: Chat = {
      id: generateId(),
      title: 'New Chat',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    setChats([newChat, ...chats]);
    setActiveChat(newChat);
  };

  // Delete a chat
  const deleteChat = (chatId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedChats = chats.filter(chat => chat.id !== chatId);
    setChats(updatedChats);
    
    // If we deleted the active chat, set the first available chat as active
    if (activeChat && activeChat.id === chatId) {
      setActiveChat(updatedChats.length > 0 ? updatedChats[0] : null);
    }
    
    // If no chats left, create a new one
    if (updatedChats.length === 0) {
      createNewChat();
    }
  };

  // Edit chat title
  const startEditingTitle = (chatId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const chat = chats.find(c => c.id === chatId);
    if (chat) {
      setIsEditingTitle(chatId);
      setEditTitle(chat.title);
    }
  };

  const saveTitle = (chatId: string) => {
    const updatedChats = chats.map(chat => {
      if (chat.id === chatId) {
        return { ...chat, title: editTitle || 'Untitled Chat' };
      }
      return chat;
    });
    setChats(updatedChats);
    setIsEditingTitle(null);
  };

  // Handle message submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && activeChat) {
      // Create user message
      const userMessage: ChatMessage = {
        id: generateId(),
        type: 'user',
        content: searchQuery,
        timestamp: new Date()
      };
      
      // Update chat with new message
      const updatedChats = chats.map(chat => {
        if (chat.id === activeChat.id) {
          // If this is the first message, update the chat title
          let updatedTitle = chat.title;
          if (chat.messages.length === 0) {
            updatedTitle = searchQuery.length > 25 
              ? `${searchQuery.substring(0, 22)}...` 
              : searchQuery;
          }
          
          return {
            ...chat,
            title: updatedTitle,
            messages: [...chat.messages, userMessage],
            updatedAt: new Date()
          };
        }
        return chat;
      });
      
      setChats(updatedChats);
      setSearchQuery('');
      
      // Find the updated active chat
      const updatedActiveChat = updatedChats.find(chat => chat.id === activeChat.id);
      if (updatedActiveChat) {
        setActiveChat(updatedActiveChat);
        
        // Add AI response after a short delay
        setTimeout(() => {
          const aiMessage: ChatMessage = {
            id: generateId(),
            type: 'assistant',
            content: `Based on your search for "${userMessage.content}", I found several relevant notes in your second brain. Would you like me to summarize the key insights?`,
            timestamp: new Date()
          };
          
          const updatedChatsWithAi = updatedChats.map(chat => {
            if (chat.id === activeChat.id) {
              return {
                ...chat,
                messages: [...chat.messages, aiMessage],
                updatedAt: new Date()
              };
            }
            return chat;
          });
          
          setChats(updatedChatsWithAi);
          const updatedActiveChatWithAi = updatedChatsWithAi.find(chat => chat.id === activeChat.id);
          if (updatedActiveChatWithAi) {
            setActiveChat(updatedActiveChatWithAi);
          }
        }, 800);
      }
    }
  };

  // Format date for display
  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const isToday = date.toDateString() === today.toDateString();
    const isYesterday = date.toDateString() === yesterday.toDateString();
    
    if (isToday) {
      return 'Today';
    } else if (isYesterday) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  // Group chats by date
  const groupChatsByDate = () => {
    const grouped: Record<string, Chat[]> = {};
    
    chats.forEach(chat => {
      const dateKey = formatDate(new Date(chat.createdAt));
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(chat);
    });
    
    return Object.entries(grouped);
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="w-full h-[calc(100vh-120px)] flex">
      {/* Sidebar with chat history */}
      <div className={cn(
        "h-full bg-muted/30 border-r transition-all duration-300",
        showSidebar ? "w-64" : "w-0 overflow-hidden"
      )}>
        <div className="h-full flex flex-col">
          <div className="p-3">
            <Button 
              onClick={createNewChat}
              className="w-full justify-start gap-2"
              variant="outline"
            >
              <PlusCircle size={16} />
              New Chat
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2 space-y-4">
            {groupChatsByDate().map(([dateGroup, dateChats]) => (
              <div key={dateGroup} className="space-y-2">
                <h3 className="text-xs font-medium text-muted-foreground px-2">{dateGroup}</h3>
                
                {dateChats.map(chat => (
                  <div 
                    key={chat.id}
                    onClick={() => setActiveChat(chat)}
                    className={cn(
                      "p-2 rounded-lg flex items-center gap-2 cursor-pointer group",
                      activeChat?.id === chat.id 
                        ? "bg-primary/10 text-primary" 
                        : "hover:bg-muted/50"
                    )}
                  >
                    <SearchIcon size={16} className="flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      {isEditingTitle === chat.id ? (
                        <form 
                          onSubmit={(e) => {
                            e.preventDefault();
                            saveTitle(chat.id);
                          }}
                        >
                          <Input
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            autoFocus
                            onBlur={() => saveTitle(chat.id)}
                            onClick={(e) => e.stopPropagation()}
                            className="h-6 py-0 text-sm"
                          />
                        </form>
                      ) : (
                        <p className="text-sm truncate">{chat.title}</p>
                      )}
                    </div>
                    <div className={cn(
                      "flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
                      activeChat?.id === chat.id ? "opacity-100" : ""
                    )}>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="h-7 w-7" 
                        onClick={(e) => startEditingTitle(chat.id, e)}
                      >
                        <Edit3 size={14} />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="h-7 w-7" 
                        onClick={(e) => deleteChat(chat.id, e)}
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Header with toggle */}
        <div className="border-b py-2 px-4 flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="mr-2"
          >
            <SearchIcon size={18} />
          </Button>
          <h2 className="font-medium">
            {activeChat?.title || 'Universal Search'}
          </h2>
        </div>
        
        {/* Chat messages area */}
        <div className="flex-1 overflow-y-auto p-4">
          <AnimatedTransition
            show={activeChat?.messages.length === 0}
            animation="fade"
            className="h-full flex items-center justify-center"
          >
            <div className="text-center space-y-2 max-w-md">
              <h3 className="text-xl font-medium">Search Your Second Brain</h3>
              <p className="text-muted-foreground">
                Ask questions to search across your notes, documents, and knowledge base.
              </p>
            </div>
          </AnimatedTransition>
          
          <AnimatedTransition
            show={activeChat?.messages.length > 0}
            animation="fade"
            className="space-y-4"
          >
            {activeChat?.messages.map((message) => (
              <div 
                key={message.id}
                className={cn(
                  "flex gap-3 p-4 rounded-lg",
                  message.type === 'user' 
                    ? "bg-primary/10 ml-auto max-w-[80%]" 
                    : "bg-muted/10 mr-auto max-w-[80%]"
                )}
              >
                <div className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                  message.type === 'user' ? "bg-primary/20" : "bg-secondary/20"
                )}>
                  {message.type === 'user' ? (
                    <User size={16} className="text-primary" />
                  ) : (
                    <Bot size={16} className="text-secondary" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(message.timestamp).toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            ))}
            
            {activeChat?.messages.length > 0 && activeChat.messages[activeChat.messages.length - 1].type === 'assistant' && (
              <div className="p-4 glass-panel rounded-xl space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Suggested Results</h3>
                <div className="space-y-3">
                  {['Artificial Intelligence', 'Machine Learning', 'Neural Networks'].map((result, index) => (
                    <div 
                      key={index}
                      className="p-3 hover:bg-primary/5 rounded-lg transition-all duration-200 cursor-pointer"
                    >
                      <h4 className="font-medium">{result}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Related to your search query
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </AnimatedTransition>
        </div>
        
        {/* Input area */}
        <div className="p-4 border-t">
          <form 
            onSubmit={handleSubmit}
            className="relative"
          >
            <div className={cn(
              "w-full glass-panel flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300",
              isFocused ? "ring-2 ring-primary/30" : ""
            )}>
              <SearchIcon 
                size={20} 
                className={cn(
                  "text-muted-foreground transition-all duration-300",
                  isFocused ? "text-primary" : ""
                )} 
              />
              <input
                type="text"
                placeholder="Ask your second brain anything..."
                className="w-full bg-transparent border-none outline-none focus:outline-none text-foreground"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <Button 
                type="submit"
                size="icon"
                variant="ghost"
                className={cn(
                  "text-muted-foreground transition-all duration-300",
                  searchQuery.trim() ? "opacity-100" : "opacity-50",
                  isFocused && searchQuery.trim() ? "text-primary" : ""
                )}
                disabled={!searchQuery.trim()}
              >
                <SendIcon size={18} />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
