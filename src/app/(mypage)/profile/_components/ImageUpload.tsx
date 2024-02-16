import { IconClose, IconPlusNon } from '@/public/svgs';
import Image from 'next/image';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

interface ImagesType {
  fileObject: File;
  preview_URL: string;
  type: string;
}

function ImageUpload() {
  const [fileList, setFileList] = useState<ImagesType[]>([]);
  let inputRef = useRef<HTMLInputElement>(null);

  const handleSaveImage = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const tmpFileList: ImagesType[] = [];
    const files = e.target.files;

    if (files && files.length < 6 && fileList.length < 5) {
      for (let i = 0; i < files.length; i++) {
        const preview_URL = URL.createObjectURL(files[i]);
        const fileType = files[i].type.split('/')[0];

        if (fileType === 'video') {
          await new Promise((resolve) => {
            const videoElement = document.createElement('video');
            videoElement.src = preview_URL;
            const timer = setInterval(() => {
              if (videoElement.readyState === 4) {
                if (videoElement.duration > 20) {
                  alert('동영상의 길이가 너무 깁니다.');
                  URL.revokeObjectURL(preview_URL);
                } else {
                  fileList.push({
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
          fileList.push({
            fileObject: files[i],
            preview_URL: preview_URL,
            type: fileType,
          });
        }
      }
    } else {
      alert('이미지는 5장만 추가할 수 있습니다');
    }
    setFileList([...tmpFileList, ...fileList]);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const deleteImage = (index: number) => {
    const tmpFileList = [...fileList];
    tmpFileList.splice(index, 1);
    setFileList(tmpFileList);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    return () => {
      fileList.forEach((item) => {
        URL.revokeObjectURL(item.preview_URL);
      });
    };
  }, []);
  return (
    <>
      <div className='flex-center'>
        {fileList.map((list, index) => {
          return (
            <div key={index} className='relative flex h-80pxr w-80pxr'>
              {list.type === 'image' ? (
                <Image
                  src={list.preview_URL}
                  width={80}
                  height={80}
                  alt='이미지'
                />
              ) : (
                <video
                  src={list.preview_URL}
                  autoPlay={false}
                  controls={true}
                />
              )}
              <div
                className='absolute left-0pxr top-0pxr h-24pxr w-24pxr'
                onClick={() => deleteImage(index)}
              >
                <IconClose
                  width='100%'
                  height='100%'
                  viewBox='0 0 24 24'
                  fill='#949494'
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex-center'>
        <label
          htmlFor='reviewImage'
          className='flex-center flex h-56pxr w-108pxr flex-nowrap gap-4pxr whitespace-nowrap rounded-[99px] border border-primary100 py-24pxr pl-24pxr pr-32pxr text-primary100 font-body2-semibold hover:bg-primary50'
        >
          <div className='h-20pxr w-20pxr '>
            <IconPlusNon
              width='100%'
              height='100%'
              viewBox='0 0 24 24'
              fill='#4F9E4F'
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
          />
          추가
        </label>
      </div>
    </>
  );
}

export default ImageUpload;
