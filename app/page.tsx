import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full relative flex flex-col items-center text-center py-16 px-4 bg-[#e8dac7] border-b-[16px] border-[#cc785c]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter text-[#1d3f23]">GURUGEAF WALKS</h1>
        <div className="bg-[#cc785c] text-white px-8 py-3 rounded-md font-semibold text-xl mb-8 transform -rotate-1 shadow-lg">
          ...and walks... and walks... and walks...
        </div>
        <h2 className="text-3xl md:text-5xl font-light text-[#1b1b1b] max-w-4xl leading-tight">
          We have been walking this city for a lifetime.<br/>
          <span className="font-semibold">Join us, let&apos;s walk together.</span>
        </h2>
      </section>

      {/* 4 Cards Section */}
      <section className="w-full max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-12 relative z-10">
        <div className="bg-[#f2c57c] p-6 rounded-xl shadow-md text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-[#e8dac7] rounded-full mb-4 flex items-center justify-center text-3xl">⛵</div>
          <h3 className="font-bold text-xl mb-2">Evergreen Tours</h3>
          <p className="text-sm mb-4">Timeless walks through the classic faces of Banaras — Kashi, Varanasi, Banaras, Anand Van.</p>
          <Link href="/walks" className="text-[#1d3f23] font-bold text-sm italic hover:underline mt-auto">[Explore Evergreen]</Link>
        </div>
        
        <div className="bg-[#f2c57c] p-6 rounded-xl shadow-md text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-[#e8dac7] rounded-full mb-4 flex items-center justify-center text-3xl">☕</div>
          <h3 className="font-bold text-xl mb-2">Insider Tours</h3>
          <p className="text-sm mb-4">Food, Banaras by Night, artisans, photography, village life.</p>
          <Link href="/walks" className="text-[#1d3f23] font-bold text-sm italic hover:underline mt-auto">[Be an Insider]</Link>
        </div>

        <div className="bg-[#f2c57c] p-6 rounded-xl shadow-md text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-[#e8dac7] rounded-full mb-4 flex items-center justify-center text-3xl">🪔</div>
          <h3 className="font-bold text-xl mb-2">Festivals</h3>
          <p className="text-sm mb-4">Celebrate with the city.</p>
          <Link href="/walks" className="text-[#1d3f23] font-bold text-sm italic hover:underline mt-auto">[See the Calendar]</Link>
        </div>

        <div className="bg-[#f2c57c] p-6 rounded-xl shadow-md text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-[#e8dac7] rounded-full mb-4 flex items-center justify-center text-3xl">⛺</div>
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
              <p className="mb-1">Walk along the ghats at dusk, where the river reflects lamps and chants. September evenings carry the steps of Durga.</p>
              <Link href="/walks" className="text-[#f2c57c] font-bold hover:underline">👉 [Join the Walk]</Link>
            </div>
            
            <div>
              <h3 className="font-bold text-lg">Festival / Ceremony</h3>
              <p className="mb-1">Durga Puja fills Banaras with devotion — altars, music, processions. Soon Diwali will arrive, when the whole city becomes light.</p>
              <Link href="/walks" className="text-[#f2c57c] font-bold hover:underline">👉 [See Calendar]</Link>
            </div>

            <div>
              <h3 className="font-bold text-lg">One Story</h3>
              <p className="mb-1">In a chai shop by the ghat, an old man ties red threads on the wrists of children — a small gesture, a whole world of meaning.</p>
              <Link href="/walks" className="text-[#f2c57c] font-bold hover:underline">👉 [Read More Stories]</Link>
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
              <div className="text-6xl mb-4">🧭</div>
              <h3 className="text-2xl font-bold mb-2">Seek more</h3>
              <p>Orientation for the journey: travel as conversation.&quot;</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4">📘</div>
              <h3 className="text-2xl font-bold mb-2">Learn more</h3>
              <p>Read the city like a book, open its hidden doors.&quot;</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4">🪁</div>
              <h3 className="text-2xl font-bold mb-2">Play more</h3>
              <p>Lose yourself in the games of Banaras, and fly lighter.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="w-full bg-white py-20 px-4 text-center flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">What People Say</h2>
        <div className="w-24 h-24 bg-[#cc785c] rounded-full mb-6 flex items-center justify-center text-4xl text-white">👩</div>
        <p className="text-2xl font-medium max-w-2xl mb-4 leading-relaxed">
          &quot;Every corner became a story. I never walked the same way again.&quot;
        </p>
        <p className="text-lg font-bold">Anna, Italy</p>
      </section>
    </div>
  );
}
