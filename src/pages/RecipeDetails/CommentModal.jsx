import {

    useEffect,

    useState

} from "react";

import {

    AnimatePresence,

    motion

} from "framer-motion";

import {

    X,

    MessageCircle,

    SendHorizontal

} from "lucide-react";

import {

    addComment,

    getCommentsRealtime

} from "../../services/commentService";

import CommentItem from "./CommentItem";

export default function CommentModal({

    open,

    onClose,

    recipeId

}) {

    const [

        comments,

        setComments

    ] = useState([]);

    const [

        text,

        setText

    ] = useState("");

    const [

        sending,

        setSending

    ] = useState(false);

    useEffect(() => {

        if (!recipeId) return;

        const unsubscribe = getCommentsRealtime(

            recipeId,

            setComments

        );

        return () => unsubscribe();

    }, [

        recipeId

    ]);

    async function handleSend() {

        if (!text.trim()) return;

        try {

            setSending(true);

            await addComment(

                recipeId,

                text.trim()

            );

            setText("");

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setSending(false);

        }

    }

    return (

        <AnimatePresence>

            {

                open && (

                    <>

                        {/* Overlay */}

                        <motion.div

                            initial={{

                                opacity: 0

                            }}

                            animate={{

                                opacity: 1

                            }}

                            exit={{

                                opacity: 0

                            }}

                            onClick={onClose}

                            className="

                                fixed

                                inset-0

                                z-[999]

                                bg-black/60

                                backdrop-blur-sm

                            "

                        />

                        {/* Modal */}

                        <motion.div

                            initial={{

                                y: 100,

                                opacity: 0

                            }}

                            animate={{

                                y: 0,

                                opacity: 1

                            }}

                            exit={{

                                y: 100,

                                opacity: 0

                            }}

                            transition={{

                                duration: .25

                            }}

                            onClick={(e)=>e.stopPropagation()}

                            className="

                                fixed

                                z-[1000]

                                bg-white

                                shadow-2xl

                                flex

                                flex-col

                                overflow-hidden

                                bottom-0

                                left-0

                                right-0

                                h-[85vh]

                                rounded-t-[30px]

                                md:top-1/2

                                md:left-1/2

                                md:right-auto

                                md:bottom-auto

                                md:h-[80vh]

                                md:w-[650px]

                                md:-translate-x-1/2

                                md:-translate-y-1/2

                                md:rounded-3xl

                            "

                        >
                                                        {/* ================= Header ================= */}

                            <div

                                className="

                                    sticky

                                    top-0

                                    bg-white

                                    z-20

                                    border-b

                                    border-gray-100

                                    px-5

                                    py-4

                                    flex

                                    items-center

                                    justify-between

                                "

                            >

                                <div>

                                    <h2

                                        className="

                                            text-xl

                                            font-bold

                                            text-gray-900

                                        "

                                    >

                                        Comments

                                    </h2>

                                    <p

                                        className="

                                            text-sm

                                            text-gray-500

                                            mt-1

                                        "

                                    >

                                        {comments.length} Comments

                                    </p>

                                </div>

                                <button

                                    onClick={onClose}

                                    className="

                                        w-10

                                        h-10

                                        rounded-full

                                        flex

                                        items-center

                                        justify-center

                                        hover:bg-gray-100

                                        transition-all

                                    "

                                >

                                    <X

                                        size={22}

                                    />

                                </button>

                            </div>



                            {/* ================= Comment Body ================= */}

                            <div

                                className="

                                    flex-1

                                    overflow-y-auto

                                    px-5

                                    py-5

                                "

                            >

                                {

                                    comments.length === 0 ? (

                                        <div

                                            className="

                                                h-full

                                                flex

                                                flex-col

                                                items-center

                                                justify-center

                                                text-center

                                            "

                                        >

                                            <div

                                                className="

                                                    w-24

                                                    h-24

                                                    rounded-full

                                                    bg-orange-100

                                                    flex

                                                    items-center

                                                    justify-center

                                                    mb-5

                                                "

                                            >

                                                <MessageCircle

                                                    size={42}

                                                    className="text-orange-500"

                                                />

                                            </div>

                                            <h3

                                                className="

                                                    text-2xl

                                                    font-bold

                                                    text-gray-900

                                                "

                                            >

                                                No Comments Yet

                                            </h3>

                                            <p

                                                className="

                                                    mt-3

                                                    text-sm

                                                    text-gray-500

                                                    max-w-xs

                                                    leading-6

                                                "

                                            >

                                                Be the first person to share

                                                your opinion about this recipe.

                                            </p>

                                        </div>

                                    ) : (

                                        <div

                                            className="

                                                space-y-5

                                            "

                                        >

                                            {

                                                comments.map((comment)=>(

                                                    <CommentItem

                                                        key={comment.commentId}

                                                        comment={comment}

                                                        recipeId={recipeId}

                                                    />

                                                ))

                                            }

                                        </div>

                                    )

                                }

                            </div>
                                                        {/* ================= Bottom Input ================= */}

                            <div

                                className="

                                    border-t

                                    border-gray-100

                                    bg-white

                                    p-4

                                    sticky

                                    bottom-0

                                "

                            >

                                <div

                                    className="

                                        flex

                                        items-center

                                        gap-3

                                    "

                                >

                                    <input

                                        type="text"

                                        value={text}

                                        onChange={(e) =>

                                            setText(

                                                e.target.value

                                            )

                                        }

                                        onKeyDown={(e) => {

                                            if (

                                                e.key === "Enter"

                                            ) {

                                                handleSend();

                                            }

                                        }}

                                        placeholder="Write a comment..."

                                        className="

                                            flex-1

                                            h-12

                                            rounded-full

                                            border

                                            border-gray-200

                                            px-5

                                            text-sm

                                            outline-none

                                            focus:border-orange-500

                                            transition-all

                                        "

                                    />

                                    <button

                                        onClick={handleSend}

                                        disabled={

                                            sending ||

                                            !text.trim()

                                        }

                                        className={`

                                            w-12

                                            h-12

                                            rounded-full

                                            flex

                                            items-center

                                            justify-center

                                            transition-all

                                            ${

                                                sending ||

                                                !text.trim()

                                                    ? "bg-gray-300 cursor-not-allowed"

                                                    : "bg-orange-500 hover:bg-orange-600"

                                            }

                                            text-white

                                        `}

                                    >

                                        {

                                            sending

                                                ? (

                                                    <div

                                                        className="

                                                            w-5

                                                            h-5

                                                            border-2

                                                            border-white

                                                            border-t-transparent

                                                            rounded-full

                                                            animate-spin

                                                        "

                                                    />

                                                )

                                                : (

                                                    <SendHorizontal

                                                        size={20}

                                                    />

                                                )

                                        }

                                    </button>

                                </div>

                            </div>

                        </motion.div>

                    </>

                )

            }

        </AnimatePresence>

    );

}