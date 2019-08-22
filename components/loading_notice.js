const LoadingNotice = (props) => {
  return (
    props.status === 'loading' ?
      <p>Loading...</p> : props.children
  )
}

export default LoadingNotice