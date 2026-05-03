const WhatsappIcon = ({ size = 28, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.031 0C5.395 0 .006 5.385.003 12.022c-.001 2.122.553 4.195 1.606 6.02L.053 24l6.104-1.601c1.745.961 3.738 1.468 5.871 1.469h.004c6.634 0 12.025-5.388 12.028-12.026A12.022 12.022 0 0 0 12.031 0zm0 21.848h-.003c-1.794-.001-3.551-.482-5.093-1.396l-.365-.216-3.784.992.984-3.69-.237-.378c-1.002-1.597-1.53-3.447-1.529-5.352.002-5.541 4.512-10.05 10.059-10.05a10.033 10.033 0 0 1 7.108 2.946 10.027 10.027 0 0 1 2.941 7.112c-.003 5.541-4.512 10.05-10.059 10.05l-.021-.017zm5.531-7.551c-.303-.152-1.793-.885-2.071-.986-.277-.101-.48-.152-.682.152-.202.303-.781.986-.957 1.189-.177.202-.354.227-.657.076-.303-.152-1.28-.472-2.438-1.507-.902-.806-1.51-1.802-1.688-2.106-.177-.303-.019-.467.132-.619.136-.137.303-.354.455-.53.152-.177.202-.303.303-.505.101-.202.051-.38-.025-.531-.076-.152-.682-1.644-.934-2.25-.246-.593-.496-.513-.682-.522a12.923 12.923 0 0 0-.581-.013c-.202 0-.53.076-.808.38-.278.303-1.06 1.036-1.06 2.527 0 1.491 1.086 2.932 1.238 3.134.152.202 2.137 3.262 5.176 4.575.722.313 1.286.499 1.726.638.725.231 1.386.198 1.907.12.583-.087 1.793-.733 2.046-1.44.253-.707.253-1.314.177-1.44-.076-.126-.278-.202-.581-.354z"/>
  </svg>
);

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
        <div className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 group-hover:scale-110">
          <WhatsappIcon size={32} className="text-white" />
        </div>
      </div>
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-lg bg-ctext-primary text-white text-xs font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us
      </div>
    </a>
  );
};

export default WhatsAppFab;
