export type Hobby = {
  title: string;
  content: JSX.Element[];
  image: string;
};

const hobbies: Hobby[] = [
  {
    title: 'Keyboards',
    content: [
      <>
        <span className="text-blue-400">I have spent way too much money on this hobby.</span>
      </>,
      <>You might have noticed one of my projects was a keyboard.</>,
      <>
        I&apos;ve been in the niche world of custom mechanical keyboards since 2016. I went from
        wanting a Ducky Shine 3 to designing my own boards from the ground up.
      </>,
      <>
        Through this hobby, I was able to learn how to design circuit boards in KiCAD, draw in
        AutoCAD, and model in Fusion 360. Not only that, but I was able to achieve a better
        understanding of lower-level C programming through open-source firmware.
      </>,
      <>
        I still plan on designing more interesting keyboards in the future, so keep an eye out for
        new designs as time goes on.
      </>,
      <>
        Feel free to reach out to me for anything keyboard-related! I&apos;m always happy to share
        my knowledge.
      </>,
    ],
    image: '/imgs/keyboards.mp4',
  },
  {
    title: 'Speedrunning',
    content: [
      <>
        <span className="text-blue-400">Patience is key.</span>
      </>,
      <>
        I started speedrunning competitively since early 2017, and it was one of the most fulfilling
        (and mentally challenging) experiences of my life.
      </>,
      <>
        Without getting into specifics, I was high-ranking runner in a fairly popular speedgame, and
        have won tournaments for hundreds of dollars in prize money. People who know me closely can
        verify this.
      </>,
      <>
        It truly is a mental battle. You are in total control of the game, and any mistake you make
        is purely your own (except for RNG, of course). It gets really easy to beat yourself up, but
        you learn to keep moving forward and push towards your goal.
      </>,
      <>
        To this day, nothing really compares to the feeling of beating your own time. It may seem
        like a simple thing, but when you grind for days, or even weeks or months without success,
        it feels like heaven.
      </>,
      <>
        I honestly wish I had more time to put into this hobby. I&apos;m investing time into more
        important things for now.
      </>,
    ],
    image: '/imgs/speedrunning.mp4',
  },
];

export default hobbies;
