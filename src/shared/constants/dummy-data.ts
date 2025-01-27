type TrainersType = {
  id: number;
  name: string;
  image: string;
  anketa: {
    experience: string;
    students: number;
    location: string;
    sex: string;
  };
};

export const trainersData: TrainersType[] = [
  {
    id: 1,
    name: "Артём",
    image:
      "https://lh7-us.googleusercontent.com/-j7XICXmc7y6iaJ35o4IKlyrJwwS_lxFz-ZSNzdhaBKIfbIDhbtn7nJvZoPfEe3AxOTkQEh-I7EiR_UMbBFE3i4TpFHIDeIgq5QcAnWxswpRcQ3ZT3VcHHL4088VX6cuEKI6Va0yEUtrU9gE_VXtX0U",
    anketa: {
      experience: "3 года",
      students: 10,
      location: "Москва",
      sex: "Мужчина",
    },
  },
  {
    id: 2,
    name: "Даниил",
    image:
      "https://lh7-us.googleusercontent.com/-j7XICXmc7y6iaJ35o4IKlyrJwwS_lxFz-ZSNzdhaBKIfbIDhbtn7nJvZoPfEe3AxOTkQEh-I7EiR_UMbBFE3i4TpFHIDeIgq5QcAnWxswpRcQ3ZT3VcHHL4088VX6cuEKI6Va0yEUtrU9gE_VXtX0U",
    anketa: {
      experience: "23 года",
      students: 320,
      location: "Санкт Петербург",
      sex: "Трансгендер",
    },
  },
  {
    id: 3,
    name: "Евгений",
    image:
      "https://lh7-us.googleusercontent.com/-j7XICXmc7y6iaJ35o4IKlyrJwwS_lxFz-ZSNzdhaBKIfbIDhbtn7nJvZoPfEe3AxOTkQEh-I7EiR_UMbBFE3i4TpFHIDeIgq5QcAnWxswpRcQ3ZT3VcHHL4088VX6cuEKI6Va0yEUtrU9gE_VXtX0U",
    anketa: {
      experience: "5 лет",
      students: 10,
      location: "Улан-Удэ",
      sex: "Мужчина",
    },
  },
];
