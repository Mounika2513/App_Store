// Write your code here
import './index.css'

const AppItem = props => {
  const {details} = props
  const {imageUrl, appName} = details
  return (
    <li className="app-item-container">
      <img src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
