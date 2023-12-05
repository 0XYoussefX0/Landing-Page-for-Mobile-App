function Loader(props) {
  return (
    <div style={props.style}>
      <div className="skeletonContainer">
        <div className="skeleton-about">
          <div className="skeleton skeletonTitle"></div>
          <div className="skeleton skeletonDate"></div>
        </div>
        <div className="skeleton marginTop16 marginBottom20 skeletonStars"></div>
        <div className="skeletonTextContainer">
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
        <div className="skeleton skeletonPostedOn marginTop48"></div>
      </div>
    </div>
  )
}

export default Loader
