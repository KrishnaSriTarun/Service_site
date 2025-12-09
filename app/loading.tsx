export default function Loading() {
      return (
            <div className="flex items-center justify-center min-h-screen bg-background">
                  <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                        <p className="text-muted-foreground animate-pulse">Loading...</p>
                  </div>
            </div>
      );
}
