'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  step: string;
  title: string;
  description: string;
}

function Step({ step, title, description }: Props) {
  return (
    <div className='flex items-center justify-start px-35pxr'>
      <div className='flex flex-col items-start gap-53pxr'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className='text-40pxr font-medium'>{step}</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <h1 className='text-88pxr font-medium'>{title}</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <p className='text-26pxr'>{description}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Step;
