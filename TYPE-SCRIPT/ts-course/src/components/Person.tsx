 import {FC} from 'react';
 
interface PersonProp {
    name: string,
    age: number,
    email: string,
 }
 
//  export function Person (props: PersonProp) {
//    return (
//      <div>
//        <h1>{props.name}</h1>
//        <h1>{props.age}</h1>
//        <h1>{props.email}</h1>
//      </div>
//    );
//  }

// This is how we can pass Props to Functional Components

 export const Person: FC<PersonProp> = ({name, age, email}) => {
    return (
      <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{email}</h1>
      </div>
    );
  }
 