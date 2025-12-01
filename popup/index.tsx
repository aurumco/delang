import "@/style.css" 
import { Button } from "@/components/ui/button"

function IndexPopup() {
  return (
    <div className="p-4 w-[300px] flex flex-col gap-4 bg-white">
      <h1 className="text-xl font-bold text-blue-600">Smart Translator</h1>
      <p className="text-sm text-gray-500">Welcome to your AI assistant.</p>
      <Button>Click Me (Shadcn)</Button>
    </div>
  )
}

export default IndexPopup