import '../css/style.scss';
import Data from './Data/Data.js';
import MakeElement from './Tools/MakeElement.js';
import TitleCard from './Page/TitleCard.js';
import PersonDetail from './Page/PersonDetail.js';



function RenderSite(){
	let body = document.querySelector('body');

	console.log(Data);

  let makeEle = new MakeElement;

	let bodyContainer = makeEle.createEle('div','bodyContainer',[12,12,12,12],'bodyContain');  

  bodyContainer.append(TitleCard(Data),PersonDetail(Data));
  
  body.append(bodyContainer);
}

RenderSite(); 