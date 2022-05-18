import ProductDetail from './ProductDetail'
import PriceDetail from './PriceDetail'
import './PriceDetail.css'
import NavBarAll from '../NavBar/NavBarAll'

export default function DetailVisit () {
  return (
    <div >
      <NavBarAll/>
      <ProductDetail/>
      <PriceDetail />
    </div>
  )
}