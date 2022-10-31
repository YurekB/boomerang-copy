import { useState } from "react";

const FAQs = () => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");
  const [message6, setMessage6] = useState("");

  const resetMsg = () => {
    setMessage1("");
    setMessage2("");
    setMessage3("");
    setMessage4("");
    setMessage5("");
    setMessage6("");
  };

  const addColor1 = () => {
    const element = document.getElementById("btn1");
    element.classList.add("FAQSelected");
  };

  const addColor2 = () => {
    const element = document.getElementById("btn2");
    element.classList.add("FAQSelected");
  };

  const addColor3 = () => {
    const element = document.getElementById("btn3");
    element.classList.add("FAQSelected");
  };

  const addColor4 = () => {
    const element = document.getElementById("btn4");
    element.classList.add("FAQSelected");
  };

  const addColor5 = () => {
    const element = document.getElementById("btn5");
    element.classList.add("FAQSelected");
  };

  const addColor6 = () => {
    const element = document.getElementById("btn6");
    element.classList.add("FAQSelected");
  };

  const removeColor = () => {
    const element1 = document.getElementById("btn1");
    const element2 = document.getElementById("btn2");
    const element3 = document.getElementById("btn3");
    const element4 = document.getElementById("btn4");
    const element5 = document.getElementById("btn5");
    const element6 = document.getElementById("btn6");
    element1.classList.remove("FAQSelected");
    element2.classList.remove("FAQSelected");
    element3.classList.remove("FAQSelected");
    element4.classList.remove("FAQSelected");
    element5.classList.remove("FAQSelected");
    element6.classList.remove("FAQSelected");
  };

  return (
    <div class="FAQsSection">
      <h2>Frequently asked questions</h2>
      <ul>
        <button
          id="btn1"
          onClick={(event) => {
            resetMsg();
            removeColor();
            addColor1();
            setMessage1(
              "Our Rent to Buy scheme is 54 months (4.5 years), and then you have the option to purchase the vehicle for just £1! (Yes, one pound, a quid, 100 pennies!)"
            );
          }}
        >
          <li>
            <h5>1. How long is the term?</h5>
            <h4>+</h4>
          </li>
        </button>
        <p class="fade-in">{message1}</p>
        <button
          id="btn2"
          onClick={() => {
            resetMsg();
            removeColor();
            addColor2();
            setMessage2(
              "Our aim is to provide you a vehicle within 14 days. Vehicles are supplied brand new, too!"
            );
          }}
        >
          <li>
            <h5>2. How long does it take to get a car?</h5>
            <h4>+</h4>
          </li>
        </button>
        <p class="fade-in">{message2}</p>
        <button
          id="btn3"
          onClick={() => {
            resetMsg();
            removeColor();
            addColor3();
            setMessage3(
              "We charge a rate of £230 per week for rental of our vehicles."
            );
          }}
        >
          <li>
            <h5>3. How much will it cost to rent a taxi?</h5>
            <h4>+</h4>
          </li>
        </button>
        <p class="fade-in">{message3}</p>
        <button
          id="btn4"
          onClick={() => {
            resetMsg();
            removeColor();
            addColor4();
            setMessage4(
              "No problem at all! Just give us four weeks notice and then return the vehicle to your closest renting location. There are no charges or fees for bringing the vehicle back early."
            );
          }}
        >
          <li>
            <h5>4. What happens if I want to return my vehicle?</h5>
            <h4>+</h4>
          </li>
        </button>
        <p class="fade-in">{message4}</p>
        <button
          id="btn5"
          onClick={() => {
            resetMsg();
            removeColor();
            addColor5();
            setMessage5(
              "Yes! Once you have rented the vehicle for 54 months, you have the option to purchase the vehicle for £1, hand it back, or continue to rent. Terms and Conditions do apply."
            );
          }}
        >
          <li>
            <h5>5. Will I own the PCO car at the end of the payment plan?</h5>
            <h4>+</h4>
          </li>
        </button>
        <p class="fade-in">{message5}</p>
        <button
          id="btn6"
          onClick={() => {
            resetMsg();
            removeColor();
            addColor6();
            setMessage6(
              "Sorry! This is the only thing we don’t provide. Drivers will be required to arrange their own PCO-compliant comprehensive insurance, prior to picking up the car."
            );
          }}
        >
          <li>
            <h5>6. Is insurance included?</h5>
            <h4>+</h4>
          </li>
        </button>
        <p class="fade-in">{message6}</p>
      </ul>
    </div>
  );
};

export default FAQs;
