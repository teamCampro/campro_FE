import React from 'react';
import Step from '../../../_components/Step';
import STEP_CONTENTS from '../../../_constants/stepContents';

function SecondStepPage() {
  const { step, title, description } = STEP_CONTENTS.second;

  return (
    <div className='flex h-[80vh] flex-col justify-center'>
      <Step step={step} title={title} description={description} />
    </div>
  );
}

export default SecondStepPage;
