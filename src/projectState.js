//Import Images
import addflight from "./img/addflight.png";
import addflightfull from "./img/addflightfull.png";

export const projectState = () => {
  return [
    {
      title: "AddFlight.com",
      mainImg: addflight,
      secondaryImg: addflightfull,
      url: "/portfolio/addflight",
      awards: [
        {
          title: "Technology Stack",
          description:
            "In order to built this project I have used HTML5, CSS3, SASS and Vanilla JavaScript",
        },
        {
          title: "Project Story",
          description:
            "It is meant to be a simple and yet user friendly search engine for flight tickets and hotel rooms using a iframe from travelpayouts.com",
        },
      ],
    },
    // {
    //   title: "Good Times",
    //   mainImg: goodtimes,
    //   url: "/portfolio/good-times",
    //   secondaryImg: goodtimes2,
    //   awards: [
    //     {
    //       title: "Truly A masterpiece",
    //       description:
    //         "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
    //     },
    //     {
    //       title: "Fresh look on a brutal sport.",
    //       description:
    //         "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
    //     },
    //     {
    //       title: "It’s okay lmao.",
    //       description:
    //         "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
    //     },
    //   ],
    // },
  ];
};
