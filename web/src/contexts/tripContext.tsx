import createContext from "./createContext";
import { axios } from "../axios";

type ActionType = "fetch_trip_lists" | "set_load_status" | "set_error_status";

type Trip = {
  title: string;
  photos: string[];
};

type TripAction = {
  type: ActionType;
  payload: TripState;
};

type TripState = {
  trips?: Trip[];
  loading?: boolean;
  error?: null;
};

const tripReducer = (state: TripState, action: TripAction): TripState => {
  switch (action.type) {
    case "fetch_trip_lists": {
      return { ...state, trips: action.payload.trips };
    }

    case "set_load_status": {
      return { ...state, loading: action.payload.loading };
    }

    case "set_error_status": {
      return { ...state, error: action.payload.error };
    }

    default:
      return state;
  }
};

const fetchTripLists = (dispatch: React.Dispatch<TripAction>) => async () => {
  dispatch({ type: "set_load_status", payload: { loading: true } });

  try {
    const response = await axios.get("/trips");
    const trips = response.data;

    dispatch({ type: "fetch_trip_lists", payload: { trips } });
    dispatch({ type: "set_load_status", payload: { loading: false } });
    return;
  } catch (err) {
    dispatch({ type: "set_error_status", payload: { error: err.message } });
    dispatch({ type: "set_load_status", payload: { loading: false } });
    return;
  }
};

export const { Provider, Context } = createContext<TripState, TripAction>(
  tripReducer,
  { fetchTripLists },
  { trips: [], loading: false, error: null }
);
