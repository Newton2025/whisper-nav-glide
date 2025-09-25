// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground leading-tight">
            Hello! How can I{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-bounce-in">
              help you
            </span>{" "}
            today?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm here to assist you with any questions or tasks you might have. Let's get started!
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mt-12">
          {[
            {
              icon: "💡",
              title: "Get creative help",
              description: "Brainstorm ideas, write content, or solve creative challenges",
              gradient: "from-purple-500/10 to-pink-500/10",
              border: "border-purple-200/50",
              hover: "hover:border-purple-400/50 hover:shadow-purple-500/20",
            },
            {
              icon: "🔧",
              title: "Technical assistance", 
              description: "Get help with coding, troubleshooting, or technical questions",
              gradient: "from-blue-500/10 to-cyan-500/10",
              border: "border-blue-200/50",
              hover: "hover:border-blue-400/50 hover:shadow-blue-500/20",
            },
            {
              icon: "📚",
              title: "Learn something new",
              description: "Explore topics, get explanations, or dive deep into subjects",
              gradient: "from-green-500/10 to-emerald-500/10", 
              border: "border-green-200/50",
              hover: "hover:border-green-400/50 hover:shadow-green-500/20",
            },
            {
              icon: "✨",
              title: "Just chat",
              description: "Have a casual conversation or get advice on various topics",
              gradient: "from-orange-500/10 to-yellow-500/10",
              border: "border-orange-200/50", 
              hover: "hover:border-orange-400/50 hover:shadow-orange-500/20",
            },
          ].map((item, index) => (
            <div 
              key={item.title}
              className={`p-6 rounded-2xl border ${item.border} bg-gradient-to-br ${item.gradient} ${item.hover} transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg group animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-3 text-lg group-hover:text-brand-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
