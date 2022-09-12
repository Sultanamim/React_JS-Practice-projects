import React, { useState } from "react";
import UseStateHook from "./useStateHook/functionComponent";
import UseEffectHook from "./useEffectHook/functionComponent";
import Usecallback from "./useCallback & useMemo hook/Main";
import UseRef from "./useRefHook/Form";
import UseReducer from "./useReducerHook/Main";
import CustomHook from "./customHooks/LayoutComponentOne";
import Logo from "./Components/Logo";
import Tutorial from "./Components/styled-components/Tutorial";

export default function Main() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <UseStateHook />
      <div className="hooks">
        <h1>{"useEffect() Hook"}</h1>
        <div>{show && <UseEffectHook />}</div>
        <div className="btn">
          <button
            type="button"
            onClick={() => setShow((prevShow) => !prevShow)}
          >
            {show ? "Hide post" : "Show post"}
          </button>
        </div>
      </div>
      <Usecallback />
      <UseRef />
      <UseReducer />
      <CustomHook />
      <Logo />
      <Tutorial />
    </div>
  );
}
