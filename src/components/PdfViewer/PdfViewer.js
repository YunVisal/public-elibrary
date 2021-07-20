import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import testPDF from '../../kp.pdf';

import './PdfViewer.less';

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
};

function PdfViewer({ start, end, bookUrl }){
    const [file, setFile] = useState(testPDF);
    const [numPages, setNumPages] = useState(null);

    function onFileChange(event) {
        setFile(event.target.files[0]);
    }

    function onDocumentLoadSuccess() {
        setNumPages(end-start);
    }

    function removeTextLayerOffset() {
        const Canvas = document.getElementsByTagName("canvas");
        let pageCanvas = Array.prototype.slice.call(Canvas)

        pageCanvas.forEach((canvas) => {
            const { style } = canvas;
            style.maxWidth = '99%';
            style.height = 'auto';
            style.margin = 'auto';
        })

        const textLayers = document.querySelectorAll(
            '.react-pdf__Page__textContent'
        );
        textLayers.forEach((layer) => {
            const { style } = layer;
            style.top = '';
            style.left = '';
            style.transform = '';
            style.height = '';
        });
    }

    let pages = []
    for (let i = start; i <= end; i++) {
        pages.push(<Page
            key={`page_${i + 1}`}
            pageNumber={i + 1}
            onLoadSuccess={removeTextLayerOffset}
        />);
    }

    return (
        <div className="Example">
            <div className="Example__container">
                <div className="Example__container__document">
                    <Document
                        file={bookUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                        options={options}
                    >
                        { 
                            // Array.from(
                            //     new Array(numPages),
                            //     (el, index) => (
                            //         <Page
                            //             key={`page_${index + 1}`}
                            //             pageNumber={index + 1}
                            //             onLoadSuccess={removeTextLayerOffset}
                            //         />
                            //     ),
                            // )
                            pages.map(page => {
                                return page
                            })
                        }
                    </Document>
                </div>
            </div>
        </div>
    );
}

export default PdfViewer;