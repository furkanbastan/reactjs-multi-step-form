import { createContext, useContext } from "react";

const StepsContext = createContext();
const StepsDispatchContext = createContext();

export const StepProvider = ({ children, steps, dispatch }) => (
    <StepsContext.Provider value={steps}>
        <StepsDispatchContext.Provider value={dispatch}>
            {children}
        </StepsDispatchContext.Provider>
    </StepsContext.Provider>
);

export const useStepsContext = () => useContext(StepsContext);
export const useStepsDispatchContext = () => useContext(StepsDispatchContext);

export const stepsReducer = (state, action) => {
    let _counter = 0;

    switch (action.type) {
        case "NEXT_STEP":
            _counter = state.counter + 1 == state.count ? state.counter : state.counter + 1;
            return {
                ...state,
                counter: _counter,
                current: state.steps[_counter],
            };

        case "GO_BACK":
            _counter = state.counter - 1 < 0 ? 0 : state.counter - 1;
            return {
                ...state,
                counter: _counter,
                current: state.steps[_counter],
            };
    }
};
