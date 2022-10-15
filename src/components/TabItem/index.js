// Write your code here
import './index.css'

const TabItem = props => {
  const {details, updateTabItem, isActive} = props
  const {tabId, displayText} = details
  const onClickTab = () => {
    updateTabItem(tabId)
  }
  const activeButtonClassName = isActive ? 'active-btn' : ''
  return (
    <li>
      <button
        type="button"
        onClick={onClickTab}
        className={activeButtonClassName}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
