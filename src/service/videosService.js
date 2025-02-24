import videos from "../../data/videos.json";

export function getVideos() {
  return new Promise((res) => setTimeout(() => res(videos), 1000));
}

export function getVideoById(id) {
  // return Promise.resolve(videos.find((item) => item.id == id));
  return new Promise((res) =>
    setTimeout(() => res(videos.find((item) => item.id == id)), 1000)
  );
}
