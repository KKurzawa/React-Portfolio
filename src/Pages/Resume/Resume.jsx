// import Resume1 from '../../assets/'
import React from "react";
import Skills from '../../components/Skills'



export default function Resume() {
    const onButtonClick = () => {
        const pdfUrl = "/Kris Kurzawa Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "KrisKurzawaResume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <div className="resume">
                <h2 className="page-header">Resume</h2>
                <button className='downloadButton' onClick={onButtonClick}>
                    Download PDF
                </button>
                <h2>Technical Skills</h2>
                <Skills />

            </div>





        </>

    )
}