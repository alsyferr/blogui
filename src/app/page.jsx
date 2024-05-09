import Image from "next/image";
import Banner from "./components/Banner";
import BlogPage from "./components/BlogPage";

export default function Home() {


  return (
    <div>
      <div>
      <Banner/>
      </div>
   
      <div className='max-w-7xl mx-auto'>
        <BlogPage />
      </div>
  </div>
  );
}
