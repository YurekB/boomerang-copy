const Top = () => {
  return (
    <div class="top">
      <img src="/images/boomsmall.png" alt="small boom" />
      <div class="topText">
        <h1>
          Your new taxi... for <span className="accent-a">a pound</span>
          <span className="accent-b">?</span>
        </h1>
        <p>
          Yes, you read that right! Boomerang gives{" "}
          <strong>taxi drivers across the UK</strong> an opportunity to rent a
          hybrid vehicle -{" "}
          <strong>in line with the nation’s clean air zones</strong> - and{" "}
          <strong>buy it for just £1</strong> at the end of your term!
          <br />
          <br />
          All of our vehicles{" "}
          <strong>
            comply with the Government’s new environmental strategy
          </strong>
          , and there’s never been an opportunity to rent a brand new taxi and
          have the ability to purchase it for{" "}
          <strong>less than the price of a takeaway coffee!</strong>
        </p>
        <button class="small-btn topButton">START NOW</button>
      </div>
    </div>
  );
};

export default Top;
