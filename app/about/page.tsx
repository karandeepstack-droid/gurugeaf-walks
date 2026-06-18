export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full bg-[#f5e9da] min-h-screen pt-12 pb-24 px-4">
      <div className="max-w-4xl w-full">
        {/* Who am I section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-[#1d3f23] mb-4">who I am</h1>
          <h2 className="text-3xl font-bold text-[#1d3f23] mb-6">Who am I?</h2>
          
          <div className="space-y-4 text-lg text-[#1b1b1b]">
            <p>I was born in Banaras as <strong>Gurdjef</strong>.</p>
            <p>Very soon, for simplicity, it was written in a lighter form — and that became the name that stayed with me: <strong>Gurugeaf</strong>.</p>
            <p>But as a child they began to call me <strong>Pappu</strong>, and in Banaras everyone still knows me by that nickname.</p>
            <p>So you may meet me under three names.<br/>
            Most people call me Pappu, a few close ones say Gurugeaf.<br/>
            And Gurdjef… well, that one remains like a shadow, a reminder, a gift.</p>
            
            <p className="mt-8">I was born and raised in this city, in the crowded alleys and ghats, in a large family where philosophy and daily life lived side by side.</p>
            <p>From an early age I met people from all over the world, learned to listen, and discovered other traditions. I spent time in Italy with my family, and later worked for many years with one of the most renowned tour agencies of Varanasi.</p>
            <p>Then I chose to continue on my own path.<br/>
            Today I guide visitors not only through the visible streets of Banaras, but also toward its invisible layers.</p>
            <p>I speak Hindi, English, and Italian.</p>
            <p className="font-bold text-[#1d3f23] mt-4">But more than words, I believe in walking together.</p>
          </div>
        </div>

        {/* The Silent Teacher */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">The Silent Teacher</h3>
            <p className="text-lg mb-4">
              Sometimes, as we walk,<br/>
              the city speaks like a teacher:<br/>
              with paradoxes,<br/>
              with ironies,<br/>
              with sudden revelations.
            </p>
            <p className="text-lg">
              These phrases appear like mantras along the way, part truth and part provocation.<br/>
              Because walking here is not only about looking outside, but also about looking within.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-center font-bold">
            <div className="bg-white p-6 rounded-full border-4 border-black inline-block self-start">
              Tourists take pictures.<br/>Seekers take steps.&quot;
            </div>
            <div className="bg-white p-6 rounded-[50%] border-4 border-black inline-block self-end">
              Every ghat is a door.<br/>Some open inward.&quot;
            </div>
            <div className="bg-white p-6 rounded-[40%] border-4 border-black inline-block self-center">
              Every step is repetition.<br/>Every repetition is change.&quot;
            </div>
          </div>
        </div>

      </div>

      {/* Walking Light */}
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Walking light</h2>
            <p className="text-lg mb-4">There is a story I carry with me:</p>
            <p className="text-lg mb-4">
              You can listen to all the lessons, follow all the teachings, walk in discipline for years. And yet, sometimes the answer comes from a simple gesture — like taking a child&apos;s kite in your hands.
            </p>
            <p className="text-lg">
              When you hold that kite, the walk becomes light.<br/>
              You walk, and you fly.
            </p>
          </div>
          <div className="text-9xl text-center">🪁</div>
        </div>
      </div>

      {/* Banner */}
      <div className="w-full bg-[#f2c57c] py-16 px-4 text-center mt-12">
        <p className="text-2xl font-medium max-w-2xl mx-auto">
          This is what Banaras teaches me every day:<br/>
          that play can be revelation,<br/>
          and that in walking together, we invent ourselves anew.<br/><br/>
          <span className="font-bold">Let&apos;s walk together.</span>
        </p>
      </div>
    </div>
  );
}
