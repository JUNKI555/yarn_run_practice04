import u from "umbrella";

type Video = {
  id: string;
  title: string;
  artist: string;
  thumbnailUrl: string;
  sourceUrl: string;
  date: string;
}

let videos = [];
fetch("/json/videos.json")
  .then(function(response){
    if (!response.ok) {
      return Promise.reject(new Error("error"));
    }

    return response.json();
  })
  .then(function(json){
    videos = json as Array<Video>;

    createVideoThumbnailsByU(videos);
  })
  .catch(function(error){
    console.error("fetch error", error);
  });

function createVideoThumbnailsByU(videos:Array<Video>):void {
  const thumbnailList = u<HTMLDivElement>("#thumbnail_list");

  for (const video of videos) {
    const thumbnailImg = u('<img>').addClass("w-full h-40").attr("src", video.thumbnailUrl);
    const thumbnailImgDiv = u('<div>').addClass("mb-2");
    thumbnailImgDiv.append(thumbnailImg);

    const titleDiv = u('<div>').text(video.title);
    const artistDiv = u('<div>').addClass("text-sm").text(video.artist);
    const dateDiv = u('<div>').addClass("text-sm").text(video.date);
    const infoDiv = u('<div>').addClass("flex-grow ml-4");
    infoDiv.append(titleDiv).append(artistDiv).append(dateDiv);

    const iconImg = u('<img>').addClass("flex-none w-10 h-10 rounded-full").attr("src", video.thumbnailUrl);
    const iconAndInfoDiv = u('<div>').addClass("flex");
    iconAndInfoDiv.append(iconImg).append(infoDiv);

    const thumbnailDiv = u('<div>').addClass("h-56");
    thumbnailDiv.append(thumbnailImgDiv).append(iconAndInfoDiv);

    thumbnailList.append(thumbnailDiv);
  }
}

function createVideoThumbnails(videos:Array<any>):void {
  const thumbnailList = document.getElementById("thumbnail_list");

  for (const video of videos) {
    const thumbnailImg = document.createElement("img");
    thumbnailImg.className = "w-full h-40";
    thumbnailImg.src = video.thumbnailUrl;
    const thumbnailImgDiv = document.createElement("div");
    thumbnailImgDiv.className = "mb-2";
    thumbnailImgDiv.appendChild(thumbnailImg);
  
    const titleDiv = document.createElement("div");
    titleDiv.innerText = video.title;
    const artistDiv = document.createElement("div");
    artistDiv.className = "text-sm";
    artistDiv.innerText = video.artist;
    const dateDiv = document.createElement("div");
    dateDiv.className = "text-sm";
    dateDiv.innerText = video.date;
    const infoDiv = document.createElement("div");
    infoDiv.className = "flex-grow ml-4";
    infoDiv.appendChild(titleDiv);
    infoDiv.appendChild(artistDiv);
    infoDiv.appendChild(dateDiv);
  
    const iconImg = document.createElement("img");
    iconImg.className = "flex-none w-10 h-10 rounded-full";
    iconImg.src = video.thumbnailUrl;

    const iconAndInfoDiv = document.createElement("div");
    iconAndInfoDiv.className = "flex";
    iconAndInfoDiv.appendChild(iconImg);
    iconAndInfoDiv.appendChild(infoDiv);
  
    const thumbnailDiv = document.createElement("div");
    thumbnailDiv.className = "h-56";
    thumbnailDiv.appendChild(thumbnailImgDiv);
    thumbnailDiv.appendChild(iconAndInfoDiv);

    thumbnailList?.appendChild(thumbnailDiv);
  }
}




// u<HTMLDivElement>("#thumbnai_list")