export function Video() {
  return (
    <video
      width="500"
      height="500"
      autoPlay
      preload="auto"
      muted
      playsInline
      controls={false}
      loop
    >
      <source
        src="/dinevate-site/videos/dinevate-order-video.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
}
