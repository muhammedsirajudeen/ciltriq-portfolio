import { WhatsappLogo } from "@phosphor-icons/react";

const WhatsAppFab = () => {
  return (
    <a
      href="https://wa.me/918848300000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-secondary/30 animate-ping" />
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-secondary shadow-lg transition-transform duration-200 group-hover:scale-110">
          <WhatsappLogo size={28} weight="fill" className="text-white" />
        </div>
      </div>
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-lg bg-ctext-primary text-white text-xs font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us
      </div>
    </a>
  );
};

export default WhatsAppFab;
