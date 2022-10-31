const AllYouNeed = () => {
  return (
    <div class="AllYouNeed">
      <h2 className="apply-title">
        To apply, all you need is <span className="accent-a">TWO</span> things
      </h2>
      <div class="applycards">
        <div class="apply1">
          <img src="/images/6.png" alt="driving licence" />
          <div>
            <h3>1. Driving Licence</h3>
            <p>
              In order to drive a Boomerang vehicle or any other private hire /
              non-standard private hire, you <b>MUST</b> hold a valid UK Driving
              Licence.
            </p>
          </div>
        </div>
        <div class="apply2">
          <img src="/images/7.png" alt="taxi licence" />
          <div>
            <h3>2. taxi Licence</h3>
            <p>
              This is the licence that allows you to operate and work as a taxi
              driver in the UK. Your licence may look similar to the example
              (top left).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllYouNeed;
