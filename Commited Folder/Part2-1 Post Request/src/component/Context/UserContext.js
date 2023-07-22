import React from "react";

const userContext = React.createContext("Guest"); //parameter a defoult value set kora jay

const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer;

export { UserConsumer, UserProvider };
export default userContext;
