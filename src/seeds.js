/* eslint-disable no-plusplus */
// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)

// eslint-disable-next-line import/prefer-default-export
const seedDatadbase = (firebase) => {
  console.log('I am calling seeds');
  const users = [
      {
        userId: 'cY1aNfpCo5Owku8TuvcXrY84DVm2',
        username: 'himel',
        fullName: 'Abdullah Al Mamun',
        emailAddress: 'aam.himel@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'huzaifa',
        fullName: 'Huzaifa Zaman',
        emailAddress: 'ab.new01@gmail.com',
      following: [],
        followers: ['cY1aNfpCo5Owku8TuvcXrY84DVm2'],
      dateCreated: Date.now(),
      },
      {
        userId: '3',
        username: 'FariyaIslam',
        fullName: 'Fariya Islam',
        emailAddress: 'fariyaislam2096@gmail.com',
        following: [],
        followers: ['cY1aNfpCo5Owku8TuvcXrY84DVm2'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'hady',
        fullName: 'Abdullah Al Hady',
        emailAddress: 'ad.hady@gmail.com',
        following: [],
        followers: ['cY1aNfpCo5Owku8TuvcXrY84DVm2'],
        dateCreated: Date.now()
      }
    ];
  
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  

    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/aamhimel/${i}.jpg`,
          caption: 'Himel is a good boy',
          likes: [],
          comments: [
            {
              displayName: 'dali',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'orwell',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '23.4855°',
          userLongitude: '89.4198°',
          dateCreated: Date.now()
        });
    }
}

export default seedDatadbase;