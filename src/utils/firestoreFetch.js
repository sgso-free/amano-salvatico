import db from './firebaseConfig';
import {doc, collection,getDoc,getDocs,query,where,orderBy, setDoc} from "firebase/firestore";

export const firestoreFetchOneProd = async (idItem) => {

        const docRef = doc(db, "products", idItem);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
                return {
                        id: idItem,
                        ...docSnap.data()
                }
        } else {
                console.log("No existe el documento!");
        }

}

export const firestoreFetchProductsBy = async (idCategory) => {

        
        let qy;
        if (idCategory) {
                console.log("FETCHHHHHHHHHH:" ,idCategory);
                qy = query(collection(db,"products"),where('idCategory', '==',parseInt(idCategory)));
        } else {
                console.log("FETCHHHHHHHHHH:" ,"NO CATEGORY");
                qy = query(collection(db,"products"), orderBy('title'));
        }
        
        const docsSnap = await getDocs(qy);

        docsSnap.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
              });

        const dataFromFirestore = docsSnap.docs.map(document => ({
                id: document.id,
                ...document.data()
        }));
        
        return dataFromFirestore; 

}

export const createOrderInFirestore = async (order) => {

        const newOrderRef = doc(collection(db,"orders"));
        await setDoc(newOrderRef,order)
        return newOrderRef

}