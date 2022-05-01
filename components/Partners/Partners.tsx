import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';
import { OurPartners } from '../utils/Partners';
const Container = styled.div`
  /* margin:40px 0 ; */
  padding: 0;
  background: #dddddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: left;
    min-width: 100px;

    padding: 5px 0;
    overflow: hidden;
    img {
      width: 150px !important;
      height: 40px !important;
      object-fit: contain;
    }
  }
`;
const loader = ({ src, width }: any) => {
  return `${src}?w=${width}`;
};

function Partners() {
  return (
    <Container>
      <Marquee pauseOnHover={true}>
        <div>
          {OurPartners.map((partner: any, i: any) => (
            <div key={i}>
              <Link href={partner.url} passHref>
                <a>
                  <Image loader={loader} src={partner.logo} width={150} height={40} alt={partner.name} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </Marquee>
    </Container>
  );
}

export default Partners;
