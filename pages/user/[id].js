import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
          setUser(response.data);
        })
        .catch(error => console.error("Error fetching user data:", error));
    }
  }, [id]);

  if (!user) return <div className="flex justify-center items-center h-screen">Loading...</div>;


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Head>
        <title>{user.name}</title>
      </Head>
      <div className="bg-gray overflow-hidden shadow rounded-lg border w-full max-w-2xl mx-4">
      <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Information
          </h3>
        </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0 ">
      <dl className="sm:divide-y sm:divide-gray-200">
        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-medium text-red-500">Full name</dt>
          <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
            {user.name}
          </dd>
        </div>
        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-medium text-red-500">Email address</dt>
          <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
            {user.email}
          </dd>
        </div>
        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-medium text-red-500">Username</dt>
          <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
            {user.username}
          </dd>
        </div>
        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-medium text-red-500">Address</dt>
          <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
            <ul>
              <li>
                Street: {user.address.street}
              </li>
              <li>
                suite: {user.address.suite}
              </li>
              <li>
                city: {user.address.city}
              </li>
              <li>
                zipcode: {user.address.zipcode}
              </li>
              <li>
                geo:
                <ul>
                  <li>
                    lat: {user.address.geo.lat}
                  </li>
                  <li>
                    lng: {user.address.geo.lng}
                  </li>
                </ul>
              </li>
            </ul>
          </dd>
        </div>
        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-medium text-red-500">Phone</dt>
          <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
            {user.phone}
          </dd>
        </div>
        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-medium text-red-500">website</dt>
          <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
            {user.website}
          </dd>
        </div>
        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-lg font-medium text-red-500">Company</dt>
          <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
            <ul>
              <li>
                Name: {user.company.name}
              </li>
              <li>
                CatchPhrase: {user.company.catchPhrase}
              </li>
              <li>
                bs: {user.company.bs}
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
    </div>
  </div>
  
  );
};

export default UserProfile;
