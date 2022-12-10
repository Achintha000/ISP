import { Link } from 'react-router-dom';
import styled from 'styled-components';
import main from '../assets/main.jpg';
import { useGlobalContext } from '../context/appContext';
import { Redirect } from 'react-router-dom';
import logo from '../assets/logo.png';
import { startTransition } from 'react';
function Home() {
  const { user } = useGlobalContext();

  return (
    <>
      {user && <Redirect to='/dashboard' />}
      <Wrapper>
        <nav>
          <img src={logo} alt='jobs app' className='logo'/>
        </nav>
        <div className='container page'>
          <div className='info'>
            <h1>CHAMI URL CHECKER</h1>
            <p>
            Free URL scanner and Website checker to detect phishing, scam sites & fraudulent sites.
            </p>

            <Link to='/register' className='btn hero-btn'>
              Login / Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img hero' />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .container {
    min-height: calc(100vh - 6rem);
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: 6rem;
    display: flex;
    align-items: center;
  }
  h1 {
    font-weight: 700;
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .container {
      grid-template-columns: 1fr 1fr;
      column-gap: 6rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Home;



