import fetch from 'node-fetch'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const IndexPage = ({ stringToDisplay }) => (
  <>
    <Nav />
    <Link href="/contact"><a className="nav-link">Contact Us</a></Link>
    <p>{stringToDisplay}</p>
    <Footer />
  </>
)

export async function getServerSideProps() {
  const res = await fetch('http://localhost:4000/getData')
  const data = await res.json()
  return {
    props: {
      ...data,
    }
  }
}

export default IndexPage
