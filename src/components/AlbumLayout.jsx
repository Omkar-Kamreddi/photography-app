import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "../styles/album.css";

import psd01 from "../assets/psd01.png";
import psd02 from "../assets/psd02.png";
import psd03 from "../assets/psd03.png";
import psd04 from "../assets/psd04.png";
import psd05 from "../assets/psd05.png";
import psd06 from "../assets/psd06.png";
import psd07 from "../assets/psd07.png";
import psd08 from "../assets/psd08.png";

function AlbumLayout() {
    const bookRef = useRef();
    const [pageIndex, setPageIndex] = useState(0);

    const pages = [psd01, psd02, psd03, psd04, psd05, psd06, psd07, psd08];

    const totalPages = pages.length;

    const nextPage = () => {
        if (pageIndex < totalPages - 1) {
            bookRef.current.pageFlip().flipNext();
            setPageIndex(pageIndex + 1);
        }
    };

    const prevPage = () => {
        if (pageIndex > 0) {
            bookRef.current.pageFlip().flipPrev();
            setPageIndex(pageIndex - 1);
        }
    };

    return (
        <section className="album">
            <div className="album-title">
                <h2>Wedding Album Designs</h2>
                <p>Beautifully crafted wedding memories</p>
                <div className="album-hint">
                    👉 Drag the page corner or use arrows
                </div>
            </div>

            <div className="album-book">
                <button
                    className="album-btn left"
                    onClick={prevPage}
                    disabled={pageIndex === 0}
                >
                    ❮
                </button>

                <HTMLFlipBook
                    ref={bookRef}
                    width={1000}
                    height={350}
                    size="stretch"
                    minWidth={280}
                    maxWidth={1200}
                    minHeight={150}
                    maxHeight={500}
                    showCover={false}
                    mobileScrollSupport={true}
                >
                    {pages.map((img, index) => (
                        <div key={index} className="album-page">
                            <img
                                src={img}
                                className="album-image"
                                alt="album page"
                            />
                        </div>
                    ))}
                </HTMLFlipBook>

                <button
                    className="album-btn right"
                    onClick={nextPage}
                    disabled={pageIndex === totalPages - 1}
                >
                    ❯
                </button>
            </div>
        </section>
    );
}

export default AlbumLayout;
