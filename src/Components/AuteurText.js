const AuteursText = ({ img, text }) => {
  return (
    <div>
      <div>
        <img src={img} />
      </div>
      <div className="auteur-description-text">{text}</div>
    </div>
  );
};
export default AuteursText;
