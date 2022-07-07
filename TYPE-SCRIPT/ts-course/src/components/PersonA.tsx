import React, {FC, ChangeEvent, useState} from 'react';
 
interface PersonProp {
    name: string,
    age: number,
    email: string,
 }

 export const PersonA: FC<PersonProp> = ({name, age, email}) => {

    const [country, setCountry] = useState<string | null>("")

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }

    return (
      <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{email}</h1>
        <input type="text" placeholder='Write Down...' onChange={handleChange}/>
        <h1>{country}</h1>
      </div>
    );
  }
 