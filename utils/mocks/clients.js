const clientsMock = [
  {
    id: 1,
    first_name: 'Kristien',
    last_name: 'McLeod',
    email: 'kmcleod0@fema.gov',
    phone_number: '105-607-5038'
  },
  {
    id: 2,
    first_name: 'Ruthanne',
    last_name: 'Okey',
    email: 'rokey1@opera.com',
    phone_number: '978-839-8808'
  },
  {
    id: 3,
    first_name: 'Anderea',
    last_name: 'Roggieri',
    email: 'aroggieri2@google.co.uk',
    phone_number: '820-761-6401'
  },
  {
    id: 4,
    first_name: 'Osborn',
    last_name: 'Fownes',
    email: 'ofownes3@fema.gov',
    phone_number: '204-566-2519'
  },
  {
    id: 5,
    first_name: 'Tim',
    last_name: 'Theurer',
    email: 'ttheurer4@simplemachines.org',
    phone_number: '527-898-0167'
  },
  {
    id: 6,
    first_name: 'Adriena',
    last_name: 'Moehle',
    email: 'amoehle5@sohu.com',
    phone_number: '852-422-9867'
  },
  {
    id: 7,
    first_name: 'Lauren',
    last_name: 'Seden',
    email: 'lseden6@sun.com',
    phone_number: '252-118-0938'
  },
  {
    id: 8,
    first_name: 'Sally',
    last_name: 'Heberden',
    email: 'sheberden7@merriam-webster.com',
    phone_number: '732-920-5253'
  },
  {
    id: 9,
    first_name: 'Tessie',
    last_name: 'Jakoubek',
    email: 'tjakoubek8@psu.edu',
    phone_number: '223-582-6046'
  },
  {
    id: 10,
    first_name: 'Genevieve',
    last_name: 'Loody',
    email: 'gloody9@sun.com',
    phone_number: '730-979-3735'
  },
  {
    id: 11,
    first_name: 'Siobhan',
    last_name: 'Dodsworth',
    email: 'sdodswortha@newyorker.com',
    phone_number: '557-303-6442'
  },
  {
    id: 12,
    first_name: 'Clotilda',
    last_name: 'Maruszewski',
    email: 'cmaruszewskib@goodreads.com',
    phone_number: '462-596-8572'
  },
  {
    id: 13,
    first_name: 'Jo-ann',
    last_name: 'Campany',
    email: 'jcampanyc@friendfeed.com',
    phone_number: '309-577-3971'
  },
  {
    id: 14,
    first_name: 'Nadiya',
    last_name: 'McFater',
    email: 'nmcfaterd@buzzfeed.com',
    phone_number: '482-717-1605'
  },
  {
    id: 15,
    first_name: 'Ariel',
    last_name: 'Ciabatteri',
    email: 'aciabatterie@engadget.com',
    phone_number: '712-279-1700'
  },
  {
    id: 16,
    first_name: 'Thain',
    last_name: 'Freeberne',
    email: 'tfreebernef@deliciousdays.com',
    phone_number: '400-125-0520'
  },
  {
    id: 17,
    first_name: 'Bram',
    last_name: 'Liverock',
    email: 'bliverockg@goodreads.com',
    phone_number: '745-376-1351'
  },
  {
    id: 18,
    first_name: 'Annetta',
    last_name: 'Crumley',
    email: 'acrumleyh@photobucket.com',
    phone_number: '375-319-9661'
  },
  {
    id: 19,
    first_name: 'Katina',
    last_name: 'Drissell',
    email: 'kdrisselli@feedburner.com',
    phone_number: '841-137-8636'
  },
  {
    id: 20,
    first_name: 'Herbie',
    last_name: 'Erwin',
    email: 'herwinj@ebay.com',
    phone_number: '215-495-0418'
  },
  {
    id: 21,
    first_name: 'Isador',
    last_name: "O'Shesnan",
    email: 'ioshesnank@pen.io',
    phone_number: '297-867-7111'
  },
  {
    id: 22,
    first_name: 'Deny',
    last_name: 'Hanning',
    email: 'dhanningl@opensource.org',
    phone_number: '108-986-3401'
  },
  {
    id: 23,
    first_name: 'Trent',
    last_name: 'Dunley',
    email: 'tdunleym@furl.net',
    phone_number: '212-966-1649'
  },
  {
    id: 24,
    first_name: 'Maudie',
    last_name: 'Triggel',
    email: 'mtriggeln@alexa.com',
    phone_number: '845-612-8912'
  },
  {
    id: 25,
    first_name: 'Tobin',
    last_name: 'Hirtz',
    email: 'thirtzo@ustream.tv',
    phone_number: '298-946-1581'
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
  ClientsServiceMock,
};
