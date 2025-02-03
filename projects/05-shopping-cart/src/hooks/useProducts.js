import { useState, useEffect } from 'react';
import { getProducts } from '../services/products';

export function useProducts () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const products = await getProducts()
        setProducts(products)
      } catch (e) {
        console.error('Error fetching products:', e)
      } finally {
        setLoading(false)
      }
    }
  
    fetchProducts()
  }, [])

  return { products, loading }
}