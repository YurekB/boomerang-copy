const Header = () => {
  return (
    <header>
      <div class="headerMain">
        <div class="headerTop">
          <img
            src="/images/logoMain.253df1a01990e1e9008b150db3991d47.png"
            alt="logo1"
          />

          <div class="links">
            <button id="homeButton">Home</button>
            <button>Our cars</button>
            <button>FAQs</button>
            <button>Contact us</button>
          </div>
        </div>
        <div>
          <h1 className="main-section-title">
            The <span className="underline">Cheapest</span> Taxi{<br />}You’ve{" "}
            <span className="underline">Ever</span> Bought.
          </h1>
          <h5>
            With Boomerang, rent a clean-air-compliant hybrid taxi from us, then
            keep it for just £1!
          </h5>

          <button class="small-btn headerButton blue">START NOW</button>
          <img class="heroCars" src="/images/heroCars.png" alt="hero cars" />
        </div>
      </div>
      <div class="quote">
        <p>
          “To all taxi drivers out there… This is the ‘best route’ for renting
          your vehicle”
        </p>
        <img src="/images/tele.png" alt="tele logo" />
      </div>
    </header>
  );
};

export default Header;
