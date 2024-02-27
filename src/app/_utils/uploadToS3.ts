import { axiosInstance } from './axiosInstance';

const uploadFile = async (
  file: File | Blob,
  fileName?: string,
): Promise<string> => {
  if (!file) return '';

  try {
    const _fileName = file instanceof File ? file.name : fileName;
    const { data } = await axiosInstance.post<{ url: string }>('upload', {
      fileName: _fileName,
      fileType: file.type,
    });

    const url = data.url;
    await axiosInstance.put(url, file, {
      headers: {
        'Content-Type': file.type,
      },
    });

    return url.split('?')[0];
  } catch (error) {
    console.error('Upload failed:', error);
    return '';
  }
};

export default uploadFile;
