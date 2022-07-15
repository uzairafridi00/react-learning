import React, {FC} from "react";

export interface UserProp {
  name: string;
  age: number;
}

export const App: FC<UserProp> = ({name, age}) => {
  return (
    <div>
      <h1>
        {name} {age}
      </h1>
    </div>
  );
}
