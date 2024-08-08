import { useState, useEffect } from 'react';
import { collection, query, getDocs, where, doc, getDoc } from "firebase/firestore";

import { db } from '../firebase/config';

export function useFirestoreCollection(collectionName, postId = '') {
  const [post, setPost] = useState([]);

  useEffect(() => {
    if (!postId) return;

    const getPost = async () => {
      try {
        const q = query(collection(db, collectionName), where('id', '==', postId.postId));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.size === 1) {
          const postData = querySnapshot.docs[0].id;
          const docRef = doc(db, "posts", postData);
          const docSnap = await getDoc(docRef);
          const postDatas = docSnap.data();

          setPost(postDatas);
        } else {
          console.log('Post not found');
          return null;
        }
      } catch (error) {
        console.error('Error retrieving post:', error);
      }
    }
    getPost();
  }, [postId]);


  return { post };
}
