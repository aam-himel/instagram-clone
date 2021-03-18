/* eslint-disable arrow-body-style */
import {firebase, FieldValue} from '../lib/firebase';

// eslint-disable-next-line import/prefer-default-export
export async function doesUserNameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  console.log('result', result);
  return result.docs.map((user) => user.data().length > 0);
}
