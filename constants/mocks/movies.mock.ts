import ICategory from "../../utils/interfaces/ICategory";
import IMovie from "../../utils/interfaces/IMovie";

const movieCollection: readonly ICategory<IMovie>[] = Object.freeze([
  {
    id: 1,
    category: "Acción",
    movies: [
      {
        id: 1,
        name: "Pulp Fiction",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=tGpTpVyI_OQ&t=5s",
      },
      {
        id: 2,
        name: "Nobody",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BMjJiYjdjNWEtODNiMS00MTBiLWE4NTAtNGNjMDgxZWQzMTgyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=wZti8QKBWPo",
      },
      {
        id: 3,
        name: "John Wick",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=C0BMx-qxsP4",
      },
      {
        id: 4,
        name: "Blade",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BOTk2NDNjZWQtMGY0Mi00YTY2LWE5MzctMGRhZmNlYzljYTg5XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=kaU2A7KyOu4",
      },
      {
        id: 5,
        name: "Matrix",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=m8e-FF8MsqU",
      },
      {
        id: 6,
        name: "Dunkirk",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=F-eMt3SrfFU",
      },
    ],
  },
  {
    id: 2,
    category: "Romance",
    movies: [
      {
        id: 1,
        name: "Brokeback Mountain",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BMTY5NTAzNTc1NF5BMl5BanBnXkFtZTYwNDY4MDc3._V1_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=kMA30rThECg",
      },
      {
        id: 2,
        name: "La La Land",
        imagePreview:
          "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6294ae3e57013170bfffc9e8d77379c3_500x.jpg?v=1573617350",
        trailerUri: "https://www.youtube.com/watch?v=0pdqf4P9MB8",
      },
      {
        id: 3,
        name: "Me Before You",
        imagePreview:
          "https://es.web.img3.acsta.net/pictures/16/02/04/15/49/599815.jpg",
        trailerUri: "https://www.youtube.com/watch?v=Eh993__rOxA",
      },
      {
        id: 4,
        name: "The Notebook",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BOTk2NDNjZWQtMGY0Mi00YTY2LWE5MzctMGRhZmNlYzljYTg5XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=FC6biTjEyZw",
      },
      {
        id: 5,
        name: "Eternal Sunshine Of The Spotless Mind",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=07-QBnEkgXU",
      },
      {
        id: 6,
        name: "Your Name",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=qz0TDMd_cB0",
      },
    ],
  },
  {
    id: 3,
    category: "Comedia",
    movies: [
      {
        id: 1,
        name: "Sausage Party",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BMjkxOTk1MzY4MF5BMl5BanBnXkFtZTgwODQzOTU5ODE@._V1_FMjpg_UX1000_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=WVAcTZKTgmc",
      },
      {
        id: 2,
        name: "Sonic The Hedgehog",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_FMjpg_UX1000_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=szby7ZHLnkA",
      },
      {
        id: 3,
        name: "Don't Look Up",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BZjcwZjY3NjAtNzkxZS00NmFjLTg1OGYtODJmMThhY2UwMTc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=RbIxYm3mKzI",
      },
      {
        id: 4,
        name: "Tropic Thunder",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BNDE5NjQzMDkzOF5BMl5BanBnXkFtZTcwODI3ODI3MQ@@._V1_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=6R7GkXE6sqk",
      },
      {
        id: 5,
        name: "Rush Hour",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BYWM2NDZmYmYtNzlmZC00M2MyLWJmOGUtMjhiYmQ2OGU1YTE1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=JMiFsFQcFLE",
      },
      {
        id: 6,
        name: "The Truman Show",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=dlnmQbPGuls",
      },
    ],
  },
]);

export default movieCollection;
