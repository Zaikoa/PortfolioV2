import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Forzano_Jarett_Resume_2024 from '../external/Forzano_Jarett_Resume_2024.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Resume = () => {
return (
 <div>
 <Document file={Forzano_Jarett_Resume_2024}>
 <Page pageNumber={1} renderTextLayer={false}/>
 </Document>
 </div>
 );
};
export default Resume;