const Timer = ( { setHours, setMintues, setSeconds, handleStart}) => {
  return (
    <>
      <div className="flex w-6/12 m-auto justify-between">
        <input
          id="hours"
          onChange={(e) => {
            setHours(parseInt(e.target.value));
          }}
          className="border w-12 p-2 border-black"
          placeholder="HH"
        />
        <input
          onChange={(e) => {
            setMintues(parseInt(e.target.value));
          }}
          id="mintues"
          className="border w-12 p-2 border-black"
          placeholder="MM"
        />
        <input
          onChange={(e) => {
            setSeconds(parseInt(e.target.value));
          }}
          id="seconds"
          className="border w-12 p-2 border-black"
          placeholder="SS"
        />
        <button
          onClick={handleStart}
          className="bg-green-200 cursor-pointer px-4 rounded-lg"
        >
          Start
        </button>
      </div>
    </>
  );
};

export default Timer;