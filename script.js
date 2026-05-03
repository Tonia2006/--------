document.addEventListener("DOMContentLoaded", () => {
    const schemes=[]

    const saved = localStorage.getItem("schemes")
    if (saved) {
        const parsed = JSON.parse(saved)
        schemes.push(...parsed)
    }
        

    function addScheme(){
        const name = document.getElementById("name")
        const img = document.getElementById("image")
        const type = document.getElementById("type")

        const scheme = {
            name: name.value,
            img: img.value,
            type: type.value
        }

        schemes.push(scheme)
        create_block(scheme)
        
        localStorage.setItem("schemes", JSON.stringify(schemes))
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

        const del = document.createElement('button')
        del.classList.add("delete")
        del.textContent = "Видалити"

        block.appendChild(name)
        block.appendChild(img)
        block.appendChild(type)
        block.appendChild(del)
        
        library.appendChild(block)
    }
    
    for (let i = 0; i < schemes.length; i += 1) {
        create_block(schemes[i])
    }

    function deleteScheme(scheme) {
        const index = schemes.indexOf(scheme)
    
        if (index !== -1) {
            schemes.splice(index, 1)
        }

        localStorage.setItem("schemes", JSON.stringify(schemes))

        library.innerHTML = ""

        schemes.forEach(create_block)
    }

    del.addEventListener("click", () => {
        deleteScheme(scheme)
    })

    const findBtn = document.querySelector(".find")

    findBtn.addEventListener("click", filterSchemes)
    
    function filterSchemes() {
        const checked = document.querySelectorAll('input[type="checkbox"]:checked')
        const selectedTypes = Array.from(checked).map(cb => cb.value)
    
        library.innerHTML = ""
    
        if (selectedTypes.length === 0) {
            schemes.forEach(create_block)
            return
        }
    
        const filtered = schemes.filter(scheme =>
            selectedTypes.includes(scheme.type)
        )
    
        filtered.forEach(create_block)
    }

})