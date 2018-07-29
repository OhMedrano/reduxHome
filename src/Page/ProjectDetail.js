import MakeElement from '../Tools/MakeElement.js';



function Projects(data) {
  let makeEle = new MakeElement;
  let projectData = data.projects;
  let selectedproject = 0;

  let ProjectsCon = makeEle.createEle('div','ProjectsCon',[12,12,12,12],['bodyContainerItem','projectsContain']);
  let projectLeftSide = makeEle.createEle('div','projectLeft',[12,12,7,7],['projectConItem','projectLeft']);
  let projectRightSide = makeEle.createEle('div','projectRight',[12,12,5,5],['projectConItem','projectRight']);
  let projectViewer = makeEle.createEle('div','projectImgView',[12,12,12,12],['projectLeftItem','projectImgViewer']);
  let projectSelection = makeEle.createEle('div','projectImgSelection',[12,12,12,12],['projectLeftItem','projectImgSelection']);


  projectViewer.style.cssText = 'background:url('+projectData[selectedproject].projectImage+') no-repeat;';

  projectData.forEach(function(project,i) {
    let projectContain = makeEle.createEle('div','projectContain'+i,[12,12,6,6],'projectSelect');
    let projectContainImg = makeEle.createEle('div','projectContainImg'+i,[12,12,12,12],'projectContainImg');

    projectContainImg.style.cssText = `background: url(${project.projectImage})no-repeat;`;

    projectContain.append(projectContainImg);
    projectSelection.append(projectContain);

  })



  projectLeftSide.append(projectViewer, projectSelection);
  ProjectsCon.append(projectLeftSide,projectRightSide);

  return ProjectsCon;




}

export default Projects;