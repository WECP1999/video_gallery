import ICategory from "../../utils/interfaces/ICategory";
import ISeries from "../../utils/interfaces/ISeries";

const seriesCollection: readonly ICategory<ISeries>[] = Object.freeze([
  {
    id: 1,
    category: "Comedia",
    movies: [
      {
        id: 1,
        name: "Barakamon",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BYWM4YThiZGItMzUxNi00ZjllLWI0OWMtMjFhZTQxYjM4NDQ4XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_FMjpg_UX1000_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=1gmN_3kr4wo",
        seasons: 1,
      },
      {
        id: 2,
        name: "Spy x Family",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BMWM4Njg2MjUtODU3OS00MGNmLWIyNTctZGZkNTdjN2JhNmU2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=44qfOGvEWAU",
        seasons: 2,
      },
      {
        id: 3,
        name: "Kotaro Lives Alone",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BYzlhYzEwNDctMTY1ZC00M2JiLWIzZTAtMWE5YzBkODIwNDgwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=WLzmLUtVkxA",
        seasons: 1,
      },
      {
        id: 4,
        name: "Hitoribocchi no Marumaruseikatsu",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BM2M4MDRmZjQtYzYzNi00ZjA0LWFhYzctY2MwOTllN2UxZjM5XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=FCjtykwyN_8",
        seasons: 2,
      },
      {
        id: 5,
        name: "Komi-san wa, Komyushō Desu",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BM2M4MDRmZjQtYzYzNi00ZjA0LWFhYzctY2MwOTllN2UxZjM5XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=tLdLTSnmnoA",
        seasons: 2,
      },
      {
        id: 6,
        name: "Kawaii dake ja Nai Shikimori-san",
        imagePreview:
          "https://somoskudasai.com/wp-content/uploads/2021/10/shikimori_visual.jpg",
        trailerUri: "https://www.youtube.com/watch?v=Cv9pwJdRNwE",
        seasons: 1,
      },
    ],
  },
  {
    id: 2,
    category: "Aventura",
    movies: [
      {
        id: 1,
        name: "One Piece",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=89JWRYEIG-s",
        seasons: 20,
      },
      {
        id: 2,
        name: "Hunter X Hunter",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=F_YR1T_MdCI",
        seasons: 6,
      },
      {
        id: 3,
        name: "Vinland Saga",
        imagePreview: "https://flxt.tmsimg.com/assets/p17127060_b_v9_aa.jpg",
        trailerUri: "https://www.youtube.com/watch?v=f8JrZ7Q_p-8",
        seasons: 1,
      },
      {
        id: 4,
        name: "Naruto",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BMDI3ZDY4MDgtN2U2OS00Y2YzLWJmZmYtZWMzOTM3YWFjYmUyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=-G9BqkgZXRA",
        seasons: 9,
      },
      {
        id: 5,
        name: "Gintama",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BZmNiZTk5MDQtMjIwMi00ZDU4LTgxOWMtODYwOGU5N2E5YzY0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=YQC3ot0IjiA",
        seasons: 8,
      },
      {
        id: 6,
        name: "Castlevania",
        imagePreview:
          "https://static.wikia.nocookie.net/castlevania/images/3/31/Castlevania_Season_4_Official_Poster_Art.jpg/revision/latest?cb=20210415171038",
        trailerUri: "https://www.youtube.com/watch?v=L7iWXfZzEMc",
        seasons: 4,
      },
    ],
  },
  {
    id: 3,
    category: "Fantasía",
    movies: [
      {
        id: 1,
        name: "Fairy Tail",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BMzZjNmRhNWQtNTAyYy00Yjk2LWE0NzUtMmYyNTU0YTE5NjJiXkEyXkFqcGdeQXVyNjI4OTE5OTM@._V1_FMjpg_UX1000_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=4KSN7mxhiYE",
        seasons: 21,
      },
      {
        id: 2,
        name: "Jujutsu Kaisen",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=aPBUUJbrAWo",
        seasons: 1,
      },
      {
        id: 3,
        name: "Jojo's Bizarre Adventure",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BZDc3NGQ3ZWQtYjNkOC00MjhiLTg2N2YtNmZlOGNiZTFkOWNhXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=R6PXCd14ynY",
        seasons: 5,
      },
      {
        id: 4,
        name: "One Punch Man",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=Poo5lqoWSGw",
        seasons: 2,
      },
      {
        id: 5,
        name: "Avatar",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_FMjpg_UX1000_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=IyZ0xetSb9s",
        seasons: 4,
      },
      {
        id: 6,
        name: "Saint Seiya: The Lost Canvas",
        imagePreview:
          "https://m.media-amazon.com/images/M/MV5BNWQ5OThkNDYtNzYzZS00Zjg3LTgyYzEtM2NjNGE4ZmVmZjg4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
        trailerUri: "https://www.youtube.com/watch?v=2a0wDrpuvlo",
        seasons: 1,
      },
    ],
  },
]);

export default seriesCollection;
