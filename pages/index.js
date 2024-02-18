import Head from 'next/head';
// import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link'; 

export default function Home() {
  return (
    <>
      <Head>
        <title>Quantum Systems Task</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <>
  {/* Container for demo purpose */}
  <div className="container my-24 mx-auto md:px-6">
    {/* Section: Design Block */}
    <section className="mb-32 text-center md:text-left">
      <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="flex flex-wrap items-center">
          <div className="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
            <img
              src="https://smashballoon.com/wp-content/uploads/2020/04/types-of-instagram-posts-624x297.jpg"
              alt="Trendy Pants and Shoes"
              className="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
            />
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto md:w-8/12">
            <div className="px-6 py-12 md:px-12">
              <h2 className="mb-6 text-3xl font-bold">
                <span className="text-danger dark:text-danger-500">
                  "Quantum Systems"
                </span>{" "}
                project
              </h2>
              <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                This Project aims to show various social media posts from external API's and style them using tailwindcss, also the project uses Next.JS as a fullstack framework.
                <br />
                <br />
                Its a part of Hiring process for Quantum Systems.
              </p>
              <button
                type="button"
                className="inline-block rounded-full bg-danger px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                data-te-ripple-init=""
                data-te-ripple-color="red"
              >
                <Link className="text-blue-600 hover:text-blue-700 hover:underline" href={`/posts/posts`}>
                Show posts
                  </Link>
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</>

      </section>
      </>
  );
}