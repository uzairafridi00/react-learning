import React from 'react'

interface Props {
  title: string;
  description: string;
  getName?: () => string;
}

function ComponentB(props: Props) {

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
            {name}
        </div>
    </>
  )
}

export default ComponentB