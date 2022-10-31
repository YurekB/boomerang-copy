import { useState } from "react";

const Taxis = () => {
  const [taxi, setTaxi] = useState(0);

  const taxiInfo = [
    { name: "HYUNDAI Ioniq Hybrid (2019)", pic: "/images/car1.png" },
    { name: "KIA Niro 3 Hybrid", pic: "/images/car2.png" },
  ];

  const onClick = () => {
    if (taxi === 0) {
      setTaxi(1);
    } else if (taxi === 1) {
      setTaxi(0);
    }
  };

  return (
    <div class="taxisSection">
      <h2>Check out our range of hybrid taxis</h2>
      <div class="three">
        <button class="leftBtn" onClick={onClick}>
          <img src="/images/left.png" alt="left arrow" />
        </button>

        <div class="taxiCard">
          <div class="taxiInfoText">
            <h3>{taxiInfo[taxi].name}</h3>
            <p>
              <b>Term:</b> 54 Months
            </p>
            <p>
              <b>Initial:</b> £500 (inc. VAT)
            </p>
            <p>
              <b>Deposit:</b> £500
            </p>
            <h4>£230 Per Week</h4>
            <ul class="taxiSymbols">
              <li>
                <img src="/images/hybrid.png" alt="hybrid" />
              </li>
              <li>
                <img src="/images/mileage.png" alt="hybrid" />
              </li>
              <li>
                <img src="/images/automatic.png" alt="hybrid" />
              </li>
            </ul>
            <ul class="taxiSymbolWords">
              <li>
                <p>Hybrid</p>
              </li>
              <li>
                <p>Uncapped Mileage*</p>
              </li>
              <li>
                <p>Automatic</p>
              </li>
            </ul>
          </div>
          <div class="taxiImg">
            <img src={taxiInfo[taxi].pic} alt="car" />
          </div>
        </div>
        <button class="rightBtn" onClick={onClick}>
          <img src="/images/right.png" alt="right arrow" />
        </button>
      </div>
      <p class="smallText">*Uncapped mileage is up to 800 miles per week</p>
      <button class="small-btn topButton taxisBtn">ENQUIRE NOW</button>
    </div>
  );
};

export default Taxis;
