import React from "react";
import "../styles/LetsTalk.css";

const LetsTalk = () => {
  return (
    <section className="lets-talk-section">
      <div className="container">
        <h2>Let's Talk</h2>
        <p>Ready to take your online presence to the next level? Book a free consultation with us.</p>
        <div className="calendly-embed">
          {/* Replace with your Calendly embed code or link */}
          <iframe
            title="Calendly Embed"
            src="https://calendly.com/your-username/your-event-type"
            width="100%"
            height="600"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
