const Header = () => {
  return (
    <header>
      <div class="headerMain">
        <div class="headerTop">
          <div class="boomlogo">
            <div class="boomlogo1container">
              <img class="boomlogo1" src="/images/boomlogo1.png" alt="logo1" />
            </div>
            <img class="boomlogo2" src="/images/boomlogo2.png" alt="logo2" />
          </div>

          <div class="links">
            <button id="homeButton">Home</button>
            <button>Our cars</button>
            <button>FAQs</button>
            <button>Contact us</button>
          </div>
        </div>
        {/* <div className="square"></div> */}
        <div>
          <h1 class="main-section-title swipeIn introHead">
            The <span class="underline">Cheapest</span> Taxi{<br />}You’ve{" "}
            <span class="underline">Ever</span> Bought.
          </h1>
          <h5 class=" opa">
            With Boomerang, rent a clean-air-compliant hybrid taxi from us, then
            keep it for just £1!
          </h5>

          <button class="small-btn headerButton blue headerBtn">
            START NOW
          </button>
          <img
            class="heroCars headerOne"
            src="/images/heroCars.png"
            alt="hero cars"
          />
        </div>
      </div>
      <div class="quote headerOne">
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
