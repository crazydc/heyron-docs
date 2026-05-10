import './RonPanel.css'

export default function RonPanel({
  message = "I'm watching over your agent.",
  showDumpster = true,
  onDumpsterClick
}) {
  return (
    <div className="ron-panel">
      <div className="ron-panel__avatar">
        <div className="ron-panel__avatar-ring" />
        <div className="ron-panel__avatar-face">
          <span className="ron-panel__avatar-eyes">👀</span>
        </div>
      </div>
      
      <div className="ron-panel__bubble">
        <p className="ron-panel__message">{message}</p>
      </div>

      <div className="ron-panel__satellite">
        <div className="ron-panel__satellite-dish" />
        <div className="ron-panel__satellite-wave" />
      </div>

      {showDumpster && (
        <button 
          className="ron-panel__dumpster"
          onClick={onDumpsterClick}
          title="Moderator access"
        >
          🗑️
        </button>
      )}
    </div>
  )
}