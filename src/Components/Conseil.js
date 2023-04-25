const Conseil = ({ number, text }) => {
  return (
    <>
      <div className="conseil-title">Conseil {number}</div>
      <div className="conseil-text">
        <div>{text?.paragraph?.premier}</div>
        <div>{text?.paragraph?.deux}</div>
        <div>{text?.paragraph?.trois}</div>
      </div>
    </>
  );
};
export default Conseil;
