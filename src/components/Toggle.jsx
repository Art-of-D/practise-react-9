import useToggle from "./hooks/useToggle";

const Toggle = () => {
  const [toggleValue, setToggleValue] = useToggle(false);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={setToggleValue}>
        toggle
      </button>
      {toggleValue && <h4>Toggle-moggle</h4>}
    </div>
  );
};
export default Toggle;
