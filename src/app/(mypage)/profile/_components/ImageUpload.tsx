import { IconClose, IconPlusNon } from '@/public/svgs';
import Image from 'next/image';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ImagesType, SurveyListsType } from './WriteReviewModal';

interface ImageUploadType {
  surveyLists: SurveyListsType;
  setSurveyLists: Dispatch<SetStateAction<SurveyListsType>>;
}

function ImageUpload({ surveyLists, setSurveyLists }: ImageUploadType) {
  /* const [fileList, setFileList] = useState<ImagesType[]>([]); */
  let inputRef = useRef<HTMLInputElement>(null);

  const handleSaveImage = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const tmpFileList: ImagesType[] = [];
    const files = e.target.files;

    if (files && files.length < 6 && surveyLists.images.length < 5) {
      for (let i = 0; i < files.length; i++) {
        const preview_URL = URL.createObjectURL(files[i]);
        const fileType = files[i].type.split('/')[0];

        if (fileType === 'video') {
          await new Promise((resolve) => {
            const videoElement = document.createElement('video');
            videoElement.src = preview_URL;
            const timer = setInterval(() => {
              if (videoElement.readyState === 4) {
                if (videoElement.duration > 31) {
                  alert(
                    '동영상의 길이가 너무 깁니다. 30초 이내인 영상 추가해주세요',
                  );
                  URL.revokeObjectURL(preview_URL);
                } else {
                  surveyLists.images.push({
                    fileObject: files[i],
                    preview_URL: preview_URL,
                    type: fileType,
                  });
                }
                clearInterval(timer);
                resolve('good');
              }
            }, 500);
          });
        } else {
          surveyLists.images.push({
            fileObject: files[i],
            preview_URL: preview_URL,
            type: fileType,
          });
        }
      }
    } else {
      /* alert('이미지는 5장만 추가할 수 있습니다'); */
    }
    setSurveyLists({
      ...surveyLists,
      images: [...tmpFileList, ...surveyLists.images],
    });

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const deleteImage = (index: number) => {
    const tmpFileList = [...surveyLists.images];
    tmpFileList.splice(index, 1);
    setSurveyLists({ ...surveyLists, images: tmpFileList });

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    return () => {
      surveyLists.images.forEach((item) => {
        URL.revokeObjectURL(item.preview_URL);
      });
    };
  }, []);

  return (
    <>
      <div className='flex-center mb-12pxr gap-8pxr'>
        {surveyLists.images.map((list, index) => {
          return (
            <div key={index} className='relative flex h-80pxr w-80pxr'>
              {list.type === 'image' ? (
                <Image
                  src={list.preview_URL}
                  width={80}
                  height={80}
                  alt='이미지'
                  className='rounded-xl'
                />
              ) : (
                <video
                  src={list.preview_URL}
                  autoPlay={false}
                  controls={false}
                  className='rounded-xl'
                />
              )}
              <div
                className='absolute right-0pxr top-0pxr h-18pxr w-18pxr cursor-pointer'
                onClick={() => deleteImage(index)}
              >
                <IconClose
                  width='100%'
                  height='100%'
                  viewBox='0 0 24 24'
                  fill='white'
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex-center'>
        <label
          htmlFor='reviewImage'
          className={`flex-center flex h-56pxr w-108pxr cursor-pointer flex-nowrap gap-4pxr whitespace-nowrap rounded-[99px] border  py-24pxr pl-24pxr pr-32pxr  font-body2-semibold  ${surveyLists.images.length < 5 ? 'border-primary100 text-primary100 hover:bg-primary50' : 'bg-gray300 text-gray500'}`}
        >
          <div className='h-20pxr w-20pxr '>
            <IconPlusNon
              width='100%'
              height='100%'
              viewBox='0 0 24 24'
              fill={surveyLists.images.length < 5 ? '#4F9E4F' : '#949494'}
            />
          </div>
          <input
            type='file'
            ref={inputRef}
            id='reviewImage'
            name='reviewImage'
            className='hidden'
            accept='video/*, image/*'
            multiple
            onChange={handleSaveImage}
            disabled={surveyLists.images.length < 5 ? false : true}
          />
          추가
        </label>
      </div>
    </>
  );
}

export default ImageUpload;
