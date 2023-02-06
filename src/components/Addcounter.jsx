const Addcounter = ({ addcount, setAddcount }) => {
  const addcountLength = addcount.length;

  const handleNewAddcount = () => {
    const newAddcount = [...addcount];
    newAddcount.push(0);
    setAddcount(newAddcount);
  };

  return (
    <section className="addcounter">
      {addcountLength <= 2 && (
        <div>
          <button onClick={handleNewAddcount}>Add counter</button>
        </div>
      )}
    </section>
  );
};

export default Addcounter;
