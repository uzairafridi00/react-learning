import React from 'react'

interface User {
    id: string;
    name: string;
    country: Country;
}

interface Country {
    name: string;
    continent: string;
}

interface Props {
  title: string;
  description: string;
  getName?: () => string;
  user: User;
}

function ComponentC(props: Props) {

    const [name, setName] = React.useState<string>("");

    const onClick = () => {
        const name = props.getName?.();
        setName(name || "");
    }

  return (
    <>
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button onClick={onClick}>Click Here</button>
            <h1>{props.user.country.name}</h1>
            {name}
        </div>
    </>
  )
}

export default ComponentC