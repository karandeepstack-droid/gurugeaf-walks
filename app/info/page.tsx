export default function InfoPage() {
  return (
    <div className="flex flex-col items-center w-full bg-[#f5e9da] min-h-screen pt-12 pb-24 px-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-12 border-b-4 border-[#cc785c] inline-block pb-2">Practical Information</h1>

        <div className="space-y-8 text-[#1b1b1b]">
          <section>
            <h3 className="font-bold text-xl mb-2">How to Book</h3>
            <p>Tours can be booked directly through the website or by contacting us via WhatsApp or email.</p>
            <p>A deposit of 30% is required to confirm your booking. Balance can be paid at the start of the tour.</p>
          </section>

          <section>
            <h3 className="font-bold text-xl mb-2">Meeting Point &amp; Pick-Up</h3>
            <p>Standard meeting points: Assi Ghat or Durgakund.</p>
            <p>Free pick-up available from hotels/guesthouses near Assi or Durgakund. For locations further away (Cantt station, airport, etc.), transport can be arranged for a small extra fee (approx. 500 INR).</p>
          </section>

          <section>
            <h3 className="font-bold text-xl mb-2">Group Size</h3>
            <p>Small groups for a personal experience. Maximum: 16 people.</p>
            <p>Private tours available upon request. Families welcome; children under 14 free.</p>
          </section>

          <section>
            <h3 className="font-bold text-xl mb-2">Duration &amp; Timing</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Walking tours: usually 2.5–3 hours.</li>
              <li>Boat rides: sunrise (5:00 am) or sunset (4:30 pm) depending on season.</li>
              <li>Full-day options available (2 tours with a break).</li>
              <li>Multi-day tours also available (overnight experiences, countryside escapes).</li>
            </ul>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2 text-[#1d3f23]">What&apos;s Included</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li>Guided walk with experienced local guide.</li>
                <li>Boat rides (where specified).</li>
                <li>Drinking water and small snacks.</li>
                <li>Cultural insights, storytelling, and personal attention.</li>
              </ul>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2 text-[#cc785c]">What&apos;s Not Included</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li>Meals (unless specified).</li>
                <li>Entry tickets to certain sites (e.g. Ramnagar Fort).</li>
                <li>Personal expenses, souvenirs, tips.</li>
              </ul>
            </section>
          </div>

          <section>
            <h3 className="font-bold text-xl mb-2">Payments &amp; Cancellation</h3>
            <p><strong>Accepted:</strong> Cash, UPI, Credit Card, PayPal. Prices vary depending on group size (discounts for larger groups).</p>
            <p><strong>Cancellation:</strong> Free cancellation up to 10 days before the tour. Deposits are non-refundable if cancelled later, but can be transferred to a future date.</p>
          </section>

          <section>
            <h3 className="font-bold text-xl mb-2">Accessibility &amp; Comfort</h3>
            <p>Most tours involve walking through narrow lanes, steps, and uneven ground. Comfortable shoes recommended. Not all routes are wheelchair accessible; please contact us to arrange customized options.</p>
          </section>

          <section>
            <h3 className="font-bold text-xl mb-2">Languages &amp; Safety</h3>
            <p>Tours available in Hindi, English, and Italian.</p>
            <p>All tours are conducted with attention to safety and respect for local traditions. Boat rides include life jackets. First aid available during tours.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
