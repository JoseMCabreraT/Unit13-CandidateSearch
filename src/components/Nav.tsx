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
              TEST 1
            </Link>
          </h2>
        </li>
        <li className='nav-item'>
          <h2>
            <Link
              to='/WatchList'
              className={
                currentPage === '/WatchList' ? 'nav-link active' : 'nav-link'
              }
            >
              TES 2
            </Link>
          </h2>
        </li>
        <li className='nav-item'>
          <h2>
            <Link
              to='/SeenIt'
              className={
                currentPage === '/SeenIt' ? 'nav-link active' : 'nav-link'
              }
            >
              TEST 3
            </Link>
          </h2>
        </li>
      </ul>



    </div>
  )
};

export default Nav;
