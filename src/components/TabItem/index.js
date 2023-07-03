import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, updateActiveTabId} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
    console.log('hi')
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
