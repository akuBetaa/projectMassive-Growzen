import IconPill from "/src/assets/icons/icon-pill.svg";
import IconStock from "/src/assets/icons/icon-stock.svg";
import IconForum from "/src/assets/icons/icon-forum.svg";
import ImgArticle from "/src/assets/img/article/article-1.jpg";

export const navLinks = [
    {
      id: 1,
      path: "",
      text: "Beranda",
    },
    {
      id: 2,
      path: "artikel",
      text: "Artikel",
    },
    {
      id: 3,
      path: "forum",
      text: "Forum",
    },
  ];

  export const fiturApps = [
      {
        id      : 1,
        image   : IconPill,
        title : "Pengingat Minum Obat",
        text   : "Membantu mengingatkan Anda dalam meminum obat OAT tepat waktu",
      },
      {
        id      : 2,
        image   : IconStock,
        title : "Stok Obat",
        text   : "Bantu menghitung penyimpanan obat dan jadwal pengambilan obat OAT",
      },
      {
        id      : 3,
        image   : IconForum,
        title : "Forum Komunitas",
        text   : "Wadah sesama pejuang sembuh TB untuk saling berbagi, memotivasi dan menyemangati untuk sembuh TB",
      },
    ]

    //COMMENT

    export const getComments = async () => {
      return [
        {
          id: "1",
          body: "First comment",
          username: "Nana Al",
          userId: "1",
          parentId: null,
          createdAt: "2023-11-16T23:00:33.010+02:00",
        },
        {
          id: "2",
          body: "Second comment",
          username: "Beta Nurul Awwalin",
          userId: "2",
          parentId: null,
          createdAt: "2023-11-16T23:00:33.010+02:00",
        },
        {
          id: "3",
          body: "First comment first child",
          username: "Beta Nurul Awwalin",
          userId: "2",
          parentId: "1",
          createdAt: "2023-11-16T23:00:33.010+02:00",
        },
        {
          id: "4",
          body: "Second comment second child",
          username: "Beta Nurul Awwalin",
          userId: "2",
          parentId: "2",
          createdAt: "2023-11-16T23:00:33.010+02:00",
        },
      ];
    };
    
    export const createComment = async (text, parentId = null) => {
      return {
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId,
        userId: "1",
        username: "Beta Nurul Awwalin",
        createdAt: new Date().toISOString(),
      };
    };
    
    export const updateComment = async (text) => {
      return { text };
    };
    
    export const deleteComment = async () => {
      return {};
    };


    // ARTIKEL 

  