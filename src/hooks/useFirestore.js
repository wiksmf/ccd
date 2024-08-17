import { useState, useEffect } from 'react';
import { collection, limit, query, onSnapshot, orderBy } from "firebase/firestore";

import { db } from '../firebase/config';

export function useFirestore(collectionName, maxItems) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        let q = '';

        if (maxItems) q = query(collection(db, collectionName), orderBy('createdAt', 'desc'), limit(maxItems))
        else q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const dbItems = [];
          querySnapshot.forEach((doc) => {
            dbItems.push(doc.data());
          });
          setItems(dbItems);
          setTimeout(() => setIsLoading(false), 1500);
        });
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, [collectionName, isLoading]);

  return { items, isLoading };
}
