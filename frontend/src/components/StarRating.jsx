import y_star from "../assets/Yellow_star.svg"
import g_star from "../assets/Grey_star.svg"

function StarRating(props) {
  return (
    <>
      {Array.from({ length: Math.floor(props.score) }, (_, index) => (
        <img
          key={index}
          height="30"
          src={y_star.src}
          alt={`${index + 1} yellow star${index >= 1 ? "s" : ""}`}
        />
      ))}

      <svg
        width="34"
        height="30"
        viewBox="0 0 17 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset={`${props.score?.toString().split(".")[1]}%`}
              style={{ stopColor: "#FFCC48", stopOpacity: "1" }}
            />
            <stop style={{ stopColor: "#FFCC48", stopOpacity: "0" }} />
          </linearGradient>
        </defs>

        <path
          d="M8.34989 1.12123L10.3561 5.15227L10.4729 5.38701L10.7324 5.42439L15.21 6.06932L11.9728 9.1979L11.7824 9.38186L11.8276 9.64269L12.5929 14.0658L8.58104 11.9743L8.34989 11.8538L8.11875 11.9743L4.10692 14.0658L4.87223 9.64269L4.91736 9.38186L4.72702 9.1979L1.48975 6.06932L5.96737 5.42439L6.22689 5.38701L6.34372 5.15227L8.34989 1.12123Z"
          fill="url(#gradient)"
          stroke="#FFCC48"
        />
      </svg>

      {Array.from({ length: Math.floor(5 - props.score) }, (_, index) => (
        <img
          key={index}
          height="32"
          src={g_star.src}
          alt={`${index + 1} grey star${index >= 1 ? "s" : ""}`}
        />
      ))}
    </>
  )
}

export default StarRating
