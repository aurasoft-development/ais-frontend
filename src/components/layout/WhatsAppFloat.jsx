import { MessageCircle } from "lucide-react";
import { generalWhatsAppLink } from "@/data/products";
const WhatsAppFloat = () => {
    return (<a href={generalWhatsAppLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 group" aria-label="Contact on WhatsApp">
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-whatsapp rounded-full animate-ping opacity-30"/>
        
        {/* Button */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-whatsapp rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground"/>
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-card-foreground px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          <span className="text-sm font-medium">Chat with us!</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-card rotate-45"/>
        </div>
      </div>
    </a>);
};
export default WhatsAppFloat;
