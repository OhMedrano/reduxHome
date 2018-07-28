import MakeElement from '../Tools/MakeElement.js';


function TitleCard(data) {
  let info = data;
  let makeEle = new MakeElement;

  let TitleCard = makeEle.createEle('div','TitleCard',[12,12,12,12],['bodyContainerItem','titleCardContainer']);
  let titleCardBG = makeEle.createEle('div','titleCardBG',[12,12,12,12],['titleCardBG','titleCardContainerContent']);
  let titleCardContent = makeEle.createEle('div','titleCardContent',[12,12,12,12],['titleCardContent','titleCardContainerContent']);
  let titleCardName = makeEle.createEle('div','titleCardName',[12,12,6,6],['titleCardName','titleCardInnerContent']);
  let titleCardLogo = makeEle.createEle('h1','titleCardLogo',[12,12,6,6],['titleCardLogo','titleCardInnerContent']);

  titleCardLogo.innerHTML = `<span class='outLogo'>The</span> <span class='innerLogo'>Big</span> <span class='outLogo'>Oh</span>`;
  titleCardName.innerHTML = `
    <div class='titleName'>${info.person.name[0] + ' ' + info.person.name[1]}</div>
    <div class='titlePosition'>${info.person.position[0]}</div>
  `;


  titleCardContent.append(titleCardLogo,titleCardName);
  TitleCard.append(titleCardBG,titleCardContent);



  return TitleCard;

}

export default TitleCard;