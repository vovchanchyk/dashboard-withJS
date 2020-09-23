


const User = function (place, name, img, sublistNumbers, dataRate) {
  this.name = name;
  this.img = img;
  this.sublistNumbers = sublistNumbers;
  this.dataRate = dataRate;

  this.place = place;
  this.createUser = function () {
    let userCard = document.createElement("div");
    userCard.classList.add("row", "col", "no-gutters", "bg-light", "mb-2");
    this.place.appendChild(userCard);

    let userHead = document.createElement("div");
    userHead.classList.add("user", "row", "col", "no-gutters", "flex-nowrap","ml-2");
    userCard.appendChild(userHead);

    let userAvatar = document.createElement("img");
    userAvatar.setAttribute("src", this.img);
    userAvatar.classList.add("rounded-circle", "align-self-center", "user__avatar");
    userHead.appendChild(userAvatar);

    let userMessage = document.createElement("div");
    userMessage.classList.add(
      "message",
      "flex-nowrap",
      "ml-3",
      "d-flex",
      "justify-content-between",
      "w-auto",
      "flex-grow-1",
      "align-items-center"
    );
    userHead.appendChild(userMessage);
    let userTitle = document.createElement("h5");
    userTitle.classList.add("card-title", "mb-0");
    userTitle.innerText = this.name + ' current progress';
    userMessage.appendChild(userTitle);

    let userBody = document.createElement("div");
    
    userBody.classList.add('container-fluid','here');

    userCard.appendChild(userBody);

    let userBodyMessages = ["College Tutoring", "Homeshooling"];
    let userBodyPngClasses = [
      [
        "fas",
        "fa-user-graduate",
        "user__list-head",
        "align-self-center",
        "text-primary",
        "ml-1",
      ],
      [
        "fas",
        "fa-school",
        "user__list-head",
        "align-self-center",
        "text-primary",
      ],
    ];
    for (
      let userBodyIndex = 0;
      userBodyIndex < userBodyMessages.length;
      userBodyIndex++
    ) {
      let userBodyItem = document.createElement("div");
      userBodyItem.classList.add("row", "no-gutters", "user__list", "pl-3");
      userBody.appendChild(userBodyItem);
      let userBodyAvatar = document.createElement("i");
      userBodyItem.appendChild(userBodyAvatar);
      for (
        let userBodyItemIndex = 0;
        userBodyItemIndex < userBodyPngClasses[userBodyIndex].length;
        userBodyItemIndex++
      ) {
        console.log(userBodyItemIndex);
        userBodyAvatar.classList.add(
          userBodyPngClasses[userBodyIndex][userBodyItemIndex]
        );
      }
      let userBodyMessage = document.createElement("div");
      userBodyMessage.classList.add(
        "message",
        "flex-nowrap",
        "ml-3",
        "d-flex",
        "justify-content-between",
        "w-auto",
        "flex-grow-1",
        "align-items-center"
      );
      userBodyItem.appendChild(userBodyMessage);
      let userbodyTitle = document.createElement("h5");
      userbodyTitle.classList.add("card-title", "mb-0");
      userBodyMessage.appendChild(userbodyTitle);
      userbodyTitle.innerText = userBodyMessages[userBodyIndex];

      let userBodysubList = document.createElement("div");
      userBody.appendChild(userBodysubList);
      userBodysubList.classList.add("container-fluid", "here");

      let sublistTitles = [
        "Pre-Algebra",
        "Intruductory Algebra",
        "Intermediate Algebra",
        "College Algebra",
      ];

      for (
        let sublistIndex = 0;
        sublistIndex < sublistTitles.length;
        sublistIndex++
      ) {
        let sublistItem = document.createElement("div");
        sublistItem.classList.add("container-fluid", "user__sublist");
        userBodysubList.appendChild(sublistItem);
        let sublistHead = document.createElement("div");
        sublistHead.classList.add("row", "user__sublist-item", "no-gutters");
        sublistItem.appendChild(sublistHead);

        let sublistNumber = document.createElement("span");
        sublistNumber.classList.add(
          "border",
          "border-danger",
          "pl-1",
          "pr-1",
          "rounded-circle",
          "align-self-center"
        );
        sublistNumber.innerText = this.sublistNumbers[sublistIndex];

        sublistHead.appendChild(sublistNumber);

        let sublistMessage = document.createElement("div");
        sublistMessage.classList.add(
          "message",
          "flex-nowrap",
          "d-flex",
          "ml-2",
          "justify-content-between",
          "flex-grow-1",
          "align-items-center"
        );
        sublistHead.appendChild(sublistMessage);

        let sublistTitle = document.createElement("h5");
        sublistTitle.classList.add("card-title", "mb-0");
        sublistTitle.innerText = sublistTitles[sublistIndex];
        sublistMessage.appendChild(sublistTitle);

        let sublistBody = document.createElement("div");
        sublistBody.classList.add("container-fluid", "border", "here");

        sublistItem.appendChild(sublistBody);

        let containerRate = document.createElement("div");
        containerRate.classList.add("d-flex", "flex-column", "flex-lg-row");

        sublistBody.appendChild(containerRate);

        let datarateTitles = [
          [
            "Whole Numbers",
            "Integers",
            "Fractions",
            "Decimals and Percents",
            "Algebraic Expressions",
            "Equations",
          ],
          [
            "Ratio and Proportion",
            "Word Problems and Inequalities",
            "Functions and Graphing",
            "Linear Equations",
            "Systems of Equations",
          ],
        ];

        for (
          let containerIndex = 0;
          containerIndex < datarateTitles.length;
          containerIndex++
        ) {
          let rateList = document.createElement("ul");
          rateList.classList.add("d-flex", "flex-column", "my-0");
          containerRate.appendChild(rateList);

          for (
            let liIndex = 0;
            liIndex < datarateTitles[containerIndex].length;
            liIndex++
          ) {
            let liItem = document.createElement("li");
            rateList.appendChild(liItem);
            let liIcon = document.createElement("i");
            liIcon.classList.add("fas", "fa-angle-down", "text-success", "m-2");
            liItem.appendChild(liIcon);
            let liSpan = document.createElement("span");
            liSpan.classList.add("text-success");
            liSpan.innerText = this.dataRate[containerIndex][liIndex];
            liItem.appendChild(liSpan);
            let dataTitle = document.createElement("span");
            dataTitle.innerText = datarateTitles[containerIndex][liIndex];
            liItem.appendChild(dataTitle);
          }
        }
      }
    }
  };
};



