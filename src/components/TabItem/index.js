// Write your code here

import './index.css'

const TabItem = props => {
  const {details, key, updateState, isActiveTabId} = props
  const {tabId, displayText} = details

  const changeActiveTabId = () => {
    updateState(tabId)
  }

  const activeTabId = isActiveTabId ? 'style' : ''

  return (
    <>
      <li>
        <button
          className={`tab-list ${activeTabId}`}
          type="button"
          onClick={changeActiveTabId}
        >
          {displayText}
        </button>
      </li>
    </>
  )
}

export default TabItem
