const Exponent = ({ num, exponent }) => {
  let multiplication = "";

  for (let i = 0; i < exponent; i++) {
    multiplication += num;
    if (i < exponent - 1) {
      multiplication += " * ";
    }
  }

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num}
        <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {multiplication} ={" "}
        <span className="total">{Math.pow(num, exponent)}</span>
      </p>
    </div>
  );
};

export default Exponent;
