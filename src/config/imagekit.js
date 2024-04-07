import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_KEY_PUBLIC,
  privateKey: process.env.IMAGEKIT_KEY_PRIVATE,
  urlEndpoint: process.env.IMAGEKIT_URL,
});

export default imagekit;
