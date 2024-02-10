'use client';

import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

interface TextInfotType {
  text: string;
}

interface GuidanceStateType {
  [key: string]: string;
  campInfo: string;
  cancelRules: string;
}

function TextInfo({ text }: TextInfotType) {
  const [guidance, setGuidance] = useState<GuidanceStateType>({
    campInfo: '',
    cancelRules: '',
  });

  const getText = async () => {
    try {
      const response = await axios.get('/data/bossText.json');
      console.log(response);
      const { data } = response;
      setGuidance(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getText();
  }, []);

  return (
    <div
      className='text-gray500 font-caption1-medium'
      dangerouslySetInnerHTML={{ __html: guidance[text] }}
    ></div>
  );
}

export default TextInfo;
