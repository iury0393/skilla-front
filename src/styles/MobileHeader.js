import styled from "styled-components";

const MobileWrapper = styled.div`
margin: 1rem 0;
font-size: 1rem;
padding-left: 1rem;

.mobile-profile-stats span {
  padding-right: 1rem;
}

.mobile-bio,
.mobile-profile-stats {
  display: none;
}

@media screen and (max-width: 645px) {
  .mobile-bio {
    display: block;
  }

  .mobile-profile-stats {
    display: block;
    margin-bottom: 0.4rem;
  }
}

a {
  color: ${(props) => props.theme.blue};
}
`;

export default MobileWrapper;