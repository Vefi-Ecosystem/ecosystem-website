import Image from 'next/image';
import React from 'react';
import James from '../../assets/images/james.png';
import Kingsley from '../../assets/images/kingsley.png';

import { Container } from '../../styles/Team.style';

const MemberCard = () => {};

function Team() {
  return (
    <Container>
      <div className="mother-con">
        <div className="img-card1">
          <div>
            <div>
              <Image src={James} alt="Founding fathers" height={340} width={268} />
            </div>
            <div className="mind-con">
              <div className="mind-name">James Emmanuel</div>
              <div className="post">Chief Executive Officer</div>
            </div>
          </div>
          <div>
            <div>
              <Image src={Kingsley} alt="Founding fathers" />
            </div>
            <div className="mind-con">
              <div className="mind-name">James Emmanuel</div>
              <div className="post">Chief Executive Officer</div>
            </div>
          </div>
        </div>
        <div className="img-card2">
          <div>
            <div>
              <Image src={James} alt="Founding fathers" />
            </div>
            <div className="mind-con">
              <div className="mind-name">James Emmanuel</div>
              <div className="post">Chief Executive Officer</div>
            </div>
          </div>
          <div>
            <div>
              <Image src={James} alt="Founding fathers" />
            </div>
            <div className="mind-con">
              <div className="mind-name">James Emmanuel</div>
              <div className="post">Chief Executive Officer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="gen-card">
        <div className="big-text">
          Genius minds <br /> behind the <br /> Vefi Ecosystem
        </div>
        <div className="small-text">
          Vefi Ecosystem comprises highly motivated individuals who are professionals with many years of experience in
          blockchain technology, business, economics, software engineering, etc.
        </div>
      </div>
    </Container>
  );
}

export default Team;
