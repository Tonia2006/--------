document.addEventListener('DOMContentLoaded', () => {
    const comments=[]

    const saved = localStorage.getItem("comments")
    if (saved) {
        const parsed = JSON.parse(saved)
        comments.push(...parsed)
    }
        

    function addComment(){
        const author = document.getElementById("author")
        const com = document.getElementById("content")

        const comment = {
            author: author.value,
            com: com.value,
        }

        comments.push(comment)
        create_block(comment)
        
        localStorage.setItem("comments", JSON.stringify(comments))
    }

    const add = document.querySelector(".send")
    add.addEventListener("click", addComment)

    const library = document.querySelector(".commets-area")

    function create_block(comment){
        const block = document.createElement('div')
        block.classList.add('comment')

        const au = document.createElement('h4')
        au.textContent = comment.author
        au.classList.add("author")

        const com = document.createElement('p')
        com.classList.add('com')
        com.textContent = comment.com

        block.appendChild(au)
        block.appendChild(com)
        
        library.appendChild(block)
    }
    
    for (let i = 0; i < comments.length; i += 1) {
        create_block(comments[i])
    }

  });