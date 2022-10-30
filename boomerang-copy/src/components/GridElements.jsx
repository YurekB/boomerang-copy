interface GridElementProps {
  value?: string;
  fileName?: string;
}

const GridElement = (props: GridElementProps) => {
  return (
    <div
      className="grid-item"
      style={{
        borderRadius: "6.46418px",
        backgroundImage: `url(${props.fileName})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "5px",
      }}
    >
      <h2>{props.value}</h2>
    </div>
  );
};

export default GridElement;
