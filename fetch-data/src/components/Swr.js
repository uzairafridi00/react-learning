import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((resp) => resp.json());

function Swr() {
  const { data, error } = useSWR("https://dog.ceo/api/breeds/image/random", fetcher, {
    suspense: true,
  });
  if (error) {
    return <h1>Some External Issue</h1>
  }

  return (
    <>
      <div>
        <h1>SWR API</h1>
        <img src={data.message} alt="Image Loading..." />
      </div>
    </>
  );
}
export default Swr;
