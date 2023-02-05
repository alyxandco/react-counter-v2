const Counter = ({ counter, setCounter, index }) => {
  return (
    <>
      <div>
        <section className="container">
          <div>
            {counter[index] > 0 && (
              <div>
                <button
                  onClick={() => {
                    const newCounter = [...counter];
                    newCounter[index] = newCounter[index] - 1;
                    setCounter(newCounter);
                  }}
                  counter={counter}
                  setCounter={setCounter}
                >
                  -
                </button>
              </div>
            )}
          </div>
          <div className="counter">{counter[index]}</div>
          <div>
            <div>
              {counter[index] < 10 && (
                <div>
                  <button
                    onClick={() => {
                      const newCounter = [...counter];
                      newCounter[index] = newCounter[index] + 1;
                      setCounter(newCounter);
                    }}
                    counter={counter}
                    setCounter={setCounter}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="reset">
          <div>
            <button
              onClick={() => {
                const newCounter = [...counter];
                newCounter[index] = 0;
                setCounter(newCounter);
              }}
              counter={counter}
              setCounter={setCounter}
            >
              Reset
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Counter;
