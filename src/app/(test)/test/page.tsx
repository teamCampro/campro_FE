'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Page() {
  const [data, setData] = useState('123');

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`/api/test`);

      const { data } = response;
      setData(data);
    };

    fetch();
  }, []);

  return <>{data}</>;
}

export default Page;
