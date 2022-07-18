import React, {FC} from 'react';
import { useSelector } from 'react-redux';

export interface ProfileProp {
}

export const Profile: FC<ProfileProp> = ({}) => {

  const user = useSelector((state)=> state.user.value)

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
