console.log("Guilherme Faccin")
const imageData = {};

const unlikedHeartSVG = `<svg width="20" height="20" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.12809C23.3215 -5.99587 44.127 9.97007 15 30.5C-14.127 9.97207 6.67852 -5.99587 15 3.12809Z" fill="white"/>
</svg>`;

const likedHeartSVG = `<svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.62809C23.3215 -6.49587 44.127 9.47007 15 30C-14.127 9.47207 6.67852 -6.49587 15 2.62809Z" fill="#C60E0E"/>
</svg>`;

function openModal2() {
    const loginModal = document.getElementById("loginModal");
    if (loginModal) {
        loginModal.style.display = "block";
    }
}


function closeModal() {
    const loginModal = document.getElementById("loginModal");
    if (loginModal) {
        loginModal.style.display = "none";
    }
}

function openModal(imageSrc, imageName) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");

    modal.style.display = "block";
    modalImg.src = imageSrc;
    modalTitle.textContent = imageName;

    // Inicializar dados da imagem se não existirem
    if (!imageData[imageSrc]) {
        imageData[imageSrc] = { likes: 0, isLiked: false, comments: [] };
    }

    updateLikeCount(imageSrc);
    updateLikeButtonAppearance(imageSrc);
    updateCommentCount(imageSrc);
    renderComments(imageSrc);
}


function closeModal() {
    document.getElementById("imageModal").style.display = "none";
    modal.style.display = "none";
}
var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    imageModal.style.display = "none";
  }
}


function toggleLike() {
    const imageSrc = document.getElementById("modalImage").src;
    if (!imageData[imageSrc].isLiked) {
        imageData[imageSrc].likes++;
        imageData[imageSrc].isLiked = true;
    } else {
        imageData[imageSrc].likes--;
        imageData[imageSrc].isLiked = false;
    }
    updateLikeCount(imageSrc);
    updateLikeButtonAppearance(imageSrc);
}


function updateLikeCount(imageSrc) {
    document.getElementById("likeCount").textContent = imageData[imageSrc].likes;
}

function updateLikeButtonAppearance(imageSrc) {
    const likeButton = document.getElementById("likeButton");
    if (imageData[imageSrc].isLiked) {
        likeButton.innerHTML = likedHeartSVG + ` <span id="likeCount">${imageData[imageSrc].likes}</span>`;
        likeButton.classList.add('liked');
    } else {
        likeButton.innerHTML = unlikedHeartSVG + ` <span id="likeCount">${imageData[imageSrc].likes}</span>`;
        likeButton.classList.remove('liked');
    }
}


function addComment() {
    const imageSrc = document.getElementById("modalImage").src;
    const commentInput = document.getElementById("commentInput");
    const commentText = commentInput.value.trim();
    if (commentText) {
        const newComment = {
            author: 'UsuÃ¡rio Atual',
            text: commentText,
            timestamp: new Date()
        };
        imageData[imageSrc].comments.push(newComment);
        renderComments(imageSrc);
        updateCommentCount(imageSrc);
        commentInput.value = '';
    }
}


function formatDate(date) {
    return new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}


