import { useState, useRef } from 'react'

import useStorage from '../hooks/useStorage';

import './Form.css'

function FormGallery() {
  const [selectedFile, setSelectedFile] = useState(null);
  const { startUpload, progress } = useStorage();
  const inputFile = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedFile) startUpload(selectedFile)
    setSelectedFile(null)
    inputFile.current.value = "";
  }

  return (
    <form id="upload" className="form" onSubmit={handleSubmit}>
      <h1 className='legend'>Galeria</h1>
      <label className="label">
        <span>Zdjecie lub video</span>
        <input type="file" ref={inputFile} className="input" onChange={handleFileChange} />
      </label>

      <button type="submit" className="btn" disabled={progress}>Dodaj do galerii</button>
    </form>
  )
}

export default FormGallery
