const milestonesData = JSON.parse(data).data;
console.log(milestonesData);
//load course milestones

function loadMilestone() {
  const milestones = document.querySelector(".milestones");
  milestones.innerHTML = `${milestonesData
    .map(function (milestone) {
      return `  <div class="milestone border-b">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" /></div>
              <div onClick='openMilestone(this,${milestone._id})'>
                <p>
                  ${milestone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              ${milestone.modules
          .map(function (module) {
            return `
                    <div class="module border-b">
                        <p>${module.name}</p>
                    </div>
                    `;
          })
          .join("")}
            </div>
          </div>
          `;
    })
    .join("")}`;
}
function openMilestone(milestoneElement, id) {
  const currentNode = milestoneElement.parentNode.nextElementSibling;
  const shownPanel = document.querySelector('.show');
  const activePanel = document.querySelector('.active');

  (currentNode.classList.contains('show') || !shownPanel) ? null : shownPanel.classList.remove('show');
  currentNode.classList.toggle('show');

  (!activePanel || milestoneElement.classList.contains('active')) ? null : activePanel.classList.remove('active');
  milestoneElement.classList.toggle('active');

  showMilestone(id);
}
loadMilestone();
function showMilestone(id) {
  const milestoneImage = document.querySelector('.milestoneImage');
  const title = document.querySelector('.title');
  const details = document.querySelector('.details');

  milestoneImage.style.opacity = '0';

  milestoneImage.src = milestonesData[id].image;
  title.innerText = milestonesData[id].name;
  details.innerText = milestonesData[id].description;
}

//listen for hero image load
const milestoneImage = document.querySelector('.milestoneImage');
// milestoneImage.addEventListener('load',function(){
//   milestoneImage.style.opacity='1';
// })

milestoneImage.onload = function () {
  this.style.opacity = '1';
}

