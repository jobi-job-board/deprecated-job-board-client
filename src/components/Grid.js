import bag from '../assets/icons/icon-bag.png';
import code from '../assets/icons/icon-bag.png';
import curved from '../assets/icons/curved-line.png';
import pencil from '../assets/icons/icon-pencil.png';
import phone from '../assets/icons/icon-phone.png';
import video from '../assets/icons/icon-video.png';
import { ArrowUpRight } from 'phosphor-react';

const Grid = () => {
  return (
    <div className="wrapper">
      <h2 className="left">
        Most demanding job <span className="new-line">categories.</span>
      </h2>
      <div className="grid">
        <div className="grid-box flex-col">
          <div className="circle">
            <img className="icon" src={pencil} alt="pencil" />
          </div>
          <h4>
            Design & <span className="new-line">Development</span>
          </h4>
          <p>2340 vacancy</p>
        </div>
        <div className="grid-box flex-col">
          <div className="circle">
            <img className="icon" src={pencil} alt="pencil" />
          </div>
          <h4>
            Customer Marketing<span className="new-line">&Sales.</span>
          </h4>
          <p>1560 vacancy</p>
        </div>
        <div className="grid-box flex-col">
          <div className="circle">
            <img className="icon" src={bag} alt="bag" />
          </div>
          <h4>
            Business<span className="new-line">Marketing.</span>
          </h4>
          <p>2210 vacancy</p>
        </div>
        <div className="grid-box flex-col">
          <div className="circle">
            <img className="icon" src={phone} alt="phone" />
          </div>
          <h4>
            Business<span className="new-line">Development.</span>
          </h4>
          <p>960 vacancy</p>
        </div>
        <div className="grid-box flex-col">
          <div className="circle">
            <img className="icon" src={code} alt="code" />
          </div>
          <h4>
            Programming & <span className="new-line">Code</span>
          </h4>
          <p>2340 vacancy</p>
        </div>
        <div className="grid-box flex-col">
          <div className="circle">
            <img className="icon" src={video} alt="video" />
          </div>
          <h4>
            Video Edition <span className="new-line">& 3D work</span>
          </h4>
          <p>2340 vacancy</p>
        </div>
        <div className="grid-box flex-col">
          <div className="circle">
            <img className="icon" src={pencil} alt="pencil" />
          </div>
          <h4>
            Art & <span className="new-line">Animation.</span>
          </h4>
          <p>2340 vacancy</p>
        </div>
        <div className="grid-box flex-col green">
          <h4>13k+</h4>
          <p>Job already posted</p>
          <div className="flex-space-evenly">
            <img className="icon" src={curved} alt="code" />
            <div className="circle circle-green">
              <ArrowUpRight size={32} weight="bold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
