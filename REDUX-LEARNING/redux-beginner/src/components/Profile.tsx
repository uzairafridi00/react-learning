import React, {FC} from 'react';

export interface ProfileProp {
}

export const Profile: FC<ProfileProp> = ({}) => {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name:</p>
      <p>Age:</p>
      <p>Email:</p>
    </div>
  );
}
