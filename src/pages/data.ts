/*This data is for the lastest(this data is updated eveyerday) and warning page */
export const columns = [
  {
    key: "street",
    label: "Street",
  },
  {
    key: "camera",
    label: "Camera",
  },
  {
    key: "time",
    label: "Time",
  },
  {
    key: "level",
    label: "level",
  },
];

export const rows = [
  {
    key: "1",
    street: "Pitt st",
    camera: "CCTV 4",
    time: "0:00",
    level: "Level 3",
  },
  {
    key: "1",
    street: "Pitt st",
    camera: "CCTV 4",
    time: "0:00",
    level: "Level 1",
   
  },
  {
    key: "2",
    street: "Thomas st",
    camera: "CCTV 5",
    time: "0:00",
    level: "Level 2",
  },
  {
    key: "3",
    street: "Thomas st",
    camera: "CCTV 6",
    time: "6:00",
    level: "Level 3",
  },
  {
    key: "4",
    street: "Pink st",
    camera: "CCTV 7",
    time: "9:00",
    level: "Level 3",
  },
  {
    key: "5",
    street: "George st",
    camera: "CCTV 7",
    time: "12:00",
    level: "Level 1",
  },
  {
    key: "6",
    street: "Pink st",
    camera: "CCTV 7",
    time: "15:00",
    factors: 'weapons',
    level: "Level 3",
  },
  {
    key: "7",
    street: "Pink st",
    camera: "CCTV 7",
    time: "18:00",
    level: "Level 3",
  },
  {
    key: "8",
    street: "Pitt st",
    camera: "CCTV 4",
    time: "21:00",
    level: "Level 3",
  },
  {
    key: "9",
    street: "Thomas st",
    camera: "CCTV 5",
    time: "0:00", // Adjusted to match the time format
    level: "Level 3",
  },
];

/*This data is for the Statistics page */
interface Row {
  level: string;
  street: string;
  camera: string;
  date: string;
  day: string;
  time: string;
  factors: string | undefined;
  
}
interface Row1{
  street: string;
  People: number;
  Subtances: number;
  Violence: number;
  Weapons: number;
  Lighting: string;
  Maintaince: string;
  date: string
}

export const datam: Row1[] = [
{People: 4,
  date: '01/16/2024',
  Subtances: 3,
  Violence: 4,
  Weapons: 3,
  Lighting: "8/10",
  Maintaince: "8/10",
street:"Thomas St"},
{People: 4,
  date: '01/16/2024',
  Subtances: 3,
  Violence: 4,
  Weapons: 3,
  Lighting: "8/10",
  Maintaince: "8/10",
street:"Quay St"},

{People: 4,
  date: '01/16/2024',
  Subtances: 3,
  Violence: 4,
  Weapons: 3,
  Lighting: "8/10",
  Maintaince: "8/10",
street:"Broadway"},

{People: 4,
  date: '01/16/2024',
  Subtances: 3,
  Violence: 3,
  Weapons: 3,
  Lighting: "8/10",
  Maintaince: "8/10",
street:"Harris St"},
]

export const data: Row[] = [
  {
    level: "Level 2",
    street: 'Queen St',
    camera: 'CCTV 12',
    date: '01/16/2024',
    day: 'Sat',
    time: '9:30am',
    factors: 'weapons',
  },
  {
    level: "Level 2",
    street: 'Harris St',
    camera: 'CCTV 12',
    date: '01/16/2024',
    day: 'Sat',
    time: '9:30am',
    factors: 'weapons',
  },
  {
    level: "Level 2",
    street: 'Thomas St',
    camera: 'CCTV 12',
    date: '01/16/2024',
    day: 'Sat',
    time: '9:30am',
    factors: 'weapons',
  },

  {
    level: "Level 1",
    street: 'Thomas St',
    camera: 'CCTV 12',
    date: '01/17/2024',
    day: 'Sat',
    time: '9:30am',
    factors: 'weapons',
  },
  {
    level: "Level 3",
    street: 'Thomas St',
    camera: 'CCTV 12',
    date: '01/18/2024',
    day: 'Sat',
    time: '9:30am',
    factors: 'weapons',
  },
  {
    level: "Level 3",
    street: 'Thomas St',
    camera: 'CCTV 12',
    date: '01/16/2024',
    day: 'Sat',
    time: '9:30am',
    factors: 'weapons',
  },
  {
    level: "Level 3",
    street: 'jj St',
    camera: 'CCTV 12',
    date: '01/15/2024',
    day: 'Sat',
    time: '9:30am',
    factors: 'weapons',

  },
  {
    level: "Level 1",
    street: 'jj St',
    camera: 'CCTV 12',
    date: '01/17/2024',
    day: 'Sat',
    time: '9:30am',
    factors: 'weapons',
   
  },
  {
    level: "Level 1",
    street: 'jj St',
    camera: 'CCTV 12',
    date: '01/17/2024',
    day: 'Sat',
    time: '9:30am',
    factors: 'weapons',
 
  },
  {
    level: "Level 1",
    street: 'jj St',
    camera: 'CCTV 12',
    date: '01/17/2024',
    day: 'Sat',
    time: '9:30am',
    factors: 'weapons',
   
  },
  {
    level: "Level 1",
    street: 'jj St',
    camera: 'CCTV 12',
    date: '01/17/2024',
    day: 'Sat',
    time: '9:30am',
    factors: 'weapons',
 
  },
  {
    level: "Level 1",
    street: 'jj St',
    camera: 'CCTV 12',
    date: '01/17/2024',
    day: 'Sat',
    time: '9:30am',
    factors: 'weapons',

  },
  {
    level: "Level 1",
    street: 'jj St',
    camera: 'CCTV 12',
    date: '01/17/2024',
    day: 'Sat',
    time: '9:30am',
    factors: 'weapons',

  },
  {
    level: "Level 1",
    street: 'jj St',
    camera: 'CCTV 12',
    date: '01/17/2024',
    day: 'Sat',
    time: '9:30am',
    factors: 'weapons',
 
  },
  {
    level: "Level 1",
    street: 'jj St',
    camera: 'CCTV 12',
    date: '01/17/2024',
    day: 'Sat',
    time: '9:30am',
    factors: 'weapons',
   
  },
  {
    level: "Level 1",
    street: 'jj St',
    camera: 'CCTV 12',
    date: '01/17/2024',
    day: 'Sat',
    time: '9:30am',
    factors: 'weapons',
   
  },
];