//you cant really deploy an chrome extenstion without manifest.json file, so we do that grind
let randomShit = [
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg",
    "https://i.pinimg.com/236x/fc/13/7b/fc137b1534d9f16acd85edf4075a5353--memes-humor.jpg",
    "https://pbs.twimg.com/media/FJtC369XEAEaO_n.jpg",
    "https://c.tenor.com/fW_9qdx05c0AAAAC/pepe-stare.gif",
    "https://pbs.twimg.com/media/EpMDQVTVoAAoyvk.jpg",
    "https://pbs.twimg.com/media/FO9sg-oX0AEp1uB.jpg",
    "https://pbs.twimg.com/media/FPJmygxXoAQyVop.jpg",
    "https://img.guildedcdn.com/ContentMedia/a5a04fd72f8c1015b532605f38cb2c6c-Preview.webp",
    "https://pbs.twimg.com/media/FPJmygxXoAQyVop.jpg",
    "https://wallpaperaccess.com/full/2647200.jpg"

];

let blockedUrls = [
    {
        link: "twitter.com",
      },
      {
        link: "facebook.com",
      },
      {
        link: "instagram.com",
      },
      {
        link: "linkedin.com",
      },
];

blockedUrls.forEach((element) => {
    if (window.location.origin.includes(element.link)) {
        const imgs = document.getElementsByTagName("body");
            const randomImg = Math.floor(Math.random() * randomShit.length);
            document.write("<img src='" + randomShit[randomImg] + "'>");
            
    }
  });

  



