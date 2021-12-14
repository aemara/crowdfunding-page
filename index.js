const mainBackProjectBtn = document.querySelector(".back-btn");
//bookmark button here
const selectRewardBtns = document.querySelectorAll('.select-pledge-btn');
const modals = document.querySelectorAll(".modal");
const pledgeModal = document.querySelector(".pledge-modal");
const pledgeModalCloseIcon = pledgeModal.querySelector(".close-modal-icon");
const listOfModalPledges = pledgeModal.querySelectorAll(".pledge");
const thanksModal = document.querySelector(".thanks-modal");





//Event listeners for opening and closing the modal
mainBackProjectBtn.addEventListener("click", () => {
  pledgeModal.style.display = "block";
});
pledgeModalCloseIcon.addEventListener("click", () => {
  pledgeModal.style.display = "none";
});

modals.forEach(modal => {
    modal.addEventListener('click', (event) => {
        if(event.target === event.currentTarget) {
            modal.style.display = 'none';
        }
    })
})


//Event listeners for selecting a pledge from home page
selectRewardBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        let pledgeType = event.target.parentElement.classList[1];
        let modalPledgeSelected = pledgeModal.querySelector(`.${pledgeType}`);
        pledgeModal.style.display = 'block';
        selectPledge(modalPledgeSelected);

    })
})



// Event listeners for selecting a pledge from the modal
listOfModalPledges.forEach((pledgeDiv) => {
  pledgeDiv.addEventListener("click", (event) => {
    selectPledge(pledgeDiv);
    listOfModalPledges.forEach((pledgeDiv) => {
      if (pledgeDiv !== event.currentTarget) {
        unSelectPledge(pledgeDiv);
      }
    });
  });
});

const pledgeMoneyInput = document.querySelectorAll(".money-form");

pledgeMoneyInput.forEach(input => {
    input.addEventListener("click", () => {
      input.classList.add("input-pledge-border");
    });

    input.querySelector('.pledge-input').addEventListener("focus", () => {
      input.classList.add("input-pledge-border");
    });
})


//Functions for styling a selected and an unselected pledge

const selectPledge = (modalPledge) => {
    listOfModalPledges.forEach(pledge => {
        if(pledge !== modalPledge) {
            unSelectPledge(pledge);
        }
    })
    modalPledge.querySelector('.selected-radio').style.display = 'block';
    modalPledge.classList.add('selected-pledge-border');
    modalPledge.querySelector('.enter-pledge').style.display = 'block';
    modalPledge.style.cursor = 'default';
}

const unSelectPledge = (modalPledge) => {
    modalPledge.querySelector(".selected-radio").style.display = "none";
    modalPledge.classList.remove("selected-pledge-border");
    if(modalPledge.querySelector('.money-form')) {
        modalPledge
          .querySelector(".money-form")
          .classList.remove("input-pledge-border");
    }
    if (modalPledge.querySelector(".enter-pledge")) {
      modalPledge.querySelector(".enter-pledge").style.display = "none";
    }
    modalPledge.style.cursor = 'pointer';
}