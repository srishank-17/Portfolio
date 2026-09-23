const BACKGROUND_VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_030633_1712fc71-4979-4e14-98f9-9f95702ab3da.mp4'

export function GlobalVideoBackground() {
  return (
    <div className="global-video-background" aria-hidden="true">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={BACKGROUND_VIDEO_URL} type="video/mp4" />
      </video>
    </div>
  )
}
