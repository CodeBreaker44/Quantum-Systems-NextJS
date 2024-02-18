import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'; 
import Head from 'next/head';
import Example from '../../components/Navbar';

function PostsWithDetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const postsPromise = axios.get('https://jsonplaceholder.typicode.com/posts');
        const commentsPromise = axios.get('https://jsonplaceholder.typicode.com/comments');
        const usersPromise = axios.get('https://jsonplaceholder.typicode.com/users');

        const [postsResponse, commentsResponse, usersResponse] = await Promise.all([postsPromise, commentsPromise, usersPromise]);

        
        const combinedData = postsResponse.data.map(post => {
          const user = usersResponse.data.find(user => user.id === post.userId);
          const comments = commentsResponse.data.filter(comment => comment.postId === post.id).map(comment => {
        
            const commentUser = usersResponse.data.find(user => user.id === comment.id % usersResponse.data.length + 1); 
            return { ...comment, user: commentUser };
          });
          return { ...post, user, comments };
        });

        setData(combinedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
        
      }
    };

    fetchData();
  }, []);


  return (
<div className="max-w-4xl mx-auto my-10">
      <Head>
        <title>Main Feed</title>
      </Head>
      <Example></Example>
  <h1 className="mb-6 p-4 bg-white rounded-lg shadow text-center text-3xl">Welcome to Quantum Systems's Social Feed</h1>
  <ul>
    {data.map(post => (
      <li key={post.id} className="mb-6 p-4 bg-white rounded-lg shadow">
        <div className="mb-2">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="text-sm text-gray-500">
            WRITTEN BY {' '}
            <Link  className="text-blue-600 hover:text-blue-700 hover:underline" href={`/user/${post.user.id}`}>
              {post.user?.name.toUpperCase()}
            </Link>
          </p>
        </div>
        <p className="rounded-lg text-xl bg-gray-200 p-4">{post.body}</p>
        <div className="mt-4">
          <h3 className="font-semibold">Comments:</h3>
          <ul className="list-disc pl-5">
            {post.comments.map(comment => (
              <li key={comment.id} className="mt-1 text-gray-600">
                <strong>
                  <Link className="text-blue-600 hover:text-blue-700 hover:underline" href={`/user/${comment.user.id}`}>
                    {comment.user?.name}
                  </Link>: {' '}
                </strong> 
                {comment.body}
              </li>
            ))}
          </ul>
        </div>
      </li>
    ))}
  </ul>
</div>

  );
}

export default PostsWithDetails;
