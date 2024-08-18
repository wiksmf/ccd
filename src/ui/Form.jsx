import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

import { useStorage } from "../hooks/useStorage";

import "./Form.css"
import Loader from "./Loader";

function Form() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [selectedBlogMedia, setSelectedBlogMedia] = useState(null);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [isLoadingMedia, setIsLoadingMedia] = useState(false);
  const [isLoadingBlog, setIsLoadingBlog] = useState(false);
  const { startUpload, progress } = useStorage();
  const { logout, isLoading } = UserAuth();
  const navigate = useNavigate();
  const inputMedia = useRef(null);
  const inputBlog = useRef(null);
  const inputTitle = useRef(null);
  const inputContent = useRef(null);

  const handleMediaFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedMedia(e.target.files[0]);
    }
  }

  const handleBlogMediaChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedBlogMedia(e.target.files[0]);
    }
  }

  const handleTitleChange = (e) => {
    if (e.target.value) {
      setPostTitle(e.target.value);
    }
  }

  const handleContentChange = (e) => {
    if (e.target.value) {
      setPostContent(e.target.value);
    }
  }

  const handleMediaFormSubmit = (e) => {
    e.preventDefault();
    setIsLoadingMedia(true);

    if (selectedMedia) {
      startUpload(selectedMedia)
    }

    inputMedia.current.value = "";
    setSelectedMedia(null);
    setIsLoadingMedia(false);
  }

  const handleBlogFormSubmit = (e) => {
    e.preventDefault();
    setIsLoadingBlog(true);

    if (selectedBlogMedia && postTitle && postContent) {
      startUpload(selectedBlogMedia, postTitle, postContent);
    }

    inputBlog.current.value = "";
    inputTitle.current.value = "";
    inputContent.current.value = "";
    setSelectedBlogMedia(null);
    setPostTitle("");
    setPostContent("");
    setIsLoadingBlog(false);
  }

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <main id="form" className="media">
      <section className="section">
        <div className="mw-wrapper">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <button className="btn-cta" onClick={handleLogout}>
                Logout
              </button>

              <div className="form-wrapper">
                <form id="form-media" className="form" onSubmit={handleMediaFormSubmit}>
                  <p className="p">Galeria</p>
                  <label className="label">
                    <span>Zdjęcie lub video</span>
                    <input type="file" ref={inputMedia} className="input" onChange={handleMediaFileChange} required />
                  </label>

                  <button type="submit" className="btn-form" disabled={progress}>{isLoadingMedia ? "Ładowanie" : "Dodaj do galerii"}</button>
                </form>

                <form id="form-blog" className="form" onSubmit={handleBlogFormSubmit}>
                  <p className="p">Blog</p>
                  <label className="label">
                    <span>Zdjęcie</span>
                    <input type="file" ref={inputBlog} className="input" onChange={handleBlogMediaChange} required />
                  </label>

                  <label className="label">
                    <span>Tytuł</span>
                    <input type="text" ref={inputTitle} className="input" onChange={handleTitleChange} required />
                  </label>

                  <label className="label">
                    <span>Treść</span>
                    <textarea type="text" ref={inputContent} className="textarea" onChange={handleContentChange} required />
                  </label>

                  <button type="submit" className="btn-form" disabled={progress}>{isLoadingBlog ? "Ładowanie" : "Dodaj post"}</button>

                </form>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}

export default Form;
