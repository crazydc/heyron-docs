import { Link } from 'react-router-dom'
import './CardGrid.css'

export default function CardGrid({ 
  columns = 3, 
  gap = 'md', 
  children 
}) {
  return (
    <div className={`card-grid card-grid--${columns} card-grid--gap-${gap}`}>
      {children}
    </div>
  )
}