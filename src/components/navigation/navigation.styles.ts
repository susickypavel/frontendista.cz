import styled from "@emotion/styled"

const TOGGLE_HEIGHT = "80px"

export const NavigationWrapper = styled.nav`
  & ul {
    display: flex;
    flex-flow: row wrap;
    height: 100%;
    justify-content: center;
    align-items: center;
    height: 65px;

    & li {
      padding: 2.4em;

      & a {
        text-transform: uppercase;
        text-decoration: none;
        font-weight: bold;
        font-size: 2rem;
        color: black;
      }
    }
  }

  @media (max-width: 768px) {
    background: #212121;

    & ul {
      background: #212121;
      height: 0;
      overflow: hidden;
      flex-flow: column wrap;

      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
    }

    & ul li {
      width: 100%;
      padding: 2.4em 0;

      & a {
        display: block;
        text-align: center;
        color: white;
      }
    }
  }
`

export const NavigationToggleWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    z-index: 2;

    height: ${TOGGLE_HEIGHT};
  }
`
