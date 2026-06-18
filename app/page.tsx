import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full relative flex flex-col items-center text-center py-8 px-4 bg-[#e8dac7] border-b-[16px] border-[#cc785c]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter text-[#1d3f23]">GURUGEAF WALKS</h1>
        
        {/* Extracted Hero Image */}
        <div className="relative w-full max-w-4xl mb-6">
          <img src="/image_1.jpeg" alt="Gurugeaf Walks Hero" className="w-full rounded-lg shadow-xl" />
        </div>

        <h2 className="text-3xl md:text-5xl font-light text-[#1b1b1b] max-w-4xl leading-tight">
          We have been walking this city for a lifetime.<br/>
          <span className="font-semibold">Join us, let&apos;s walk together.</span>
        </h2>
      </section>

      {/* 4 Cards Section */}
      <section className="w-full max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        <div className="bg-[#f2c57c] p-6 rounded-xl shadow-md text-center flex flex-col items-center">
          <img src="/image_3.png" alt="Boat Icon" className="w-24 h-24 object-contain mb-4" />
          <h3 className="font-bold text-xl mb-2">Evergreen Tours</h3>
          <p className="text-sm mb-4">Timeless walks through the classic faces of Banaras.</p>
          <Link href="/walks" className="text-[#1d3f23] font-bold text-sm italic hover:underline mt-auto">[Explore Evergreen]</Link>
        </div>
        
        <div className="bg-[#f2c57c] p-6 rounded-xl shadow-md text-center flex flex-col items-center">
          <img src="/image_12.png" alt="Tea Icon" className="w-24 h-24 object-contain mb-4" />
          <h3 className="font-bold text-xl mb-2">Insider Tours</h3>
          <p className="text-sm mb-4">Food, Banaras by Night, artisans, photography.</p>
          <Link href="/walks" className="text-[#1d3f23] font-bold text-sm italic hover:underline mt-auto">[Be an Insider]</Link>
        </div>

        <div className="bg-[#f2c57c] p-6 rounded-xl shadow-md text-center flex flex-col items-center">
          <img src="/image_5.png" alt="Festival Icon" className="w-24 h-24 object-contain mb-4" />
          <h3 className="font-bold text-xl mb-2">Festivals</h3>
          <p className="text-sm mb-4">Celebrate with the city.</p>
          <Link href="/walks" className="text-[#1d3f23] font-bold text-sm italic hover:underline mt-auto">[See the Calendar]</Link>
        </div>

        <div className="bg-[#f2c57c] p-6 rounded-xl shadow-md text-center flex flex-col items-center">
          <img src="/image_6.png" alt="Tent Icon" className="w-24 h-24 object-contain mb-4" />
          <h3 className="font-bold text-xl mb-2">Getaways</h3>
          <p className="text-sm mb-4">Venture beyond on overnight journeys.</p>
          <Link href="/walks" className="text-[#1d3f23] font-bold text-sm italic hover:underline mt-auto">[Explore destinations]</Link>
        </div>
      </section>

      {/* Rhythm Section */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">The city is never still. Every month brings a new rhythm, a new festival, a new way of walking.</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-lg">Walk of the Month</h3>
              <p className="mb-1">Walk along the ghats at dusk, where the river reflects lamps and chants.</p>
              <Link href="/walks" className="text-[#f2c57c] font-bold hover:underline">👉 [Join the Walk]</Link>
            </div>
            
            <div>
              <h3 className="font-bold text-lg">Festival / Ceremony</h3>
              <p className="mb-1">Durga Puja fills Banaras with devotion — altars, music, processions.</p>
              <Link href="/walks" className="text-[#f2c57c] font-bold hover:underline">👉 [See Calendar]</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Doors Section */}
      <section className="w-full py-16 px-4 bg-[#ebdcd3]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Three hidden doors to the city</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <img src="/image_9.png" alt="Compass" className="w-32 h-32 object-contain mb-4" />
              <h3 className="text-2xl font-bold mb-2">Seek more</h3>
              <p>Orientation for the journey.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/image_13.png" alt="Book" className="w-32 h-32 object-contain mb-4" />
              <h3 className="text-2xl font-bold mb-2">Learn more</h3>
              <p>Read the city like a book.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/image_7.png" alt="Kite" className="w-32 h-32 object-contain mb-4" />
              <h3 className="text-2xl font-bold mb-2">Play more</h3>
              <p>Lose yourself in the games of Banaras.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
