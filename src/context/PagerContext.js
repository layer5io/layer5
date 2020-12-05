import React, {createContext, useState} from "react";

const pagerContext = createContext(null);

export const PagerProvider = props => {
    const [page, setPage] = useState(0);
    return (
        <pagerContext.Provider
            value={{
                page,
                setPage : (pageNo) => setPage(pageNo)
            }}>
            {props.children}
        </pagerContext.Provider>
    );
};

export default pagerContext;
