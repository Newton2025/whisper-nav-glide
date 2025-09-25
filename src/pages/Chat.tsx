import { useParams } from "react-router-dom"
import { MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

const Chat = () => {
  const { id } = useParams()

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto px-4">
      {/* Chat Header */}
      <div className="mb-8 animate-fade-in">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Chat {id ? `#${id}` : 'New'}
        </h2>
        <p className="text-muted-foreground text-lg">Start a conversation with AI</p>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 mb-6">
        <Card className="h-full min-h-96 p-8 bg-gradient-subtle border-border/50 shadow-soft rounded-2xl animate-scale-in">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="relative mb-6">
              <MessageSquare className="h-16 w-16 text-brand-primary animate-bounce-in" />
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-primary rounded-full animate-glow-pulse"></div>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-3 animate-fade-in">
              Ready to chat
            </h3>
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed animate-fade-in">
              Start typing your message below to begin a conversation with the AI assistant.
            </p>
          </div>
        </Card>
      </div>

      {/* Chat Input */}
      <div className="flex gap-4 animate-slide-up">
        <Input 
          placeholder="Type your message here..."
          className="flex-1 h-14 bg-background border-input rounded-2xl px-6 text-lg placeholder:text-muted-foreground/60 focus:shadow-hover focus:border-brand-primary/50 transition-all duration-300"
        />
        <Button 
          size="lg" 
          className="px-8 h-14 bg-gradient-primary hover:shadow-hover rounded-2xl font-semibold transition-all duration-300 hover:scale-105 group"
        >
          <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  )
}

export default Chat