import { useParams } from "react-router-dom"
import { MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

const Chat = () => {
  const { id } = useParams()

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      {/* Chat Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-foreground">
          Chat {id ? `#${id}` : 'New'}
        </h2>
        <p className="text-muted-foreground">Start a conversation with AI</p>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 mb-6">
        <Card className="h-full min-h-96 p-6 bg-card border-border">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              Ready to chat
            </h3>
            <p className="text-muted-foreground max-w-md">
              Start typing your message below to begin a conversation with the AI assistant.
            </p>
          </div>
        </Card>
      </div>

      {/* Chat Input */}
      <div className="flex gap-3">
        <Input 
          placeholder="Type your message here..."
          className="flex-1 h-12 bg-background border-input"
        />
        <Button size="lg" className="px-6">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default Chat