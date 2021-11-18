const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remainded = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
  // toggle the last one
  if (idx === 7 && smallCups[idx].classList.contains('full')) idx--;
  else if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
  updateBigCup();
}
//  update BigCup
function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;
  // 작은 컵이 empty일 때 아무것도 보이지 않게 하기
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    //   작은 컵 click 했을 때 큰 컵에서 보이기
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100} %`;
  }

  //   fullCups 일 때 remainded 안 보이게 하기
  if (fullCups === totalCups) {
    remainded.style.visibility = 'hidden';
    remainded.style.height = 0;
  } else {
    remainded.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
