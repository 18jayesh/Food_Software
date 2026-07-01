import {

    Trash2,

    UserCircle2

} from "lucide-react";

import {

    auth

} from "../../firebase/firebaseConfig";

import {

    deleteComment

} from "../../services/commentService";

export default function CommentItem({

    comment,

    recipeId

}) {

    function formatTime(timestamp) {

        const now = Date.now();

        const diff = Math.floor(

            (now - timestamp) / 1000

        );

        if (diff < 60) {

            return `${diff}s ago`;

        }

        if (diff < 3600) {

            return `${Math.floor(diff / 60)}m ago`;

        }

        if (diff < 86400) {

            return `${Math.floor(diff / 3600)}h ago`;

        }

        if (diff < 604800) {

            return `${Math.floor(diff / 86400)}d ago`;

        }

        return new Date(timestamp).toLocaleDateString();

    }

    async function handleDelete() {

        try {

            await deleteComment(

                recipeId,

                comment.commentId

            );

        }

        catch (error) {

            console.error(error);

        }

    }

    return (

        <div

            className="

                flex

                gap-3

                pb-5

                border-b

                border-gray-100

            "

        >

            {/* Avatar */}

            <div>

                {

                    comment.userProfile

                        ? (

                            <img

                                src={comment.userProfile}

                                alt={comment.userName}

                                className="

                    w-11

                    h-11

                    rounded-full

                    object-cover

                "

                            />

                        )

                        : (

                            <UserCircle2

                                size={44}

                                className="text-orange-500"

                            />

                        )

                }

            </div>

            {/* Content */}

            <div className="flex-1">

                <div

                    className="

                        flex

                        items-center

                        justify-between

                    "

                >

                    <div>

                        <h4

                            className="

                                font-semibold

                                text-gray-900

                            "

                        >

                            {comment.userName}

                        </h4>

                        <span

                            className="

                                text-xs

                                text-gray-400

                            "

                        >

                            {formatTime(comment.createdAt)}

                        </span>

                    </div>

                    {

                        auth.currentUser?.uid === comment.userId && (

                            <button

                                onClick={handleDelete}

                                className="

                                    w-9

                                    h-9

                                    rounded-full

                                    flex

                                    items-center

                                    justify-center

                                    hover:bg-red-50

                                    transition-all

                                "

                            >

                                <Trash2

                                    size={18}

                                    className="text-red-500"

                                />

                            </button>

                        )

                    }

                </div>

                <p

                    className="

                        mt-3

                        text-gray-700

                        leading-7

                        break-words

                    "

                >

                    {comment.text}

                </p>

            </div>

        </div>

    );

}