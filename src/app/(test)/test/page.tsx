'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Page() {
  const [data, setData] = useState('123');

  useEffect(() => {
    const getFetch = async () => {
      const response = await axios.get(`/api/test?email=test`);

      const { data } = response;
      setData(data);
    };

    const postFetch = async () => {
      await axios.post(`/api/test`, { email: 'test' });
    };

    const patchFetch = async () => {
      await axios.patch(`/api/user/3/reservation/10/cancel`, { email: 'test' });
    };

    getFetch();
    postFetch();
    patchFetch();
  }, []);

  return <></>;
}

export default Page;
