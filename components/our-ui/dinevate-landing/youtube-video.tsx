interface IYoutubeVideo {
  src: string;
  className?: string;
}

export const YoutubeVideo = ({ src, className }: IYoutubeVideo) => {
  return (
    <div className={`youtube-container ${className}`}>
      <iframe
        src="https://www.youtube.com/embed/WhY7uyc56ms?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=WhY7uyc56ms"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
