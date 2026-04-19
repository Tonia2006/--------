document.addEventListener("DOMContentLoaded", () => {
    const schemes=[
        {
            name: "",
            img: "",
            type: ""
        }
    ]

    function addScheme(){
        const name = document.getElementById("name")
        const img = document.getElementById("image")
        const type = document.getElementById("type")

        const scheme = {
            name: name,
            img: img,
            type: type
        }

        schemes.push(scheme)
        create_block(scheme)
    }

    const add = document.querySelector(".create")
    add.addEventListener("click", addScheme)

    const library = document.querySelector(".library")

    function create_block(scheme){
        const block = document.createElement('div')
        block.classList.add('card')

        const img = document.createElement('img')
        img.src = scheme['img']
        img.classList.add("img-html")

        const name = document.createElement('h3')
        name.classList.add('name')
        name.textContent = scheme.name

        const type = document.createElement('p')
        type.classList.add("type")
        type.textContent = "Тип: " + scheme.type

        block.appendChild(name)
        block.appendChild(img)
        block.appendChild(type)
        
        library.appendChild(block)
    }
    
    for (let i = 0; i < schemes.length; i += 1) {
        create_block(schemes[i])
    }
})