const usersMock = [
  {
    id: 1,
    email: 'cdevries0@prnewswire.com',
    user_name: 'cdevries0',
    password: 'IpixNs',
    first_name: 'Clevey',
    last_name: 'De Vries',
    birthday: '15/5/2019',
    gender: 'Male',
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
    user_name: 'egaspar1',
    password: 'PDvErieBJ',
    first_name: 'Ella',
    last_name: 'Gaspar',
    birthday: '3/11/2019',
    gender: 'Female',
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
    user_name: 'lsaynor2',
    password: 'odFfgm',
    first_name: 'Lanny',
    last_name: 'Saynor',
    birthday: '15/11/2019',
    gender: 'Male',
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
    user_name: 'ngerckens3',
    password: 'd8PuksZVdaE',
    first_name: 'Nikoletta',
    last_name: 'Gerckens',
    birthday: '24/12/2018',
    gender: 'Female',
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
    user_name: 'rledson4',
    password: 'AfXVubnakj5l',
    first_name: 'Ronnica',
    last_name: 'Ledson',
    birthday: '21/10/2019',
    gender: 'Female',
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
  {
    id: 6,
    email: 'lgunn5@de.vu',
    user_name: 'lgunn5',
    password: '9sSdO1Tw0WX',
    first_name: 'Lin',
    last_name: 'Gunn',
    birthday: '13/7/2019',
    gender: 'Male',
    phone_number: '2373081914',
    confirmation_token: '1EFBY3Lq2E7zKNfjhRrf41hHf9rKkHrujG',
    reset_password_token: '13s9GEow4pG9eKCbB7YCyFUDpXZmwpcdcg',
    sign_in_count: 6,
    failed_attempts: 6,
    locked: false,
    confirmed_at: '13/6/2019',
    last_activity: '6/7/2019',
    active: false,
    profile_id: 6,
    created_at: '9/7/2019',
    updated_at: '20/1/2019'
  },
  {
    id: 7,
    email: 'ddoylend6@toplist.cz',
    user_name: 'ddoylend6',
    password: 'YEgvzs7',
    first_name: 'Daisi',
    last_name: 'Doylend',
    birthday: '11/2/2019',
    gender: 'Female',
    phone_number: '8401820224',
    confirmation_token: '14tuBDEuL1WjLiGrsE5M4AqRKxySFQcoRK',
    reset_password_token: '1HixdxjFfN2YfRbdjZrAqmTDCwji539bi8',
    sign_in_count: 7,
    failed_attempts: 7,
    locked: false,
    confirmed_at: '30/10/2019',
    last_activity: '5/5/2019',
    active: true,
    profile_id: 7,
    created_at: '9/7/2019',
    updated_at: '20/4/2019'
  },
  {
    id: 8,
    email: 'dgascone7@nyu.edu',
    user_name: 'dgascone7',
    password: '3EOzQDwmBm',
    first_name: 'Dacia',
    last_name: 'Gascone',
    birthday: '11/1/2019',
    gender: 'Female',
    phone_number: '7314128408',
    confirmation_token: '158o1H8YLwaYfvdxM1ahTkJ9pGFQrGHN6C',
    reset_password_token: '1BVmJ5bpDfCNQGJB1Akxovf4pm5WEkSN4a',
    sign_in_count: 8,
    failed_attempts: 8,
    locked: true,
    confirmed_at: '26/9/2019',
    last_activity: '4/9/2019',
    active: false,
    profile_id: 8,
    created_at: '12/11/2019',
    updated_at: '8/12/2018'
  },
  {
    id: 9,
    email: 'gsacase8@nba.com',
    user_name: 'gsacase8',
    password: 'mjseeUC',
    first_name: 'Gusti',
    last_name: 'Sacase',
    birthday: '14/10/2019',
    gender: 'Female',
    phone_number: '1747599882',
    confirmation_token: '1Ab43tMiyPDmsnH58ySXgxTwLPzpR6FEZY',
    reset_password_token: '1KsaSYU7NMNDs7kE6M3eTzeMjD6jPXz8Gj',
    sign_in_count: 9,
    failed_attempts: 9,
    locked: false,
    confirmed_at: '6/3/2019',
    last_activity: '25/2/2019',
    active: true,
    profile_id: 9,
    created_at: '29/9/2019',
    updated_at: '28/6/2019'
  },
  {
    id: 10,
    email: 'mstrickler9@gnu.org',
    user_name: 'mstrickler9',
    password: 'yir72h',
    first_name: 'Malorie',
    last_name: 'Strickler',
    birthday: '30/1/2019',
    gender: 'Female',
    phone_number: '7344744635',
    confirmation_token: '17SQx7tiHDumR8cBF9ggSfR9S13gzL3eQm',
    reset_password_token: '123RadoVDHkcWW9nysjoDPCNAScLJhXe67',
    sign_in_count: 10,
    failed_attempts: 10,
    locked: true,
    confirmed_at: '15/1/2019',
    last_activity: '20/8/2019',
    active: false,
    profile_id: 10,
    created_at: '16/12/2018',
    updated_at: '2/11/2019'
  },
  {
    id: 11,
    email: 'dhallwella@eepurl.com',
    user_name: 'dhallwella',
    password: 'bf4DUY',
    first_name: 'Del',
    last_name: 'Hallwell',
    birthday: '19/1/2019',
    gender: 'Female',
    phone_number: '9137035650',
    confirmation_token: '1FURBV1UDDvHgra7uyXa8eDTZiwJmP8ioD',
    reset_password_token: '1DUfLhthHgwxzq1HVMFh55eSe7248Y9xVn',
    sign_in_count: 11,
    failed_attempts: 11,
    locked: false,
    confirmed_at: '8/9/2019',
    last_activity: '16/1/2019',
    active: true,
    profile_id: 11,
    created_at: '12/12/2018',
    updated_at: '31/1/2019'
  },
  {
    id: 12,
    email: 'avaneyb@indiatimes.com',
    user_name: 'avaneyb',
    password: 'MxtAITmn3',
    first_name: 'Augustin',
    last_name: 'Vaney',
    birthday: '7/8/2019',
    gender: 'Male',
    phone_number: '3494141650',
    confirmation_token: '1M4heuJuaWPGAjLrotnKbEvVpR6TPfbyPT',
    reset_password_token: '1EC8fBt3NK8XGDJWwk2j5isHc5Txx7XSy9',
    sign_in_count: 12,
    failed_attempts: 12,
    locked: true,
    confirmed_at: '11/8/2019',
    last_activity: '26/1/2019',
    active: false,
    profile_id: 12,
    created_at: '16/10/2019',
    updated_at: '27/8/2019'
  },
  {
    id: 13,
    email: 'hbaumaierc@mayoclinic.com',
    user_name: 'hbaumaierc',
    password: 'cj396mbTYU',
    first_name: 'Harwilll',
    last_name: 'Baumaier',
    birthday: '4/1/2019',
    gender: 'Male',
    phone_number: '2506461410',
    confirmation_token: '19jtGA9i7FXyQmxAb7wpniR9ySS83YMshG',
    reset_password_token: '1Hjo6TYFZ5VvULsS62RncJgX1vGAxbhufi',
    sign_in_count: 13,
    failed_attempts: 13,
    locked: false,
    confirmed_at: '6/11/2019',
    last_activity: '15/2/2019',
    active: true,
    profile_id: 13,
    created_at: '21/7/2019',
    updated_at: '10/5/2019'
  },
  {
    id: 14,
    email: 'lmcgaheyd@nytimes.com',
    user_name: 'lmcgaheyd',
    password: 'ESwjt4zF3UcU',
    first_name: 'Lu',
    last_name: 'McGahey',
    birthday: '15/8/2019',
    gender: 'Female',
    phone_number: '1225220625',
    confirmation_token: '19hwiuMSQpBC3mimheJyraKMj54SLqFGBo',
    reset_password_token: '1AQX9UjyJ5mpX6q1HVJZR2imqPs6e77Ajm',
    sign_in_count: 14,
    failed_attempts: 14,
    locked: false,
    confirmed_at: '28/2/2019',
    last_activity: '10/4/2019',
    active: true,
    profile_id: 14,
    created_at: '12/5/2019',
    updated_at: '25/4/2019'
  },
  {
    id: 15,
    email: 'ladamove@bloomberg.com',
    user_name: 'ladamove',
    password: 'teSOj0l5z5',
    first_name: 'Loleta',
    last_name: 'Adamov',
    birthday: '19/5/2019',
    gender: 'Female',
    phone_number: '6176265170',
    confirmation_token: '1E5jLfhKzwqbUKytprmeoYe6qJ72GB14U',
    reset_password_token: '1GK5HtktJitvbGNkoyrgwsUmt5yyQ31mNn',
    sign_in_count: 15,
    failed_attempts: 15,
    locked: true,
    confirmed_at: '30/10/2019',
    last_activity: '18/10/2019',
    active: true,
    profile_id: 15,
    created_at: '5/4/2019',
    updated_at: '28/8/2019'
  },
  {
    id: 16,
    email: 'mdanielef@addthis.com',
    user_name: 'mdanielef',
    password: '5FBcugdCgl',
    first_name: 'Modestine',
    last_name: 'Daniele',
    birthday: '30/4/2019',
    gender: 'Female',
    phone_number: '4945749062',
    confirmation_token: '18n9Z2yFrN8GArkwtL4Ms5DmnyVTXhuHBv',
    reset_password_token: '1CtNs6JDboCQpWwUWxDCujPUrTtRbvHa9c',
    sign_in_count: 16,
    failed_attempts: 16,
    locked: false,
    confirmed_at: '19/10/2019',
    last_activity: '28/9/2019',
    active: false,
    profile_id: 16,
    created_at: '9/5/2019',
    updated_at: '10/4/2019'
  },
  {
    id: 17,
    email: 'abusseyg@ifeng.com',
    user_name: 'abusseyg',
    password: 'BCxAhZ',
    first_name: 'Adolphe',
    last_name: 'Bussey',
    birthday: '30/9/2019',
    gender: 'Male',
    phone_number: '9547184762',
    confirmation_token: '13QPz9e1CHf3vs4mrpnnyPEPCqvGDVYsBz',
    reset_password_token: '1CbcThhP87fc3dQveKBbE2a6rwg1u7X47R',
    sign_in_count: 17,
    failed_attempts: 17,
    locked: false,
    confirmed_at: '4/9/2019',
    last_activity: '3/12/2018',
    active: false,
    profile_id: 17,
    created_at: '6/9/2019',
    updated_at: '26/1/2019'
  },
  {
    id: 18,
    email: 'bmcardleh@ucsd.edu',
    user_name: 'bmcardleh',
    password: '9l5sfkT',
    first_name: 'Brande',
    last_name: 'McArdle',
    birthday: '31/3/2019',
    gender: 'Female',
    phone_number: '7765404260',
    confirmation_token: '16hz17wVUyK4Wqd1oME9KF4AYKkMRutbRW',
    reset_password_token: '1Br27WYnxtoTrwgr2wgMmKEabzAT4iZtzD',
    sign_in_count: 18,
    failed_attempts: 18,
    locked: true,
    confirmed_at: '7/2/2019',
    last_activity: '7/9/2019',
    active: true,
    profile_id: 18,
    created_at: '27/4/2019',
    updated_at: '13/10/2019'
  },
  {
    id: 19,
    email: 'ascarglei@miitbeian.gov.cn',
    user_name: 'ascarglei',
    password: 'wNnlN3',
    first_name: 'Arlyne',
    last_name: 'Scargle',
    birthday: '31/8/2019',
    gender: 'Female',
    phone_number: '8794174627',
    confirmation_token: '13gMu6FM3UG3MYfYo5dxxKeJE6esxC52sD',
    reset_password_token: '171E5z9JPybWTLbw83zGu3pmofcSmSJe8W',
    sign_in_count: 19,
    failed_attempts: 19,
    locked: true,
    confirmed_at: '20/4/2019',
    last_activity: '25/10/2019',
    active: true,
    profile_id: 19,
    created_at: '11/2/2019',
    updated_at: '9/3/2019'
  },
  {
    id: 20,
    email: 'molenovj@ocn.ne.jp',
    user_name: 'molenovj',
    password: 'Qa8bc4d',
    first_name: 'Mira',
    last_name: 'Olenov',
    birthday: '18/7/2019',
    gender: 'Female',
    phone_number: '8124565256',
    confirmation_token: '18fU6mpsLUxPyxE4eh2oiBxhmxCMeuYAad',
    reset_password_token: '1499FQ3UeTyTEZGAkHNxH2ufnDo53YcsQx',
    sign_in_count: 20,
    failed_attempts: 20,
    locked: true,
    confirmed_at: '23/1/2019',
    last_activity: '24/3/2019',
    active: true,
    profile_id: 20,
    created_at: '21/7/2019',
    updated_at: '13/2/2019'
  },
  {
    id: 21,
    email: 'alynthalk@twitpic.com',
    user_name: 'alynthalk',
    password: 'IrPYtk',
    first_name: 'Amata',
    last_name: 'Lynthal',
    birthday: '27/3/2019',
    gender: 'Female',
    phone_number: '9077085144',
    confirmation_token: '16M5W4jjbL8upTxKrnwnLzo1gQXZ3iV9Jw',
    reset_password_token: '19ExmAaB4QjvPEhmdnUTLHisbwXyBwDDrH',
    sign_in_count: 21,
    failed_attempts: 21,
    locked: true,
    confirmed_at: '28/8/2019',
    last_activity: '29/6/2019',
    active: false,
    profile_id: 21,
    created_at: '17/4/2019',
    updated_at: '26/4/2019'
  },
  {
    id: 22,
    email: 'lhayerl@dyndns.org',
    user_name: 'lhayerl',
    password: 'Vn10Cw',
    first_name: 'Link',
    last_name: 'Johnson',
    birthday: '13/9/2019',
    gender: 'Male',
    phone_number: '3163777697',
    confirmation_token: '1BxvXe61PM6QGpqmEHP91aEPLQUSshgtdx',
    reset_password_token: '13p8iLokKpDBTQ9pyB3xXg85TNw5gXvm4P',
    sign_in_count: 22,
    failed_attempts: 22,
    locked: false,
    confirmed_at: '9/8/2019',
    last_activity: '1/5/2019',
    active: true,
    profile_id: 22,
    created_at: '7/3/2019',
    updated_at: '17/6/2019'
  },
  {
    id: 23,
    email: 'ghallerm@nymag.com',
    user_name: 'ghallerm',
    password: 'qlAsyNRESL',
    first_name: 'Glenn',
    last_name: 'Haller',
    birthday: '17/10/2019',
    gender: 'Female',
    phone_number: '6432068008',
    confirmation_token: '1MrNcg6yfhjoZV7QXkoGVkHsikBGRQ12ev',
    reset_password_token: '1J3eQTQUxkELBpnBPA6CHRaVipdu4anacC',
    sign_in_count: 23,
    failed_attempts: 23,
    locked: true,
    confirmed_at: '9/4/2019',
    last_activity: '5/5/2019',
    active: false,
    profile_id: 23,
    created_at: '2/4/2019',
    updated_at: '22/11/2018'
  },
  {
    id: 24,
    email: 'kparcelln@dyndns.org',
    user_name: 'kparcelln',
    password: 'FzkyMshJyBq',
    first_name: 'Koren',
    last_name: 'Parcell',
    birthday: '13/6/2019',
    gender: 'Female',
    phone_number: '2616790065',
    confirmation_token: '1DfwpmKL66Gxk2YMHzHwF83rYmF67RqTQ7',
    reset_password_token: '13H9B9eH2S1WzYkBQJLWEihYWoC2iAsZfJ',
    sign_in_count: 24,
    failed_attempts: 24,
    locked: false,
    confirmed_at: '21/7/2019',
    last_activity: '9/6/2019',
    active: true,
    profile_id: 24,
    created_at: '28/12/2018',
    updated_at: '15/5/2019'
  },
  {
    id: 25,
    email: 'pbousqueto@free.fr',
    user_name: 'pbousqueto',
    password: '6R6B4fGXufS',
    first_name: 'Prent',
    last_name: 'Bousquet',
    birthday: '28/9/2019',
    gender: 'Male',
    phone_number: '9174799360',
    confirmation_token: '16YpJe2edAMqc6pSr2iTNoVGHUN1EtJ95B',
    reset_password_token: '1BWnSLY2kfP4SS14UDdVuLgZhQsntYiNDA',
    sign_in_count: 25,
    failed_attempts: 25,
    locked: false,
    confirmed_at: '14/9/2019',
    last_activity: '19/2/2019',
    active: false,
    profile_id: 25,
    created_at: '4/6/2019',
    updated_at: '6/12/2018'
  }
];

function filteredProductsMock(category) {
  return usersMock.filter(product => product.category.includes(category));
}

class ProductsServiceMock {
  async getProducts() {
    return Promise.resolve(usersMock);
  }

  async createProduct() {
    return Promise.resolve(usersMock[0]);
  }
}

module.exports = {
  usersMock,
  filteredProductsMock,
  ProductsServiceMock
};
