import { useState, useRef } from 'react'

import useStorage from '../hooks/useStorage';

import './Form.css'

function FormBlog() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const { startUpload, progress } = useStorage();
  const inputFile = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleTitleChange = (e) => {
    if (e.target.value) {
      setPostTitle(e.target.value)
    }
  }

  const handleContentChange = (e) => {
    if (e.target.value) {
      setPostContent(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedFile && postTitle && postContent) startUpload(selectedFile, postTitle, postContent)
    setSelectedFile(null);
    setPostTitle(e.target.value);
    setPostContent(e.target.value);

    inputFile.current.value = "";
  }

  return (
    <form id="upload" className="form" onSubmit={handleSubmit}>
      <h1 className='legend'>Blog</h1>
      <label className="label">
        <span>Zdjecie</span>
        <input type="file" ref={inputFile} className="input" onChange={handleFileChange} />
      </label>

      <label className="label">
        <span>Tytul</span>
        <input type="text" ref={inputFile} className="input" onChange={handleTitleChange} />
      </label>

      <label className="label">
        <span>Tresc</span>
        <textarea type="text" ref={inputFile} className="input" onChange={handleContentChange} />
      </label>

      <button type="submit" className="btn" disabled={progress}>Dodaj post</button>
    </form>
  )
}

export default FormBlog
