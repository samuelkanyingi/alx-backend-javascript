import uploadPhoto from './5-photo-reject';
import createUser from './4-user-promise';

export default async function asyncUploadUser() {
  const result = {
    photo: null,
    user: null,
  };

  try {
    result.photo = await uploadPhoto('profile.jpg');
  } catch (error) {
    result.photo = null;
  }

  try {
    result.user = await createUser('Guillaume', 'Salva');
  } catch (error) {
    result.user = null;
  }

  return result;
}
