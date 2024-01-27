'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import useMediaQueries from './_components/useMediaQueries';

function test2() {
  // const mediaQueryList = window.matchMedia(`(max-width: 600px)`)
  const media = useMediaQueries({ breakpoint: 600 });
  console.log('미녀기', media.mediaQuery.matches);
  return <div>미녀기</div>;
}

export default test2;
