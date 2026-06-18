import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto shadow-2xl bg-white min-h-screen scroll-smooth">
      
      {/* Home Page (Page 1) with Navigation Overlay */}
      <div id="home" className="relative w-full">
        <img src="/page_0.png" className="w-full h-auto block" alt="Home" />
        
        {/* Invisible Navigation Overlay */}
        <div className="absolute top-[2%] right-[5%] w-[45%] h-[5%] flex justify-between z-20">
          <a href="#home" className="w-1/4 h-full block cursor-pointer hover:bg-black/5 rounded" title="Home">
            <span className="sr-only">Home</span>
          </a>
          <a href="#about" className="w-1/4 h-full block cursor-pointer hover:bg-black/5 rounded" title="About">
            <span className="sr-only">About</span>
          </a>
          <a href="#walks" className="w-1/4 h-full block cursor-pointer hover:bg-black/5 rounded" title="Walks">
            <span className="sr-only">Walks</span>
          </a>
          <a href="#bookings" className="w-1/4 h-full block cursor-pointer hover:bg-black/5 rounded" title="Bookings">
            <span className="sr-only">Bookings</span>
          </a>
        </div>
      </div>

      <div id="about" className="w-full">
        <img src="/page_1.png" className="w-full h-auto block" alt="About" />
      </div>
      
      <div id="walks" className="w-full">
        <img src="/page_2.png" className="w-full h-auto block" alt="Walks" />
      </div>
      
      {/* Bookings Page */}
      <div id="bookings" className="relative w-full">
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

      <div id="info" className="w-full">
        <img src="/page_4.png" className="w-full h-auto block" alt="Info" />
      </div>
    </div>
  );
}