let place = document.querySelector(".sectionForEccept");



let users =[ 
  {place: place,
     name: 'Vova',
     img : './img/IMG.png',
     sublistNumber :["30", "45", "56", "80"],
      dataRate: [
  ["50% ", "51%", "0%", "100%", "0%", "17"],
  ["0%", "0%", "0%", "0%", "0%"],],
},
{place: place,
  name: 'Will',
  img : './img/will.png',
  sublistNumber :["38", "49", "96", "81"],
   dataRate: [
["50% ", "51%", "0%", "100%", "0%", "17"],
["0%", "0%", "0%", "0%", "0%"],],
},
];

let members = users.map(function(item) {
  const user = new User(item.place, item.name, item.img, item.sublistNumber, item.dataRate);
  user.createUser()
  
})

var collapseData = document.querySelectorAll('.here');
        
let arrowParent = document.querySelectorAll('.sectionForEccept .message');
for(let arrowIndex=0; arrowIndex < arrowParent.length; arrowIndex++){
    
    let arrow = document.createElement('i');
    arrow.classList.add('fas','fa-angle-up','arrow') 
    let toggleAttr = {
        "data-toggle": "collapse",
        "data-target": "#coll" + arrowIndex,
        "aria-expanded": "false",
    };
    for (let key in toggleAttr) {
        arrow.setAttribute(key, toggleAttr[key]);
    }
    
     collapseData[arrowIndex].setAttribute('id', 'coll'+ arrowIndex);
     collapseData[arrowIndex].classList.add('collapse')
    
    arrowParent[arrowIndex].appendChild(arrow)  
}