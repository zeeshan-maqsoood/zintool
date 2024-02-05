import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import editPdf from "../../public/Images/editPDF.png";
import crossPdf from "../../public/Images/Crop-PDF.svg";
import resplace from "../../public/Images/Crop-PDF.svg";
import rotatePdf from "../../public/Images/Rotate-PDF.svg";
import pdfToWord from "../../public/Images/pdf-word.svg";
import pdfTOText from "../../public/Images/PDF-TXT.svg";
import pdfToExcel from "../../public/Images/pdf-excel.svg";
import pdfToPPT from "../../public/Images/PDF-PPT.svg";
import PdfToJpg from "../../public/Images/jpg-pdf.svg";

const CardSection = ({ paddingTop, title, cardHeight }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cardSelection = [
    {
      image: editPdf,
      title: "Edit PDF",
      description: "Use the best pdf to edit pdf in your Browdser",
      alt: "Edit PDF",
    },
    {
      image: crossPdf,
      title: "Crop PDF",
      description: "Cross Pdf online to adjusted area and adjust the margin",
    },
    { image: resplace, title: "Replace Text", description: "The easiest to replace text online" },
    { image: rotatePdf, title: "Rotate PDF", description: "Rotate and save your pdf online" },
  ];

  const sliderCard = [
    { image: pdfToWord, title: "PDF To Word", description: "Easily Convert Pdf to world" },
    { image: pdfToPPT, title: "PDF to PPT", description: "Convert PDf to Powerpoint online" },
    { image: pdfToExcel, title: "PDF TO Excel", description: "" },
    { image: PdfToJpg, title: "PDF TO JPG", description: "Convert Pdf to xlss for free" },
    { image: pdfTOText, title: "PDF To TXT", description: "Convert pdf file to optimized image" },
  ];

  return (
    <>
      {title === "Convert From PDF" ? (
        <div className="mx-auto px-20 mb-20 first-letter:bg-white">
          <h2 className="text-3xl ms-4 font-extrabold text-left mt-8 mb-12 h-1000 ">
            {title}
          </h2>
          <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
            <Slider {...settings}>
              {sliderCard.map((data, index) => (
                <div
                  key={index}
                  className="p-6 mt-20 border-spacing-1 hover:shadow-xl  rounded-lg mx-2"
                  style={{ height: cardHeight }}
                >
                  <div className="mb-5">
                    <Image
                      src={data.image}
                      alt={data.alt}
                      width={90}
                      height={90}
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{data.title}</h3>
                  <p className="text-sm leading-6 text-gray-600">
                    {data.description}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full mx-auto bg-gray-50  px-20 mb-4 ">
            <h2 className="text-3xl font-extrabold text-left mt-8 h-1000 ">
              {title}
            </h2>
            <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
              <div
                className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-5 pt-12 bg-gray-50  lg:pb-20"
                style={{ cursor: "auto", paddingTop: paddingTop }}
              >
                {cardSelection.map((data, index) => (
                  <div
                    key={index}
                    className="p-3 bg-white border-neutral-800 rounded-lg"
                    style={{ height: cardHeight }}
                  >
                    <div className="mb-5">
                      <Image
                        src={data.image}
                        alt={data.alt}
                        width={100}
                        height={100}
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{data.title}</h3>
                    <p className="text-sm leading-6 text-gray-600">
                      {data.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CardSection;
