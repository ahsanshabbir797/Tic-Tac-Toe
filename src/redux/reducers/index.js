import { combineReducers } from "redux";

import { rowColumns } from "./reducerfuncs";
import { Turner } from "./reducerfuncs";
import { checkWinner } from "./reducerfuncs";


const rootReducer = combineReducers (
    {
        rowColumns,
        Turner,
        checkWinner
        
    }
)

export default rootReducer;