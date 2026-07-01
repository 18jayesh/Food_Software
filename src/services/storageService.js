import {
    ref,
    uploadBytes,
    getDownloadURL
} from "firebase/storage";

import {
    storage
} from "../firebase/firebaseConfig";

export async function uploadRecipeImage(imageFile) {

    if (!imageFile) return "";

    const imageRef = ref(

        storage,

        `recipes/${Date.now()}_${imageFile.name}`

    );

    await uploadBytes(

        imageRef,

        imageFile

    );

    const imageUrl = await getDownloadURL(imageRef);

    return imageUrl;

}