import React, {useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Modals from './comps/Modals';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {/* only if this is true then re-render the Modal */}
      {selectedImg && <Modals selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;