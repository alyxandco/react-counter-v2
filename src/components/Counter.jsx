const Counter = ({ counter, setCounter, index }) => {
  const handleClickMinus = () => {
    const newCounter = [...counter];
    newCounter[index]--;
    setCounter(newCounter);
  };

  const handleClickPlus = () => {
    const newCounter = [...counter];
    newCounter[index]++;
    setCounter(newCounter);
  };

  const handleReset = () => {
    const newCounter = [...counter];
    newCounter[index] = 0;
    setCounter(newCounter);
  };

  return (
    <>
      <div>
        <section className="container">
          <div>
            {counter[index] > 0 && (
              <div>
                <button onClick={handleClickMinus}>-</button>
              </div>
            )}
          </div>
          <div className="counter">{counter[index]}</div>
          <div>
            <div>
              {counter[index] < 10 && (
                <div>
                  <button onClick={handleClickPlus}>+</button>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="reset">
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Counter;
