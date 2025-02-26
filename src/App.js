import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itineraryRef = useRef(null);

  const scrollToItinerary = () => {
    if (itineraryRef.current) {
      itineraryRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Itinerary section not found");
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Big Cats Week at Maasai Mara</h1>
          <p>Diwali 2023 Special – An Unforgettable Wildlife Adventure</p>
          <button className="cta-button" onClick={scrollToItinerary}>
            Explore the Journey
          </button>
        </div>
      </section>

      <section id="itinerary" ref={itineraryRef}>
        <h2>Itinerary - A Journey Through the Wild</h2>
        <div className="itinerary">
          <div className="day">
            <h3>📅 Day 1: Arrival & First Safari</h3>
            <img src="https://images.freeimages.com/images/small-previews/130/campfire-1527393.jpg" alt="Maasai Mara" />
            <p>📍 7:00 AM Pickup – Start your adventure from JKIA Airport in a 4x4 Landcruiser.<br/>
            🌿 Scenic Drive – Pass Nairobi National Park and The Great Rift Valley for breathtaking views.<br/>
            🦁 Arrival & Check-in – Reach Maasai Mara by noon, enjoy lunch, and relax.<br/>
            🐾 First Game Drive – Explore Talek & Topi Plains, spotting zebras, antelopes & the ‘Topi Pride’ lions.<br/>
            🔥 Evening Campfire – Share your experiences with fellow travelers over dinner.</p>
          </div>

          <div className="day">
            <h3>📅 Day 2: Sunrise Safari & Wildlife Encounters</h3>
            <img src="https://webneel.com/wallpaper/sites/default/files/images/04-2013/32-beautiful-sunrise.jpg" alt="sunrise" />
            <p>🌅 Early Morning Game Drive – Witness the breathtaking Mara Sunrise and enjoy a bush breakfast.<br/>
            🐆 Wildlife Sightings – Search for cheetahs, watch newborn Topis, and observe hyenas in action.<br/>
             📸 Afternoon Safari – Spot the elusive leopard while capturing incredible wildlife moments.
            🎶 Relaxing Evening – Enjoy stories by the campfire and a delicious dinner.</p>
          </div>

          <div className="day">
            <h3>📅 Day 3: Full-Day Safari & Big Five Adventure</h3>
            <img src="https://tse1.mm.bing.net/th?id=OIP.AakNNvCTzyc5Ix7ztZF-MgHaE8&pid=Api&P=0&h=180" alt="rhino" />
            <p>🌍 Journey to the Sand River – Travel to the Kenya-Tanzania border, a key migration point.<br/>
              🦓 Witness the Great Migration Paths – Experience one of nature’s greatest wonders.<br/>
              🦏 Big 5 Quest – Spot lions, elephants, buffaloes, and possibly the elusive rhino.<br/>
              🚙 Final Safari Moments – A last chance to soak in Maasai Mara’s beauty before heading back to camp.</p>
          </div>

          <div className="day">
            <h3>📅 Day 4: Farewell & Return to Nairobi</h3>
            <img src="https://bushbaby.travel/wp-content/uploads/2021/07/WEB-KEN-Mara-Slider-Bush-breakfast-in-the-mara-shutterstock_717616747.jpg" alt="breakfast" />
            <p>🍽 Relaxed Breakfast – Enjoy a final meal while sharing memories with your group.<br/>
            🚗 Return to Nairobi – Board your Landcruiser for a scenic drive back to JKIA Airport.<br/>
            👋 End of an Unforgettable Adventure – Depart with lifelong memories of Maasai Mara!</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Tour Costs</h2>
        <p><strong>Per Adult:</strong> $1582 (Special offer: $1322 before Aug 14)</p>
        <p><strong>Per Child (4-9 years):</strong> $1400 (Special offer: $1127 before Aug 14)</p>
      </section>

      <section className="inclusion-exclusion">
        <div className="box">
          <h2>Inclusions</h2>
          <ul>
            <li>Transfers from JKIA airport to Maasai Mara.</li>
            <li>Stay in twin-sharing accommodations.</li>
            <li>Shared game drives in Land Cruisers.</li>
            <li>Meals as per itinerary.</li>
            <li>English-speaking guides and drivers.</li>
          </ul>
        </div>
        <div className="box">
          <h2>Exclusions</h2>
          <ul>
            <li>International airfare & VISA fees.</li>
            <li>Medical and personal expenses.</li>
            <li>Tips and gratuities.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Terms & Conditions</h2>
        <ul>
          <li>Minimum 4 passengers per vehicle.</li>
          <li>Valid passport with at least 6 months validity required.</li>
          <li>Yellow fever and oral polio vaccination mandatory.</li>
          <li>100% payment at booking, partial refund available for early cancellations.</li>
          <li>International travel insurance required.</li>
        </ul>
      </section>

      <section className="footer">
        <h2>Register for the Adventure</h2>
        <p>Secure your spot today and embark on an unforgettable journey!</p>
        <button className="cta-button" onClick={toggleModal}>
          Register Now
        </button>
      </section>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Registration Form</h2>
            <form>
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required />

              <button type="submit">Submit Registration</button>
            </form>
            <button className="close-modal" onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
