"use client";
import React, { useState } from "react";
import CardSection from "@/Components/CardsSection";
import ConversionCard from "@/Components/conversionCard";
import Footer from "@/Components/Footer";
import HeaderComponent from "@/Components/HeaderComponent";
const Home = () => {
   const selectioncard = [
    {
      image: "../public/Images/editPDF.svg",
      title: "Edit Pdf",
      description: "",
    },
  
    {
      image: "",
      title: "Crop Pdf",
      description: "",
    },
    {
      image: "",
      title: "Replace PDf",
      description: "",
    },
    {
      image:"",
      title:"",
      description:""
    }
  ];
  return (
    <>
    <HeaderComponent/>
    <div className="font-sans bg-gray-50">

<CardSection paddingTop={'6rem'} title={"Your Bookmark"} cardHeight={"16rem"} selectioncard={selectioncard} />
<CardSection paddingTop={'6rem'} title={"Convert From PDF"} cardHeight={"16rem"} selectioncard={selectioncard}/>

<ConversionCard paddingTop={'6rem'} title={"Convert From PDF"}/>
<ConversionCard paddingTop={'6rem'} title={"Convert to PDF"}/>

<Footer/>

    </div>
  

    </>
  );
};

export default Home;
