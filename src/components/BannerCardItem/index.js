// Write your code here.
import './index.css'

const Banner = props => {
  const {itemDetails} = props
  const {headerText, className, description} = itemDetails

  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="paragraph">{description}</p>
      <button type="button" className="btn">
        Show More
      </button>
    </li>
  )
}

export default Banner
