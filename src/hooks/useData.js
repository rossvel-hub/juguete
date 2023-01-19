import { useState, useEffect } from 'react';
import { firebaseDB } from '../firebaseconfig'
import { collection, query, onSnapshot } from "firebase/firestore";
import { auth } from '../firebaseconfig';

export const useData = (collectionName) => {
	const [docs, setDocs] = useState([]);
	const [userId, setUserId] = useState('');
	const [userEmail, setUserEmail] = useState('');

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				console.log("collection", collectionName)
				console.log("db", firebaseDB)
				const q = query(collection(firebaseDB, collectionName));
				onSnapshot(q, (querySnapshot) => {
					const documents = [];
					querySnapshot.forEach((doc) => {
						documents.push({ id: doc.id, ...doc.data() });
					});
					setDocs(documents);
					setUserId(user.uid);
					setUserEmail(user.email);
				})
			}
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth])
	return { docs, userId, userEmail }
}

