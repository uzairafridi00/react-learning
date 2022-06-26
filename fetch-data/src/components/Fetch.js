import React, {useState, useEffect} from 'react'

function Fetch() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random").then((response) => response.json())
        .then((apiData)=> {
            setData(apiData.message)
        })
    }, []);

  return (
    <>
    <div>
        <h1>Fetch API</h1>
        <img src={data} alt="Image Loading..." />
    </div>
    </>
  )
}

export default Fetch