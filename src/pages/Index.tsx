// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold text-foreground">
            Hello! How can I help you today?
          </h1>
          <p className="text-lg text-muted-foreground">
            I'm here to assist you with any questions or tasks you might have.
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto mt-8">
          <div className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
            <h3 className="font-medium text-foreground mb-2">💡 Get creative help</h3>
            <p className="text-sm text-muted-foreground">
              Brainstorm ideas, write content, or solve creative challenges
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
            <h3 className="font-medium text-foreground mb-2">🔧 Technical assistance</h3>
            <p className="text-sm text-muted-foreground">
              Get help with coding, troubleshooting, or technical questions
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
            <h3 className="font-medium text-foreground mb-2">📚 Learn something new</h3>
            <p className="text-sm text-muted-foreground">
              Explore topics, get explanations, or dive deep into subjects
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
            <h3 className="font-medium text-foreground mb-2">✨ Just chat</h3>
            <p className="text-sm text-muted-foreground">
              Have a casual conversation or get advice on various topics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
