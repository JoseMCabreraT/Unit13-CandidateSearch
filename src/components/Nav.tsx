import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPage = useLocation().pathname;


  return (
    <div>
<h1>
        <Link to='/' id='logo'>
          
        </Link>
      </h1>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <h2>
            <Link
              to='/'
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
             Home
            </Link>
          </h2>
        </li>
        <li className='nav-item'>
          <h2>
            <Link
              to='/SavedCandidates'
              className={
                currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'
              }
            >
              Potential Candidates
            </Link>
          </h2>
        </li>
      </ul>



    </div>
  )//return
}; //Nav function

export default Nav;
