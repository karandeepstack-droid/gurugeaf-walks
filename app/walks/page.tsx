export default function WalksPage() {
  return (
    <div className="flex flex-col items-center w-full bg-[#ebdcd3] min-h-screen pt-12 pb-24 px-4">
      <div className="max-w-5xl w-full space-y-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Walks &amp; Tours</h1>

        {/* Evergreen Tours */}
        <section>
          <div className="bg-[#f2c57c] text-center py-4 rounded-xl shadow-sm mb-8">
            <h2 className="text-2xl font-bold">Evergreen Tours - The timeless walks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl">Kashi Tour</h3>
              <p className="italic mb-2">&quot;Walk into the sacred heart of Banaras.&quot;</p>
              <p className="text-sm mb-4">Through narrow alleys and vibrant markets, discover the spiritual core of Kashi — from the Flower Market to Manikarnika, Nepali Mandir and centuries-old temples.</p>
              <p className="text-xs text-neutral-500">2.5–3 hours | Best start: 9–11 am or 2–3 pm | Walking.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl">Varanasi Tour</h3>
              <p className="italic mb-2">&quot;The living city by the river.&quot;</p>
              <p className="text-sm mb-4">Start at Assi, follow the ghats and hidden akharas, see where wrestlers train, ending at Harishchandra and Kali Mandir.</p>
              <p className="text-xs text-neutral-500">2.5–3 hours | Best start: 9–11 am or 2–3 pm | Walking.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl">Banaras Tour</h3>
              <p className="italic mb-2">&quot;Heritage and flavors beyond the ghats.&quot;</p>
              <p className="text-sm mb-4">Cross the river to Ramnagar: its fort, Durga Mandir, ending with a traditional meal at Bati Chowka. A blend of history, devotion, and taste.</p>
              <p className="text-xs text-neutral-500">Half-day | Includes short transfer (car/auto).</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl">Anand Van Tour</h3>
              <p className="italic mb-2">&quot;The forest of bliss and learning&quot;</p>
              <p className="text-sm mb-4">From Durga Mandir to Sankat Mochan and the lively campus of Banaras Hindu University. A tour where devotion meets education.</p>
              <p className="text-xs text-neutral-500">Half-day | Walking + auto/rickshaw transfers.</p>
            </div>
          </div>
        </section>

        {/* Insider Tours */}
        <section>
          <div className="bg-[#f2c57c] text-center py-4 rounded-xl shadow-sm mb-8">
            <h2 className="text-2xl font-bold">Be an Insider - Step beyond the surface</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl">Street Food &amp; Chai Tour</h3>
              <p className="text-sm mb-2">Discover safe, authentic spots for chai, street snacks and sweets — the flavors that keep the city alive.</p>
              <p className="text-xs text-neutral-500">2–3 hours | Afternoon/evening.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl">Banaras by Night</h3>
              <p className="text-sm mb-2">Evening along the ghats: lamps, rituals, shadows and quiet lanes. A different Banaras comes alive after dark.</p>
              <p className="text-xs text-neutral-500">2 hours | Evening (after 7 pm).</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl">Photography Walk</h3>
              <p className="text-sm mb-2">Sunrise or sunset, ideal for photographers. Focus on light, textures, rituals, everyday moments.</p>
              <p className="text-xs text-neutral-500">2–3 hours | Sunrise or golden hour.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl">Yoga &amp; Spiritual Morning</h3>
              <p className="text-sm mb-2">Yoga on the ghats with a teacher, followed by a short walk exploring sacred morning rituals.</p>
              <p className="text-xs text-neutral-500">2 hours | Sunrise only</p>
            </div>
          </div>
        </section>

        {/* Getaways */}
        <section>
          <div className="bg-[#f2c57c] text-center py-4 rounded-xl shadow-sm mb-8">
            <h2 className="text-2xl font-bold">Getaways - Out of town overnight trips</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl">Ramnagar + Chunar Fort</h3>
              <p className="text-sm">Day in Ramnagar Fort and temples, then sunset at Chunar Fort with river views. Overnight in the area, return through villages.</p>
              <p className="text-xs text-neutral-500 mt-2">1 night | 40–50 km</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl">Sarnath + Vindhyachal</h3>
              <p className="text-sm">Morning at Sarnath (stupas, monastery ruins). Afternoon transfer to Vindhyachal, evening temple rituals. Overnight stay, return via countryside.</p>
              <p className="text-xs text-neutral-500 mt-2">1 night | 70–80 km</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
