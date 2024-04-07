export async function UploadImage(formData) {
  const res = await fetch(`${process.env.IMAGEKIT_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: process.env.IMAGEKIT_KEY_PRIVATE,
    },
    body: formData,
  });
  return res;
}
