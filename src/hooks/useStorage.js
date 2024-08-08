import { useState } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from '../firebase/config';

import { v4 as uuidv4 } from 'uuid'

const useStorage = () => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const isVideo = ['mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'mp4']

  const startUpload = (file, postTitle, postContent) => {
    if (!file) return;

    const fileId = uuidv4();
    const formatFile = file.type.split('/')[1];
    const dbFolder = isVideo.includes(formatFile) ? 'videos' : 'photos'

    const storageRef = ref(storage, `gallery/${dbFolder}/${fileId}.${formatFile}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        setError(error)
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        setUrl(downloadURL);
        setProgress(0)

        if (postTitle && postContent) {
          const postId = uuidv4();
          // Add a new document with a generated id.
          await addDoc(collection(db, 'posts'), {
            id: postId,
            title: postTitle,
            content: postContent,
            url: downloadURL,
            createdAt: new Date()
          });
        } else {
          // Add a new document with a generated id.
          await addDoc(collection(db, dbFolder), {
            id: fileId,
            url: downloadURL,
            createdAt: new Date(),
          });
        }

      }
    )
  }

  return { progress, error, url, startUpload };
}

export default useStorage;