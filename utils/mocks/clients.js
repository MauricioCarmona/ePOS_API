const clientsMock = [
  {
    id: 1,
    first_name: 'Cristin',
    last_name: 'Moodie',
    birthday: '27/3/2019',
    email: 'cmoodie0@arizona.edu',
    street_adress: '23715 Crowley Street',
    phone_number: '7118184295',
    active: false,
    user_id: 1,
    create_date: '15/1/2019',
    update_date: '3/9/2019'
  },
  {
    id: 2,
    first_name: 'Chadd',
    last_name: 'Moodey',
    birthday: '9/6/2019',
    email: 'cmoodey1@phpbb.com',
    street_adress: '9638 Westend Crossing',
    phone_number: '5295003292',
    active: false,
    user_id: 2,
    create_date: '21/11/2018',
    update_date: '8/8/2019'
  },
  {
    id: 3,
    first_name: 'Elnar',
    last_name: 'Childs',
    birthday: '24/1/2019',
    email: 'echilds2@pen.io',
    street_adress: '44 Bartillon Circle',
    phone_number: '8714497311',
    active: false,
    user_id: 3,
    create_date: '19/2/2019',
    update_date: '26/1/2019'
  },
  {
    id: 4,
    first_name: 'Gilberte',
    last_name: 'Stobbart',
    birthday: '18/1/2019',
    email: 'gstobbart3@chron.com',
    street_adress: '84 Sherman Way',
    phone_number: '7105855248',
    active: false,
    user_id: 4,
    create_date: '29/12/2018',
    update_date: '8/10/2019'
  },
  {
    id: 5,
    first_name: 'Doroteya',
    last_name: 'Candey',
    birthday: '6/3/2019',
    email: 'dcandey4@chronoengine.com',
    street_adress: '49273 Jana Plaza',
    phone_number: '8635715273',
    active: true,
    user_id: 5,
    create_date: '25/5/2019',
    update_date: '6/11/2019'
  },
  {
    id: 6,
    first_name: 'Griffy',
    last_name: 'Molder',
    birthday: '10/9/2019',
    email: 'gmolder5@icio.us',
    street_adress: '914 Esker Junction',
    phone_number: '5726513676',
    active: false,
    user_id: 6,
    create_date: '14/12/2018',
    update_date: '31/3/2019'
  },
  {
    id: 7,
    first_name: 'Kat',
    last_name: 'Isacq',
    birthday: '11/7/2019',
    email: 'kisacq6@skype.com',
    street_adress: '5 Sherman Circle',
    phone_number: '7472748875',
    active: false,
    user_id: 7,
    create_date: '23/6/2019',
    update_date: '7/6/2019'
  },
  {
    id: 8,
    first_name: 'Rhetta',
    last_name: 'Rabier',
    birthday: '25/4/2019',
    email: 'rrabier7@surveymonkey.com',
    street_adress: '5 Oak Valley Drive',
    phone_number: '8409400369',
    active: false,
    user_id: 8,
    create_date: '15/2/2019',
    update_date: '24/10/2019'
  },
  {
    id: 9,
    first_name: 'Bord',
    last_name: 'Mose',
    birthday: '5/4/2019',
    email: 'bmose8@ox.ac.uk',
    street_adress: '7949 Northwestern Court',
    phone_number: '1211847112',
    active: true,
    user_id: 9,
    create_date: '8/10/2019',
    update_date: '25/3/2019'
  },
  {
    id: 10,
    first_name: 'Spense',
    last_name: 'Fulker',
    birthday: '8/3/2019',
    email: 'sfulker9@naver.com',
    street_adress: '72511 Londonderry Circle',
    phone_number: '3482485858',
    active: true,
    user_id: 10,
    create_date: '18/3/2019',
    update_date: '25/4/2019'
  },
  {
    id: 11,
    first_name: 'Stephi',
    last_name: 'Lowndes',
    birthday: '4/11/2019',
    email: 'slowndesa@elegantthemes.com',
    street_adress: '61 Schurz Alley',
    phone_number: '1499880935',
    active: true,
    user_id: 11,
    create_date: '23/1/2019',
    update_date: '26/9/2019'
  },
  {
    id: 12,
    first_name: 'Ashlan',
    last_name: 'Tourle',
    birthday: '11/10/2019',
    email: 'atourleb@hud.gov',
    street_adress: '5 Northland Drive',
    phone_number: '1722905943',
    active: false,
    user_id: 12,
    create_date: '3/4/2019',
    update_date: '13/3/2019'
  }
];

class ClientsServiceMock {
  async getClients() {
    return Promise.resolve(clientsMock);
  }

  async createClient() {
    return Promise.resolve(clientsMock[0]);
  }
}

module.exports = {
  clientsMock,
  ClientsServiceMock
};
