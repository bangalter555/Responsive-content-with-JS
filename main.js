const d = document,
  w = window;

const responsiveMedia = (id, mq, mobileContent, desktopContent) => {
  let breakpoint = w.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
  };

  breakpoint.addListener(responsive);
  responsive(breakpoint);
};

d.addEventListener("DOMContentLoaded", (e) => {
  responsiveMedia(
    "youtube",
    "(min-width: 570px)",
    `<a href="https://www.youtube.com/watch?v=j0wCewl87ec" target="_blank">Watch video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/j0wCewl87ec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
});
