// content 
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const bodyContainer = document.getElementById("body")

// HTML
function displayPost() {
    let postContent = ""
    for(let i = 0; i < posts.length; i++) {
        postContent += ` <div class="about">
            <img  class="avatar" src=${posts[i].avatar} alt="picture of post creator">
            <div class="about-txt">
            <h3 class="name">${posts[i].name}</h3>
            <p  class="location">${posts[i].location}</p>  
            </div>  
        </div>
        <div class="main-img">
        <img class="artist-img" src=${posts[i].post} alt="self-portrait of the artist">
        </div>
        <footer class="footer">
        <i class="fa-regular fa-heart icon" id="heart-btn${i}"></i>
           <i class="fa-regular fa-comment icon"></i>
            <i class="fa-regular fa-paper-plane icon"></i>
             <p class="likes-el" id="likes-el${i}">${posts[i].likes} likes</p> 
             <div class="caption">
              <h4>${posts[i].username}</h4>
              <p>${posts[i].comment}</p> 
              </div>
              </footer>
             <!--<div class="user-comments">
              <img class="avatar" src="images/user-avatar.png">
              <input type="text" id="comment-input" placeholder="Add a comment...">
               <button id="post-btn" class="post">Post</button>
              <div class="comments-cont" id="comments-cont"></div>
              </div>-->
            </div>
         `
 }
    bodyContainer.innerHTML = postContent
}

// Change heart button color and number of likes  
function addEvents(){
    let heartBtn = []
    let likeEl = []
    let likeAmount = []
    isLiked = false

 for (let i = 0; i < posts.length; i++){
        heartBtn.push(document.getElementById(`heart-btn${i}`))
        likeEl.push(document.getElementById(`likes-el${i}`)) 
        likeAmount.push(posts[i].likes)
   
    // heart button click      
        heartBtn[i].addEventListener("click", function(){
        if (isLiked === false) {
            likeAmount[i] += 1
            document.getElementById(`heart-btn${i}`).style.color = "red"
            isLiked = true
        } else {
            likeAmount[i] -= 1
            document.getElementById(`heart-btn${i}`).style.color = "black"
            isLiked = false
        }
        likeEl[i].textContent = likeAmount[i] + " likes"
        
    })
}
}
displayPost()
addEvents()


/*let myComment = []

function renderComments(){
    const commentsCont = document.getElementById("comments-cont")
    commentsCont.innerHTML = ""
    for (let i = 0; i < myComment.length; i++) {
        const comment = document.createElement('li')
        comment.textContent = myComment[i]
        commentsCont.append(comment)
    }

}
renderComments()

const postBtn = document.getElementById('post-btn')

postBtn.addEventListener("click", function() {
    const commentInput = document.getElementById("comment-input")
    if(commentInput.value) {
        myComment.push(commentInput.value)
        commentInput.value = ""
        renderComments()
    }
})*/


/* Old Code :(
const heartBtn = document.getElementById("heart-btn")
const postLikes = document.getElementById("likes")


let likes = 21
heartBtn.addEventListener("click", function() {
     likes += 1
    postLikes.textContent = likes + " likes"
})*/
  
