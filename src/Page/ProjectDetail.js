import MakeElement from '../Tools/MakeElement.js';

let makeEle = new MakeElement;
let selectedproject = 0;

function ProjectsDetail(currentProject) {
  let projectDetailCon = makeEle.createEle('div','projectDetailCon',[12,12,12,12],'projectActualDetail');

  let projectName = makeEle.createEle('div','projectName',[12,12,12,12],'projectName');
  let projectLink = makeEle.createEle('a','projLink',[12,12,8,8],'projLink');
  let projectDescript = makeEle.createEle('ul','projectDescript',[12,12,12,12],'projectDescript');
  let projectFramework = makeEle.createEle('div','projectFrame',[12,12,4,4],'projectFramework');
  currentProject.purpose.forEach(function(purp,i){
    let projectPurpose = makeEle.createEle('li','purpose'+i,[12,12,12,12],'purposes');

    projectPurpose.innerHTML = purp;

    projectDescript.append(projectPurpose);
  });
  projectFramework.innerHTML = `<div class='projectFrameInner'>${currentProject.framework}</div>`;
  projectLink.innerHTML = `<div class='projectLink'>Click to view</div>`;
  projectLink.href = currentProject.url;
  projectName.innerHTML = currentProject.name;

  projectDetailCon.append(projectName,projectFramework,projectLink,projectDescript);
  return projectDetailCon;
}

function Projects(data) {
  
  let projectData = data.projects;


  let ProjectsCon = makeEle.createEle('div','ProjectsCon',[12,12,12,12],['bodyContainerItem','projectsContain']);
  let projectLeftSide = makeEle.createEle('div','projectLeft',[12,12,7,7],['projectConItem','projectLeft']);
  let projectRightSide = makeEle.createEle('div','projectRight',[12,12,5,5],['projectConItem','projectRight']);
  let projectViewer = makeEle.createEle('div','projectImgView',[12,12,12,12],['projectLeftItem','projectImgViewer']);
  let projectSelection = makeEle.createEle('div','projectImgSelection',[12,12,12,12],['projectLeftItem','projectImgSelection']);
  let projectDetailContain = makeEle.createEle('div','projectDetailContain',[12,12,10,10],['projectRightItem','projectDetailCon']);
  let projectIronMan = makeEle.createEle('div','ironMan',[12,12,12,12],'ironMan');

  projectDetailContain.append(ProjectsDetail(projectData[selectedproject]));


  projectViewer.style.cssText = 'background:url('+projectData[selectedproject].projectImage+') no-repeat;';
  projectData.forEach(function(project,i) {
    let projectContain = makeEle.createEle('div','projectContain'+i,[12,12,6,6],'projectSelect');
    let projectContainImg = makeEle.createEle('div','projectContainImg'+i,[12,12,12,12],'projectContainImg');

    projectContainImg.style.cssText = `background: url(${project.projectImage})no-repeat;`;

    projectContain.append(projectContainImg);
    projectSelection.append(projectContain);

    projectContain.addEventListener('click',function(event){
      selectedproject = i;
      projectDetailContain.innerHTML = '';
       projectViewer.style.cssText = 'background:url('+projectData[selectedproject].projectImage+') no-repeat;';
       projectDetailContain.append(ProjectsDetail(projectData[selectedproject]));
    })
  });




  
  projectRightSide.append(projectDetailContain,projectIronMan);
  projectLeftSide.append(projectViewer, projectSelection);
  ProjectsCon.append(projectLeftSide,projectRightSide);

  return ProjectsCon;




}

export default Projects;