const ProgressBar = ({ progress }) => {
  const Parentdiv = {
    height: "16px",
    width: "100%",
    backgroundColor: "#EBF0F5",
    borderRadius: 80,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    background: "linear-gradient(90deg, #28435E 0%, #369 100%)",
    borderRadius: 80,
    textAlign: "right",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv} className="transition-all duration-500"></div>
    </div>
  );
};

export default ProgressBar;
