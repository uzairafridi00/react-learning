import React, { FC, ChangeEvent, useState } from "react";
import { PersonProp } from "../interfaces/Interfaces";

export const EnumAndType: FC<PersonProp> = ({ name, age, email, hairColor }) => {
  const [country, setCountry] = useState<string | null>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <>
      <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{email}</h1>
        <input
          type="text"
          placeholder="Write Down..."
          onChange={handleChange}
        />
        <h1>{country}</h1>
        <h2>{hairColor}</h2>
      </div>
    </>
  );
};
