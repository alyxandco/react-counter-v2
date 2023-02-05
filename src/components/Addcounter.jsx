const Addcounter = ({ addcount, setAddcount }) => {
  const addcountLength = addcount.length;
  return (
    <section className="addcounter">
      {addcountLength <= 2 && (
        <div>
          <button
            onClick={() => {
              const newAddcount = [...addcount];
              newAddcount.push(0);
              setAddcount(newAddcount);
            }}
            addcount={addcount}
            setAddcount={setAddcount}
          >
            Add counter
          </button>
        </div>
      )}
    </section>
  );
};

export default Addcounter;
