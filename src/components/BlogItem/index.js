// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachList} = props
  const {title, description, publishedDate} = eachList

  return (
    <div className="about-container">
      <h1 className="about-heading">{title}</h1>
      <p className="about-paragraph">{description}</p>
      <p>{publishedDate}</p>
    </div>
  )
}

export default BlogItem
