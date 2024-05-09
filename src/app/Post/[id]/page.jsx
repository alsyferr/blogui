
import Image from 'next/image';
import { FaUser, FaClock } from 'react-icons/fa';
import SideBar from '@/app/components/SideBar';

async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/post/${id}`, {
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");

  }

  return res.json()
}



export async function generateMetadata({ params }) {
  const post = await getData(params.id);

  return {
    title: post.title,
    description: post.description, // Corrected property name
  };
}


const Post = async ({ params }) => {
  
  const data = await getData(params.id)

  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Blog Post</h2>
      </div>

      <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
          <div>
            <Image src={data.image} alt='' className='w-full mx-auto rounded' width={500} height={300} />
          </div>

          <h2 className='text-3xl mt-8 font-bold mb-4 text-red-500'>{data.title}</h2>
          <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2' /> {data.author} | {data.publishedDate}</p>
          <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2' />{data.readingTime}</p>
          <p className='text-sm text-gray-500 mb-6'>{data.content}</p>
          <div className='text-sm text-gray-500 mb-6'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

        <div className='lg:w-1/3'>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Post;


