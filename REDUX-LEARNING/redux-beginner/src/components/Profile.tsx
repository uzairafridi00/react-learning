import React, {FC} from 'react';
import { useSelector } from 'react-redux';

export interface ProfileProp {
}

export const Profile: FC<ProfileProp> = ({}) => {

  const user = useSelector<any>((state)=> state.user.value);
  const themeColor = useSelector<any>((state)=> state.theme.value);

  return (
    <div style={{color: themeColor}}>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
