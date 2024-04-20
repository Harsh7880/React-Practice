const ShowTimer = ({
  hours,
  mintues,
  seconds,
  handlePause,
  handleReset,
  handleResume,
  isPaused,
}) => (
    <>
        <div className=" my-9 bg-slate-300 flex w-6/12 m-auto text-center items-center justify-center">
            <div className="text-7xl">{hours < 10 ? `0${hours}` : hours}</div>
            <span className="text-7xl">:</span>
            <div className="text-7xl">{mintues < 10 ? `0${mintues}` : mintues}</div>
            <span className="text-7xl">:</span>
            <div className="text-7xl">{seconds < 10 ? `0${seconds}` : seconds}</div>
        </div>
        <div className="my-9 flex w-6/12 m-auto justify-around">
            {!isPaused ? (
                <button
                    onClick={handlePause}
                    className="bg-green-200 cursor-pointer px-8 py-2 rounded-lg"
                >
                    Pause
                </button>
            ) : (
                <button
                    onClick={handleResume}
                    className="bg-green-200 cursor-pointer px-8 py-2 rounded-lg"
                >
                    Resume
                </button>
            )}

            <button
                onClick={handleReset}
                className="bg-green-200 cursor-pointer px-8 py-2 rounded-lg"
            >
                Reset
            </button>
        </div>
    </>
);

export default ShowTimer;
