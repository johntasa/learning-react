import './Filters.css'
import { useId } from "react"
import { useFilters } from '../hooks/useFilters.js'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price over:</label>
        <input id={minPriceFilterId} type="range" min='0' max='1000' value={filters.minPrice} onChange={handleChangeMinPrice}/>
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category:</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='beauty'>Beauty</option>
          <option value='groceries'>Groceries</option>  
        </select>
      </div>
    </section>
  )
}