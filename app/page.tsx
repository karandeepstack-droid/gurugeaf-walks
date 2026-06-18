"use client";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto shadow-2xl bg-white min-h-screen">
      <img src="/page_0.png" className="w-full h-auto block" alt="Home" />
      <img src="/page_1.png" className="w-full h-auto block" alt="About" />
      <img src="/page_2.png" className="w-full h-auto block" alt="Walks" />
      
      {/* Bookings Page */}
      <div className="relative w-full">
        <img src="/page_3.png" className="w-full h-auto block" alt="Bookings" />
        
        {/* Invisible Clickable Area over the Form to open WhatsApp */}
        <a 
          href="https://wa.me/919800011000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bottom-[10%] left-[10%] w-[80%] block cursor-pointer z-10 hover:bg-black/5 rounded-3xl transition-colors"
          title="Click here to book via WhatsApp!"
          style={{ height: '50%' }}
        >
          <span className="sr-only">Book via WhatsApp</span>
        </a>
      </div>

      <img src="/page_4.png" className="w-full h-auto block" alt="Info" />
    </div>
  );
}
