const usersMock = [
  {
    id: 1,
    email: 'cdevries0@prnewswire.com',
    name: 'cdevries0',
    password: 'IpixNs',
    first_name: 'Clevey',
    last_name: 'De Vries',
    birthday: '15/5/2019',
    gender: 'Male',
    isAdmin: true,
    phone_number: '6572625069',
    confirmation_token: '1HBz5WSuUEsXRSsQhg5wUw4jVTnbmnizfW',
    reset_password_token: '1ACZLXdTiLp2peR3ane1EKYyQSSMFfPHoL',
    sign_in_count: 1,
    failed_attempts: 1,
    locked: false,
    confirmed_at: '31/1/2019',
    last_activity: '11/10/2019',
    active: true,
    profile_id: 1,
    created_at: '2/3/2019',
    updated_at: '4/6/2019'
  },
  {
    id: 2,
    email: 'egaspar1@columbia.edu',
    name: 'egaspar1',
    password: 'PDvErieBJ',
    first_name: 'Ella',
    last_name: 'Gaspar',
    birthday: '3/11/2019',
    gender: 'Female',
    isAdmin: false,
    phone_number: '6445366325',
    confirmation_token: '14g8DXuGjvUHqKKkNxtkYwfyqkioUM53hB',
    reset_password_token: '13RKNn98REN4dptDBNZYs6VkDAfHtmzhrH',
    sign_in_count: 2,
    failed_attempts: 2,
    locked: true,
    confirmed_at: '7/12/2018',
    last_activity: '14/5/2019',
    active: false,
    profile_id: 2,
    created_at: '16/10/2019',
    updated_at: '1/8/2019'
  },
  {
    id: 3,
    email: 'lsaynor2@independent.co.uk',
    name: 'lsaynor2',
    password: 'odFfgm',
    first_name: 'Lanny',
    last_name: 'Saynor',
    birthday: '15/11/2019',
    gender: 'Male',
    isAdmin: true,
    phone_number: '5411417084',
    confirmation_token: '1Q4FvWhbDeaqr2YBaG5risxfy39vyEFvXg',
    reset_password_token: '1AoazLPGyScsAcvGLWW5uVPFaKedehG381',
    sign_in_count: 3,
    failed_attempts: 3,
    locked: true,
    confirmed_at: '18/3/2019',
    last_activity: '2/7/2019',
    active: false,
    profile_id: 3,
    created_at: '5/3/2019',
    updated_at: '18/7/2019'
  },
  {
    id: 4,
    email: 'ngerckens3@oracle.com',
    name: 'ngerckens3',
    password: 'd8PuksZVdaE',
    first_name: 'Nikoletta',
    last_name: 'Gerckens',
    birthday: '24/12/2018',
    gender: 'Female',
    isAdmin: true,
    phone_number: '2002043354',
    confirmation_token: '16nYDHCmgXfwJ65PwZKRyksvoQhUVKKHey',
    reset_password_token: '126skKa79HanKnXnfm8eAfgTHrnubEtwnN',
    sign_in_count: 4,
    failed_attempts: 4,
    locked: false,
    confirmed_at: '30/3/2019',
    last_activity: '7/5/2019',
    active: false,
    profile_id: 4,
    created_at: '25/8/2019',
    updated_at: '3/4/2019'
  },
  {
    id: 5,
    email: 'rledson4@vinaora.com',
    name: 'rledson4',
    password: 'AfXVubnakj5l',
    first_name: 'Ronnica',
    last_name: 'Ledson',
    birthday: '21/10/2019',
    gender: 'Female',
    isAdmin: false,
    phone_number: '5198601496',
    confirmation_token: '1GGiDbNWXyanqCQUtxhLqqfCRqavjXvsyV',
    reset_password_token: '1GZihbaeL1MUECTkVcaRMD4ypNQ8hUY6Ug',
    sign_in_count: 5,
    failed_attempts: 5,
    locked: false,
    confirmed_at: '17/9/2019',
    last_activity: '23/2/2019',
    active: true,
    profile_id: 5,
    created_at: '3/1/2019',
    updated_at: '25/1/2019'
  },
];

function filteredUsersMock(category) {
  return usersMock.filter(user => user.category.includes(category));
}

class UsersServiceMock {
  async getUsers() {
    return Promise.resolve(usersMock);
  }

  async createUsers() {
    return Promise.resolve(usersMock[0]);
  }
}

module.exports = {
  usersMock,
  filteredUsersMock,
  UsersServiceMock
};
