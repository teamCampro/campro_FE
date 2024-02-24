import AWS from 'aws-sdk';
import { NextRequest } from 'next/server';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const config = {
  runtime: 'experimental-edge',
};

export const POST = async (req: NextRequest) => {
  const { fileName, fileType } = await req.json();

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read',
  };

  try {
    const preSignedURL = await s3.getSignedUrlPromise('putObject', params);

    return new Response(JSON.stringify({ url: preSignedURL }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Cannot create S3 signed URL' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
};
