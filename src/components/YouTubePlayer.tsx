interface Props {
  videoId: string
  title: string
}

export default function YouTubePlayer({ videoId, title }: Props) {
  return (
    <iframe
      className="absolute inset-0 h-full w-full"
      src={`https://www.youtube.com/embed/${videoId}?rel=0&playsinline=1&modestbranding=1`}
      title={title}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  )
}
