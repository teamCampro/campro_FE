import { IconClose, IconPlusNon } from '@/public/svgs';
import Image from 'next/image';
import {
  ChangeEvent,
  Dispatch,
  FocusEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import ImageUpload from './ImageUpload';
import { SurveyListsType } from './WriteReviewModal';

interface WriteReviewType {
  surveyLists: SurveyListsType;
  setSurveyLists: Dispatch<SetStateAction<SurveyListsType>>;
  writeReview: string;
  setWriteReview: Dispatch<SetStateAction<string>>;
}
interface ImagesType {
  fileObject: File;
  preview_URL: string;
  type: string;
}

function WriteReview({
  surveyLists,
  setSurveyLists,
  writeReview,
  setWriteReview,
}: WriteReviewType) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setWriteReview(e.target.value);
  };

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    setSurveyLists({ ...surveyLists, write: e.target.value });
  };

  return (
    <>
      <div className='mt-24pxr flex flex-col'>
        <h3 className='mb-8pxr text-black font-body1-bold'>
          이용 사진/영상이 있으신가요?
        </h3>
        <ImageUpload
          surveyLists={surveyLists}
          setSurveyLists={setSurveyLists}
        />
        <div className='mt-24pxr flex flex-col gap-12pxr'>
          <h3 className='text-black font-body1-bold'>후기를 작성해 주세요</h3>
          <textarea
            placeholder={`리뷰 작성 시 주의해주세요\n리뷰를 보는 사용자와 사업자에게\n욕설, 비방,명예훼손성 표현은 자제해 주세요.`}
            className='h-200pxr w-full resize-none rounded-lg border-none bg-gray100 p-16pxr outline-none placeholder:font-body2-medium'
            value={writeReview}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default WriteReview;
