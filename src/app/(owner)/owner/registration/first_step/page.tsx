import React from 'react';
import Step from '../../../_components/Step';
import STEP_CONTENTS from '../../../_constants/stepContents';
import OwnerButton from '../../../_components/OwnerButton';

function FirstStepPage() {
  const { step, title, description } = STEP_CONTENTS.first;

  return (
    <div className='flex h-[80vh] flex-col items-center'>
      <Step step={step} title={title} description={description} />
    </div>
  );
}

export default FirstStepPage;
