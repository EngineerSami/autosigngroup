import "../style/AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">

      {/* HEADER */}
      <section className="about-header">
        <h1>About Auto Sign Group</h1>
        <p>A leading multi-sector business group in Palestine</p>
      </section>

      {/* GROUP OVERVIEW */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Established in <strong>1976</strong>, Auto Sign Group is a dynamic and diversified 
          business conglomerate operating across multiple sectors in Palestine. 
          Over the decades, the Group has built a strong presence in real estate, 
          automotive spare parts, and vehicle trade, becoming one of the most 
          respected and trusted names in the region.
        </p>

        <p>
          With a commitment to growth, innovation, and long-term partnerships, 
          Auto Sign Group plays a crucial role in supporting the Palestinian 
          economy and empowering businesses within its network.
        </p>
      </section>

      {/* BUSINESS DIVISIONS */}
      <section className="about-section">
        <h2>Our Divisions</h2>
        <p>
          Auto Sign Group consists of multiple companies working together to 
          deliver value across various sectors:
        </p>

        <ul>
          <li>
            <strong>Real Estate Development</strong>  
            — EMKAN Company, General Company, Al-Fanar Company  
            (construction, real estate, and housing projects)
          </li>

          <li>
            <strong>Automotive Spare Parts</strong>  
            — Auto Sign Trading Co., Shuqba Stores, TH Company  
            (importing, distributing, and servicing automotive parts)
          </li>

          <li>
            <strong>Vehicle Trading</strong>  
            — Shuqba & Thabet Motors  
            (vehicle sales and automotive solutions)
          </li>
        </ul>
      </section>

      {/* CEO MESSAGE */}
    <section className="ceo-message">
    <div className="ceo-content">
        <h2 className="ceo-title">A Message From the CEO</h2>

        <p className="ceo-text">
        Dear Partners, Clients, and Friends,
        </p>

        <p className="ceo-text">
        It is with great pride and gratitude that I welcome you to Auto Sign Co.
        Since our founding in 2000, we have remained committed to one mission:
        <strong> delivering excellence in automotive spare parts across Palestine.</strong>
        What began as a modest operation has grown into a national leader, representing
        many global brands and serving hundreds of retailers with speed, precision,
        and trust.
        </p>

        <p className="ceo-text">
        At Auto Sign Co., we believe that success is built on relationships.
        Our team of dedicated professionals, our advanced logistics infrastructure,
        and our unwavering commitment to quality have positioned us not only as a
        supplier—but as a strategic partner to every business we serve.
        </p>

        <p className="ceo-text highlight">
        As we look to the future, we remain focused on innovation, expansion,
        and elevating the standards of our industry. Whether you're a long-standing
        partner or exploring collaboration for the first time, we invite you to join
        us on this journey of growth and excellence. Thank you for your trust.
        </p>

        <p className="ceo-name">Warm regards,</p>
        <p className="ceo-name"><strong>Basim Thabet</strong></p>
        <p className="ceo-name">Chief Executive Officer</p>
        <p className="ceo-name">Auto Sign Co.</p>
    </div>
    </section>


      {/* VALUES */}
      <section className="about-section dual">
        <div>
          <h2>Our Commitment</h2>
          <p>
            Auto Sign Group is committed to building long-lasting partnerships, 
            maintaining high standards of quality, and driving sustainable growth 
            across all sectors in which it operates.
          </p>
        </div>

        <div>
          <h2>Our Legacy</h2>
          <p>
            With nearly five decades of experience, the Group continues to expand 
            its impact, strengthening its companies and introducing new business 
            opportunities to meet the evolving needs of the Palestinian market.
          </p>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="about-section">
        <h2>Dedicated to Growth & Excellence</h2>
        <p>
          As one of the most established business groups in Palestine,  
          Auto Sign Group remains focused on innovation, expansion, and providing 
          leading solutions across its diverse industries.  
        </p>
      </section>

    </div>
  );
}

export default AboutUs;
