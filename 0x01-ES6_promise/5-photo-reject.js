export default function uploadPhoto(fileName) {
  return Promise.resolve({ status: 200, body: 'photo-profile-1' });
  //return Promise.reject(new Error(`${fileName} cannot be processed`));
}
