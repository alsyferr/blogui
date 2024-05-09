import Image from "next/image";
import Banner from "./components/Banner";
import BlogPage from "./components/BlogPage";

export default function Home() {

  if(!process.env.NEXT_PUBLIC_SITE_URL) {
    return null;
  }

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
