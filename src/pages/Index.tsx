import { useIsMobile } from "@/hooks/use-mobile"

const Index = () => {
  const isMobile = useIsMobile()

  // For mobile, content is handled in Layout component
  if (isMobile) {
    return null
  }

  // Desktop content
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="max-w-4xl mx-auto">
        <span className="text-4xl font-bold text-foreground">TALK</span>
      </div>
    </div>
  )
}

export default Index;
