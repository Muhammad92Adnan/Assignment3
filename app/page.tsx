import Header from './components/Header/page';
import Hero from './components/Hero/page';
import Footer from './components/Footer/page';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <section className='bg-white p-10 text-black'>
        <h1 className='text-3xl font bold mb-6'>My Services</h1>
        <img src='webdesign.jpg'width={350} height={350} alt='Service 1' className='m-3 borde-4 border-emerald-400 shadow-2xl mx-auto mb-4'/>
        <h3 className=' text-xl font-bold '>Services 1</h3>
        <p className='mt-2 fount-semibold '>I make web page using Nextjs, Typescript and Javascript, Html, Tailwindcss, Css </p>
        <br/>
        <p className='animate-bounce'>⬇️⬇️⬇️⬇️⬇️</p>
        <br/>
        <img src='aa.jpeg ' width={350} height={350} alt='Service 1' className='m-3 borde-4 border-emerald-400 shadow-2xl mx-auto mb-4'/>
        <h3 className=' text-xl font-bold '>Services 2</h3>
        <p className='mt-2 fount-semibold '>I am Freelancer </p>
        <br/>
      </section>
      <Footer />
    </div>
  );
}
