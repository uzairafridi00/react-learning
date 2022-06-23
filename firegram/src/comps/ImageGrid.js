import React from 'react'
import useFireStore from '../hooks/useFireStore'

function ImageGrid({setSelectedImg}) {

    const {docs} = useFireStore('images');
    console.log(docs);

  return (
    <div className='img-grid'>
        {docs && docs.map(doc => (
            <div className='img-wrap' key={doc.id} onClick={() => setSelectedImg(doc.url)}>
                <img src={doc.url} alt=""/>
            </div>
        ))}
    </div>
  )
}

export default ImageGrid