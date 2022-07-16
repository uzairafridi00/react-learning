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
      {planets.map((planet,key)=> {
        // if(planet.isGasPlanet) return <h1>{planet.name}</h1>
    //    return planet.isGasPlanet && <h1>{planet.name}</h1>
    return !planet.isGasPlanet && <h1>{planet.name}</h1>

      })}
    </div>
  );
}
