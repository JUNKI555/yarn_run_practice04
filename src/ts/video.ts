import Hls from "hls.js";

const videoSourceUrl = (document.getElementById("video_source") as HTMLSpanElement).innerText;
const vidoElement = document.getElementById("video") as HTMLMediaElement;
if (Hls.isSupported()) {
  const hls = new Hls();
  hls.loadSource(videoSourceUrl);
  hls.attachMedia(vidoElement);
  hls.on(Hls.Events.MEDIA_ATTACHED, function () {
    console.log("video and hls.js are now bound together !");
    vidoElement.style.display = "block";
    vidoElement.muted = true;
    vidoElement.play();

    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      console.log("manifest loaded, found " + data.levels.length + " quality level");
    });
  });
} if (vidoElement.canPlayType('application/vnd.apple.mpegurl')) {
  vidoElement.src = videoSourceUrl;
  vidoElement.addEventListener('canplay',function() {
    vidoElement.style.display = "block";
    vidoElement.play();
  });
}
