import React from "react";
import { UserContext, SecondContext } from "../App";
function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <SecondContext.Consumer>
              {(secondName) => {
                return (
                  <div>
                    User first name is - {user}, second name is- {secondName}
                  </div>
                );
              }}
            </SecondContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
