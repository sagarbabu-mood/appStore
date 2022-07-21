import './index.css'

const AppItem = props => {
  const {key, details} = props

  const {appId, appName, imageUrl} = details

  return (
    <>
      <li className="list">
        <img src={imageUrl} alt={appName} className="app-image" />
        <p>{appName}</p>
      </li>
    </>
  )
}

export default AppItem
