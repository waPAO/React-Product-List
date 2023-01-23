import data, { namesAndCategories } from './data'
import './Categories.css'

function Categories(props) {
  const { category, onClick } = props
	return (
		<div className='Categories'>
			{namesAndCategories.map(obj => {
        const className = obj.name === category ? 'selected' : ''
				return (
					<button 
          className={className}
          onClick={() => onClick(obj.name)}
          >
						{obj.name}
						<span> {obj.count} </span>
					</button>
				)
			})}
		</div>
	)
}

export default Categories