import React, { useReducer, ReactChild } from "react";

type Actions<A> = {
  [key: string]: (dispatch: React.Dispatch<A>) => () => void;
};

type ActionsKey = {
  [key: string]: () => void;
};

interface ContextProps<S, A> {
  state: S;
  dispatch?: A;
}

function createContext<S, A>(
  reducer: (state: S, action: A) => S,
  actions: Actions<A>,
  defaultValue: S
) {
  const Context = React.createContext({} as ContextProps<S, A>);

  const Provider = ({ children }: { children: ReactChild }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions: ActionsKey = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
}

export default createContext;