function renderComments(imageSrc) {
    const commentSection = document.querySelector(".comment-section");
    if (commentSection) {
        commentSection.innerHTML = `
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.02125 21.8883C5.21587 22.0976 5.365 22.3504 5.45802 22.6286C5.55103 22.9068 5.58564 23.2035 5.55937 23.4976C5.4276 24.859 5.17777 26.2043 4.81312 27.5161C7.42875 26.8671 9.02625 26.1156 9.75188 25.7218C10.1634 25.4985 10.6374 25.4455 11.0831 25.5732C12.3608 25.9382 13.6777 26.1219 15 26.1197C22.4925 26.1197 28.125 20.4798 28.125 14.0644C28.125 7.65105 22.4925 2.0092 15 2.0092C7.5075 2.0092 1.875 7.65105 1.875 14.0644C1.875 17.0139 3.03187 19.7505 5.02125 21.8883ZM4.09687 29.7342C3.65263 29.8286 3.20694 29.915 2.76 29.9934C2.385 30.0577 2.1 29.6398 2.24813 29.2661C2.41461 28.8453 2.5672 28.4185 2.70562 27.9862L2.71125 27.9661C3.17625 26.5195 3.555 24.8559 3.69375 23.3068C1.39313 20.8355 0 17.6006 0 14.0644C0 6.29685 6.71625 0 15 0C23.2838 0 30 6.29685 30 14.0644C30 21.832 23.2838 28.1289 15 28.1289C13.5143 28.131 12.0349 27.9243 10.5994 27.514C9.62437 28.0425 7.52625 29.0049 4.09687 29.7342V29.7342Z" fill="#161616"/>
        </svg>
        
            
            <button id="submitComment">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.01 3.03L9.52 6.25L2 5.25L2.01 3.03ZM9.51 11.75L2 14.97V12.75L9.51 11.75ZM0.00999999 0L0 7L15 9L0 11L0.00999999 18L21 9L0.00999999 0Z" fill="#000000"/>
                </svg>
            </button>
        `;

        const commentList = document.createElement('div');
        commentList.className = 'comment-list';
        imageData[imageSrc].comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <strong>${comment.author}</strong>
                <span>${formatDate(comment.timestamp)}</span>
                <p>${comment.text}</p>
            `;
            commentList.appendChild(commentElement);
        });
        commentSection.appendChild(commentList);
    }
}


function updateCommentCount(imageSrc) {
    const commentCountElement = document.getElementById("commentCount");
    if (!commentCountElement) {
        console.error("Element with id 'commentCount' not found");
        return;
    }
    const commentCount = imageData[imageSrc].comments.length;
    commentCountElement.innerHTML = `
        <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.68788 22.3883C5.8825 22.5976 6.03163 22.8504 6.12464 23.1286C6.21766 23.4068 6.25227 23.7035 6.226 23.9976C6.09422 25.359 5.84439 26.7043 5.47975 28.0161C8.09538 27.3671 9.69288 26.6156 10.4185 26.2218C10.8301 25.9985 11.304 25.9455 11.7498 26.0732C13.0274 26.4382 14.3443 26.6219 15.6666 26.6197C23.1591 26.6197 28.7916 20.9798 28.7916 14.5644C28.7916 8.15105 23.1591 2.5092 15.6666 2.5092C8.17413 2.5092 2.54163 8.15105 2.54163 14.5644C2.54163 17.5139 3.6985 20.2505 5.68788 22.3883ZM4.7635 30.2342C4.31925 30.3286 3.87357 30.415 3.42663 30.4934C3.05163 30.5577 2.76663 30.1398 2.91475 29.7661C3.08124 29.3453 3.23383 28.9185 3.37225 28.4862L3.37788 28.4661C3.84288 27.0195 4.22163 25.3559 4.36038 23.8068C2.05975 21.3355 0.666626 18.1006 0.666626 14.5644C0.666626 6.79685 7.38288 0.5 15.6666 0.5C23.9504 0.5 30.6666 6.79685 30.6666 14.5644C30.6666 22.332 23.9504 28.6289 15.6666 28.6289C14.181 28.631 12.7015 28.4243 11.266 28.014C10.291 28.5425 8.19288 29.5049 4.7635 30.2342V30.2342Z" fill="#161616"/>
        </svg>
        ${commentCount} Comentários
    `;
}

// Adicionar comentário
function addComment() {
    const imageSrc = document.getElementById("modalImage")?.src;
    const commentInput = document.getElementById("commentInput");
    if (!imageSrc || !commentInput) {
        console.error("Required elements not found");
        return;
    }
    const commentText = commentInput.value.trim();
    if (commentText) {
        const newComment = {
            author: 'Usuário Atual',
            text: commentText,
            timestamp: new Date()
        };
        if (!imageData[imageSrc]) {
            imageData[imageSrc] = { likes: 0, isLiked: false, comments: [] };
        }
        imageData[imageSrc].comments.push(newComment);
        renderComments(imageSrc);
        updateCommentCount(imageSrc);
        commentInput.value = '';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.grid-item').forEach(img => {
        img.addEventListener('click', () => openModal(img.src, img.name));
    });

    document.querySelector(".close")?.addEventListener('click', closeModal);
    document.getElementById("likeButton")?.addEventListener('click', toggleLike);
    document.getElementById("submitComment")?.addEventListener('click', addComment);

    document.getElementById("commentInput")?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addComment();
        }
    });
});

let button = document.querySelector(".like-button");

button.addEventListener("click", function(e) {
  e.preventDefault();
  this.classList.toggle("active");
  this.classList.add("animated");
  function incrementCounter() {}
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


