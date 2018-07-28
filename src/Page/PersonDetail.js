import MakeElement from '../Tools/MakeElement.js';
/*
class animateSkill { 
  console.log('started');
}
*/

function PersonDetail(data) {
  let makeEle = new MakeElement;
  let person = data.person;
  let work = data.work;
  let knownPosition = 0;
  let lastPosition; 
  let PersonDetail = makeEle.createEle('div','PersonDetail',[12,12,12,12],['bodyContainerItem','personDetailContainer']);
  let personalValkContainer = makeEle.createEle('div','personalValkContainer',[0,0,5,5],'personalValkContainer');
  let personalInfo = makeEle.createEle('div','personalInfo',[12,12,6,6],'personalInfo');

  let personalValk = makeEle.createEle('div','personalValk',[12,12,12,12],'personalValk');
  let personalContentTop = makeEle.createEle('div','personalInfoTop',[12,12,12,12],['personalInfoContent','personalInfoTop']);
  let personalContentMid = makeEle.createEle('div','personalInfoMid',[12,12,10,10],['personalInfoContent','personalInfoMid']);
  let personalContentBtm = makeEle.createEle('div','personalInfoBtm',[12,12,12,12],['personalInfoContent','personalInfoBtm']);
  let personalContentText = makeEle.createEle('div','personalTopText',[8,8,8,8],['personalTopContent','personalTopText']);
  let personalContactContain = makeEle.createEle('div','personalContact',[8,8,8,8],['personalTopContent','personalContact']);
  let personalContentPic = makeEle.createEle('div','personalContentPic',[4,4,4,4],['personalTopContent','personalPic']);

  person.contact.forEach(function(contac,i){
    let contat = makeEle.createEle('a','contact'+i,[3,3,3,3],'contacts');
    let conImg = makeEle.createEle('div','conImg'+i,[12,12,12,12],'conImg');
    let conTitle = makeEle.createEle('div','conTitle'+i,[12,12,12,12],'conTitle');
    contat.href = contac.link;
    conTitle.innerHTML = contac.handle;
    conImg.style.cssText = `background:url(${contac.icon}) no-repeat;`;
    contat.append(conImg,conTitle);
    personalContactContain.append(contat);

  });

  personalContentText.innerHTML = `<div class='personalInnerText'>Hey, my name is Oscar.<br> I am a self taught developer who grew up and lives in NYC. </div>`;


  person.skillSet.forEach(function(skil,i){
    let skill = makeEle.createEle('div','skill'+i,[6,6,5,5],'skills');
    let skillName = makeEle.createEle('div','skillName'+i,[12,12,12,12],'skillName');
    let skillLvlContain = makeEle.createEle('div','skillCon'+i,[12,12,12,12],'skillCon');
    let skillLvl = makeEle.createEle('div','skillLvl'+i,null,'skillLvl');

    skillName.innerHTML = skil.name;
    skillLvl.style.width = (skil.level * 10 ) + '%';
    skillLvlContain.append(skillLvl);
    skill.append(skillName,skillLvlContain);
    personalContentMid.append(skill);
  });


  work.forEach(function(workExp, i) {
    console.log(workExp);
  });

  personalContentTop.append(personalContentText,personalContentPic,personalContactContain);
  personalValkContainer.append(personalValk);
  personalInfo.append(personalContentTop,personalContentMid,personalContentBtm);
  PersonDetail.append(personalValkContainer,personalInfo);

  /* Valk Parallax */
  window.addEventListener('scroll',function(event) {
    let parallaxFactor = 4/* controls speed */
    let scr = window.scrollY || document.documentElement.scrollTop;
    let movedPosition = (scr / parallaxFactor) + -350; 
    let moveValk = document.querySelector('#personalValk');
    moveValk.style.top = movedPosition + 'px';
    knownPosition = scr; /* incase need for up/down conditions */
  })


  return PersonDetail;
}

export default PersonDetail;