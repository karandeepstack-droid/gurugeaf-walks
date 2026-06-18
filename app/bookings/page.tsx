"use client";

import { useState } from "react";

export default function BookingsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    language: "English",
    tourType: "Evergreen Tours",
    adults: "1",
    children: "0",
    date: "",
    pickup: "Meeting point",
    requests: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const text = `*New Booking Request!* 🚶‍♂️
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Language:* ${formData.language}
*Tour Type:* ${formData.tourType}
*People:* ${formData.adults} Adults, ${formData.children} Children
*Date:* ${formData.date}
*Pick-up:* ${formData.pickup}

*Special Requests:* ${formData.requests ? formData.requests : "None"}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919800011000?text=${encodedText}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col items-center w-full bg-[#ebdcd3] min-h-screen pt-12 pb-24 px-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Intro */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Booking &amp; Contact</h1>
          <p className="text-xl italic mb-6">&quot;Your journey begins the moment you decide to travel.&quot;</p>
          <div className="space-y-4 text-[#1b1b1b]">
            <p>Hello,</p>
            <p>I know that every journey starts long before you arrive in Banaras — it begins at home, when the idea first touches your mind. From that moment, questions and doubts are part of the road.</p>
            <p>I&apos;m here for all of them.</p>
            <p><strong>Before you decide</strong> — when curiosity is mixed with hesitation, and you wonder if this journey is for you. Ask me anything, I&apos;ll answer with honesty and care.</p>
            <p><strong>After you decide</strong> — practical questions arrive: what to pack, if it will be hot or cold... I&apos;ll guide you through the small things that make travel easier.</p>
            <p><strong>While you travel</strong> — tickets, drivers, transport in a new country... Don&apos;t worry, I&apos;m here on WhatsApp, ready to help you on the way.</p>
            <p className="mt-8 italic">&quot;I look forward to walking with you in Banaras. Until then, I am only a message away.<br/>See you by the river,<br/>Pappu&quot;</p>
          </div>

          <div className="mt-12 bg-[#f2c57c] p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Direct Contact</h3>
            <p>Prefer to reach me directly?</p>
            <p>📧 Email: info@gurugeafwalks.com</p>
            <p>📱 WhatsApp: +91-9800011000</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6">Booking Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-1">Name &amp; Surname</label>
              <input required type="text" className="w-full border p-2 rounded" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Email</label>
              <input required type="email" className="w-full border p-2 rounded" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Phone / WhatsApp</label>
              <input required type="text" className="w-full border p-2 rounded" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Tour Type</label>
              <select className="w-full border p-2 rounded" value={formData.tourType} onChange={e => setFormData({...formData, tourType: e.target.value})}>
                <option>Evergreen Tours (Kashi / Varanasi / Banaras)</option>
                <option>Insider Tours (Food / Night / Photography)</option>
                <option>Festivals</option>
                <option>Getaways (Overnight trips)</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-1">Adults</label>
                <input type="number" min="1" className="w-full border p-2 rounded" value={formData.adults} onChange={e => setFormData({...formData, adults: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Children</label>
                <input type="number" min="0" className="w-full border p-2 rounded" value={formData.children} onChange={e => setFormData({...formData, children: e.target.value})} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Date &amp; Time</label>
              <input required type="text" placeholder="e.g. Oct 12, Morning" className="w-full border p-2 rounded" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Special Requests</label>
              <textarea className="w-full border p-2 rounded h-24" value={formData.requests} onChange={e => setFormData({...formData, requests: e.target.value})}></textarea>
            </div>
            
            <button type="submit" className="w-full bg-[#1d3f23] text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity">
              Submit Booking via WhatsApp
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
