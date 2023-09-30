const ApiData = ({elements}) => {
  return (
    <>
      <div className="cards">
        <img
        src={elements.image}
          alt={elements.description}
          width="100%"
        />
        <p> {elements.company} </p>
      </div>
    </>
  );
};
export default ApiData;
