import {

    ref,

    push,

    set,

    remove,

    get,

    onValue,

    update

} from "firebase/database";

import {

    db,

    auth

} from "../firebase/firebaseConfig";



// ==========================
// Add Comment
// ==========================

export async function addComment(

    recipeId,

    text

) {

    const user = auth.currentUser;

    if (!user) {

        throw new Error("User not logged in");

    }

    // User Data Database માંથી લાવો

    const userSnapshot = await get(

        ref(

            db,

            `users/${user.uid}`

        )

    );

    const userData = userSnapshot.val();

    const commentRef = push(

        ref(

            db,

            `comments/${recipeId}`

        )

    );

    await set(

        commentRef,

        {

            commentId: commentRef.key,

            userId: user.uid,

            userName: userData.name,

            userEmail: user.email,

            userProfile: userData.profileImage || "",

            text,

            createdAt: Date.now()

        }

    );

    await updateCommentCount(recipeId);

}



// ==========================
// Delete Comment
// ==========================

export async function deleteComment(

    recipeId,

    commentId

) {

    await remove(

        ref(

            db,

            `comments/${recipeId}/${commentId}`

        )

    );

    await updateCommentCount(recipeId);

}



// ==========================
// Realtime Comments
// ==========================

export function getCommentsRealtime(

    recipeId,

    callback

) {

    const commentsRef = ref(

        db,

        `comments/${recipeId}`

    );

    return onValue(

        commentsRef,

        (snapshot) => {

            if (!snapshot.exists()) {

                callback([]);

                return;

            }

            const comments = Object.values(

                snapshot.val()

            ).sort(

                (a, b) =>

                    b.createdAt - a.createdAt

            );

            callback(comments);

        }

    );

}



// ==========================
// Comment Count
// ==========================

export async function getCommentCount(

    recipeId

) {

    const snapshot = await get(

        ref(

            db,

            `comments/${recipeId}`

        )

    );

    if (!snapshot.exists()) {

        return 0;

    }

    return Object.keys(

        snapshot.val()

    ).length;

}



// ==========================
// Update Recipe Comment Count
// ==========================

export async function updateCommentCount(

    recipeId

) {

    const count = await getCommentCount(

        recipeId

    );

    await update(

        ref(

            db,

            `recipes/${recipeId}`

        ),

        {

            commentCount: count

        }

    );

}



// ==========================
// Realtime Comment Count
// ==========================

export function getCommentCountRealtime(

    recipeId,

    callback

) {

    const commentsRef = ref(

        db,

        `comments/${recipeId}`

    );

    return onValue(

        commentsRef,

        (snapshot) => {

            if (!snapshot.exists()) {

                callback(0);

                return;

            }

            callback(

                Object.keys(

                    snapshot.val()

                ).length

            );

        }

    );

}