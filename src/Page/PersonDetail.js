import MakeElement from '../Tools/MakeElement.js';
/*
class animateSkill { 
  console.log('started');
}
*/

let makeEle = new MakeElement;

function mobileWorkDetail(work) {
  let workMobileContain = makeEle.createEle('div','workMobile',[12,0,0,0],'workMobile');
  let workMobileName = makeEle.createEle('div','workMoInName',[12,0,0,0],'workMoInName');
  let workMobilePosition = makeEle.createEle('div','workMoPos',[12,0,0,0],'workMoPos');
    let workMoDate = makeEle.createEle('div','workDate',[12,12,12,12],'workDate');
    let workMoDutyCon = makeEle.createEle('ul','workDutyCon',[12,12,12,12],'workCon');

    workMobileName.innerHTML = `<div>${work.name}</div>`;
    workMobilePosition.innerHTML = `<div>${work.position}</div>`;

    if(work.isPresent) {
      workMoDate.innerHTML = `<div> ${work.startDate} - Present </div>`;
    } else {
      workMoDate.innerHTML = `<div> ${work.startDate} - ${work.endDate}`;
    }

    work.duties.forEach(function(duty, x){
      let dut = makeEle.createEle('li','moDuty'+x,[12,12,12,12],'moDuty');
      dut.innerHTML = duty;

      workMoDutyCon.append(dut);
    })

    workMobileContain.append(workMobileName,workMobilePosition,workMoDate,workMoDutyCon);
  

  return workMobileContain;

}


function PersonDetail(data) {

  let person = data.person;
  let work = data.work;
  let knownPosition = 0;
  let knownMobileWork = 0;
  let lastPosition; 
  let PersonDetail = makeEle.createEle('div','PersonDetail',[12,12,12,12],['bodyContainerItem','personDetailContainer']);
  let personalValkContainer = makeEle.createEle('div','personalValkContainer',[0,0,5,5],'personalValkContainer');
  let personalInfo = makeEle.createEle('div','personalInfo',[12,12,6,6],'personalInfo');

  let personalValk = makeEle.createEle('div','personalValk',[12,12,12,12],'personalValk');
  let personalContentTop = makeEle.createEle('div','personalInfoTop',[12,12,12,12],['personalInfoContent','personalInfoTop']);
  let personalContentMid = makeEle.createEle('div','personalInfoMid',[12,12,10,10],['personalInfoContent','personalInfoMid']);
  let personalContentBtm = makeEle.createEle('div','personalInfoBtm',[12,12,12,12],['personalInfoContent','personalInfoBtm']);
  let personalContentText = makeEle.createEle('div','personalTopText',[12,12,8,8],['personalTopContent','personalTopText']);
  let personalContactContain = makeEle.createEle('div','personalContact',[12,12,8,8],['personalTopContent','personalContact']);
  let personalContentPic = makeEle.createEle('div','personalContentPic',[0,0,4,4],['personalTopContent','personalPic']);
  let workMoContain = makeEle.createEle('div','workMoContain',[12,0,0,0],'workMoContain');
  person.contact.forEach(function(contac,i){
    let contat = makeEle.createEle('a','contact'+i,[6,6,3,3],'contacts');
    let conImg = makeEle.createEle('div','conImg'+i,[12,12,12,12],'conImg');
    let conTitle = makeEle.createEle('div','conTitle'+i,[0,0,12,12],'conTitle');
    contat.href = contac.link;
    conTitle.innerHTML = contac.handle;
    conImg.style.cssText = `background:url(${contac.icon}) no-repeat;`;
    contat.append(conImg,conTitle);
    personalContactContain.append(contat);

  });

  personalContentText.innerHTML = `<div class='personalInnerText'>Hey, my name is Oscar.<br> I am a self taught developer who grew up and lives in NYC. </div>`;


  person.skillSet.forEach(function(skil,i){
    let skill = makeEle.createEle('div','skill'+i,[12,5,5,5],'skills');
    let skillName = makeEle.createEle('div','skillName'+i,[12,12,12,12],'skillName');
    let skillLvlContain = makeEle.createEle('div','skillCon'+i,[12,12,12,12],'skillCon');
    let skillLvl = makeEle.createEle('div','skillLvl'+i,null,'skillLvl');

    skillName.innerHTML = skil.name;
    skillLvl.style.width = (skil.level * 10 ) + '%';
    skillLvlContain.append(skillLvl);
    skill.append(skillName,skillLvlContain);
    personalContentMid.append(skill);
  });
     workMoContain.append(mobileWorkDetail(work[knownMobileWork]));

    work.forEach(function(workExp, i) {
    let workContain = makeEle.createEle('div','workExp'+i,[4,6,4,4],'workExp');
    let workName = makeEle.createEle('div','workName'+i,[0,0,12,12],'workName');
    let workMoName = makeEle.createEle('div','workMoName'+i,[12,0,0,0],'workMoName');
    let workPosition = makeEle.createEle('div','workPos'+i,[0,12,12,12],'workPos');
    let workDate = makeEle.createEle('div','workDate'+i,[0,12,12,12],'workDate');
    let workDutyCon = makeEle.createEle('ul','workDutyCon'+i,[0,12,12,12],'workCon');

    workName.innerHTML = `<div>${workExp.name}</div>`;
    workMoName.innerHTML = `<div>${workExp.name}</div>`;
    workPosition.innerHTML = `<div>${workExp.position}</div>`;

    if(workExp.isPresent) {
      workDate.innerHTML = `<div> ${workExp.startDate} - Present </div>`;
    } else {
      workDate.innerHTML = `<div> ${workExp.startDate} - ${workExp.endDate}`;
    }
    if(i == 0) {
      workMoName.classList.add('activeMobile');
     
    }

 

    workExp.duties.forEach(function(duty, x){
      let dut = makeEle.createEle('li','duty'+i,[12,12,12,12],'duty');
      dut.innerHTML = duty;

      workDutyCon.append(dut);
    })
    workContain.append(workName,workMoName,workPosition,workDate,workDutyCon);
    workMoName.addEventListener('click',function(e) {
      knownMobileWork = i;
      workMoContain.innerHTML = '';
      for(let x=0;x<=work.length-1;x++) {
        if(knownMobileWork == x ){
          document.querySelector('#workMoName'+x).classList.add('activeMobile');
          workMoContain.append(mobileWorkDetail(work[x]));
        } else {
          document.querySelector('#workMoName'+x).classList.remove('activeMobile')
        }
      }
    })


    personalContentBtm.append(workContain);
  });


  personalContentBtm.append(workMoContain);
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