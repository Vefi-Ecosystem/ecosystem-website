import Image from 'next/image';
import React from 'react';
import Barinor from '../../public/images/team/Barinor_Kue.jpg';
import Emmah from '../../public/images/team/Emmah_James.jpg';
import Kingsley from '../../public/images/team/Kingsley_Victor.jpg';
import Monah from '../../public/images/team/Monah_Paul.jpg';

import { Container } from '../../styles/Team.style';

function Team() {
  return (
    <Container id="team">
      <div className="mother-con">
        <div className="img-card1">
          <div>
            <div>
              <Image layout="responsive" src={Emmah} alt="emmanuel_james" />
            </div>
            <div className="mind-con">
              <div className="mind-name">Emmanuel James</div>
              <div className="post">Chief Executive Officer</div>
            </div>
          </div>
          <div>
            <div>
              <Image layout="responsive" src={Kingsley} alt="kingsley_victor" />
            </div>
            <div className="mind-con">
              <div className="mind-name">Kingsley Victor</div>
              <div className="post">Chief Technology Officer</div>
            </div>
          </div>
        </div>
        <div className="img-card2">
          <div>
            <div>
              <Image layout="responsive" src={Monah} alt="mona_paul" />
            </div>
            <div className="mind-con">
              <div className="mind-name">Mona Paul</div>
              <div className="post">Chief Operating Officer</div>
            </div>
          </div>
          <div>
            <div>
              <Image
                layout="responsive"
                src={Barinor}
                alt="kue_barinor_paul"
               
              />
            </div>
            <div className="mind-con">
              <div className="mind-name">Kue Barinor Paul</div>
              <div className="post">Legal Officer</div>
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
