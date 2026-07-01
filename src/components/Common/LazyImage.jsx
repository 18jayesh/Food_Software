import { useEffect, useRef, useState } from "react";

export default function LazyImage({

    src,

    alt,

    className = ""

}) {

    const imgRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(

            ([entry]) => {

                if (entry.isIntersecting) {

                    setIsVisible(true);

                    observer.disconnect();

                }

            },

            {

                rootMargin: "200px"

            }

        );

        if (imgRef.current) {

            observer.observe(imgRef.current);

        }

        return () => observer.disconnect();

    }, []);

    return (

        <div

            ref={imgRef}

            className={`

                relative

                overflow-hidden

                bg-gray-100

                ${className}

            `}

        >

            {

                !loaded &&

                <div

                    className="

                        absolute

                        inset-0

                        animate-pulse

                        bg-gradient-to-r

                        from-gray-200

                        via-gray-100

                        to-gray-200

                    "

                />

            }

            {

                isVisible &&

                <img

                    src={src}

                    alt={alt}

                    loading="lazy"

                    decoding="async"

                    onLoad={() => setLoaded(true)}

                    className={`

                        w-full

                        h-full

                        object-cover

                        transition-all

                        duration-700

                        ${loaded

                            ? "opacity-100 scale-100"

                            : "opacity-0 scale-110"

                        }

                    `}

                />

            }

        </div>

    );

}