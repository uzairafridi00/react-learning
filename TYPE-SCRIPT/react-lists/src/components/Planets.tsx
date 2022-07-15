import * as React from 'react';

export interface IAppProps {
}

export const Planets = (props: IAppProps) => {

    const planets = [
        { name: "Mars", isGasPlanet: false },
        { name: "Earth", isGasPlanet: false },
        { name: "Jupiter", isGasPlanet: true },
        { name: "Venus", isGasPlanet: false },
        { name: "Neptune", isGasPlanet: true },
        { name: "Uranus", isGasPlanet: true },
      ];

  return (
    <div>
      
    </div>
  );
}
