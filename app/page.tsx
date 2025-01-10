'use client'

//import BlogItem from "@/Components/BlogItem";
import BlogList from "@/Components/BlogList"
import Header from "@/Components/Header";
import Footer from '@/Components/Footer'
import { ToastContainer } from "react-toastify";

export default function Home() {

return (
  <>
  <ToastContainer theme="dark" />
  <Header/>
  <BlogList/>
  <Footer/>
  
  </>
)

}