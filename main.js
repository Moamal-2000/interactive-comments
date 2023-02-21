"use strict";

const addComSection = document.querySelector("main .add-comment-section");
const commentsSection = document.querySelector("main .comments");
const userImgHolder = document.querySelector("main .add-comment-section .img");
let userName = "";

(async function getCurrentUserData() {
  const res = await fetch("data.json");
  const data = await res.json();

  userName = data.currentUser.username;

  const userImg = document.createElement("img");
  userImg.src = data.currentUser.image.webp;
  userImgHolder.appendChild(userImg);
})();






(async function getCommentsData() {
  const res = await fetch("data.json");
  const data = await res.json();

  commentsStructure(data.comments)

})();


function commentsStructure(data) {
  
  console.log(data);
  for (const obj of data) {
    // Create comment
  const comment = document.createElement('div')
  comment.classList.add('comment')
  commentsSection.appendChild(comment)

  // User score container
  const scoreContainer = document.createElement("div");
  scoreContainer.classList.add('score-container')
  comment.appendChild(scoreContainer)

  // Up vote button
  const upVote = document.createElement("button");
  upVote.type = 'button'
  upVote.classList.add('up-vote')
  scoreContainer.appendChild(upVote)

    // User Score
    const userScore = document.createElement("span");
    userScore.classList.add('up-vote')
    userScore.innerHTML = obj.score
    scoreContainer.appendChild(userScore)

    // Down vote button
    const downVote = document.createElement("button");
    downVote.type = 'button'
    downVote.classList.add('down-vote')
    scoreContainer.appendChild(downVote)

        // Down vote icon
        const downVoteIcon = document.createElement("i");
        downVote.className = 'bi bi-dash-lg'
        downVote.appendChild(downVoteIcon)
  }
}
