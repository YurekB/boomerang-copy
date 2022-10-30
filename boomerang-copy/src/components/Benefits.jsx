import BenefitsData from "./BenefitsData";

const Benefits = () => {
  console.log(BenefitsData, "LOG");
  return (
    <div class="benefits-section">
      <h2 class="subheading">The extra benefits</h2>
      <h5>
        By renting with Boomerang, we have you covered with the following...
      </h5>
      <div className="benefits-grid">
        {BenefitsData.map((e) => {
          return (
            <div class="grid-item" style={{ backgroundImage: `url(${e.pic})` }}>
              <h2>{e.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
