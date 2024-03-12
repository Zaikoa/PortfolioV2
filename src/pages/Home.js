import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { pdfjs } from 'react-pdf';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdf from '../external/Forzano_Jarett_Resume_2024.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Home = () => {
    const openPluginInstance  = defaultLayoutPlugin({
        toolbarPlugin: {
          openPlugin: {
            enableShortcuts: false,
          },
        },
      });

  return (
    <div className='container'>
      <br />
      <div className='pdf-container'>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
          <Viewer fileUrl={pdf} plugins={[openPluginInstance]} theme="dark" />
        </Worker>
      </div>
    </div>
  );
};

export default Home;
