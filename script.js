
const btnFrontend  = document.getElementById('btn-frontend')
const btnBackend   = document.getElementById('btn-backend')
const btnWorkFlow  = document.getElementById('btn-workflow')
const btnWebDesign = document.getElementById('btn-webdesign')

const iconsContainer = document.getElementById('aside-icons')

const iconsFront = [
    './src/Icons/Front/React.png',
    './src/Icons/Front/JS.png', 
    './src/Icons/Front/TAILWIND.png',
    './src/Icons/Front/NODEJS.png',
    './src/Icons/Front/TYPESCRIPT.png',
]

const iconsBack = [
    './src/Icons/Back/NODEJS.png',
    './src/Icons/Back/JAVA.png',
    './src/Icons/Back/POSTGRES.png',
    './src/Icons/Back/Sql.png',
    './src/Icons/Back/POSTMAN.png',
]

const iconsFlow = [
    './src/Icons/Flow/GITHUB.png',
    './src/Icons/Flow/VSCODE.png',
    './src/Icons/Flow/INTELLIJ.png',
    './src/Icons/Flow/NOTION.png',
    './src/Icons/Flow/POSTMAN.png',
]

const iconsDesign = [
    './src/Icons/Design/FIGMA.png',
    './src/Icons/Design/PHOTOSHOP.png',
    './src/Icons/Design/INKSCAPE.png',
]

iconsFront.forEach(url => {
    //const ul = document.createElement('ul')
    const li = document.createElement('li')
    const img = document.createElement('img')

    img.src = url

    li.appendChild(img)
    //ul.appendChild(li)
    iconsContainer.appendChild(li)
})

// When btns are cliked they will render a specific set of icons
btnFrontend.addEventListener('click', (e) => {
    e.preventDefault()
    iconsLoad(iconsFront)
    setColor(btnFrontend, '#6A5BF2')
})

btnBackend.addEventListener('click', (e) => {
    e.preventDefault()
    iconsLoad(iconsBack)
    setColor(btnBackend, '#F25B85')
})

btnWorkFlow.addEventListener('click', (e) => {
    e.preventDefault()
    iconsLoad(iconsFlow)
    setColor(btnWorkFlow, '#FF7E43')
})

btnWebDesign.addEventListener('click', (e) => {
    e.preventDefault()
    iconsLoad(iconsDesign)
    setColor(btnWebDesign, '#8ABE11')
})


// Function for creating a ul > li > img with a dynamic src for each array element in a specific programing type
function iconsLoad(type) {
    iconsContainer.innerHTML = ''
    type.forEach(url => {
    //const ul = document.createElement('ul')
    const li = document.createElement('li')
    const img = document.createElement('img')

    img.src = url
    //ul.style.display = 'flex'

    li.appendChild(img)
    // ul.appendChild(li)
    return iconsContainer.appendChild(li)
})
}

function setColor(btnId, color){
    btnFrontend.style.backgroundColor = ''
    btnBackend.style.backgroundColor = ''
    btnWebDesign.style.backgroundColor = ''
    btnWorkFlow.style.backgroundColor = ''

    btnId.style.backgroundColor = color
}


/*
SCROLL INTO VIEW HEADER NAVIGATION
*/

const about = document.getElementById('a-about')
const projects = document.getElementById('a-projects')
const certificates = document.getElementById('a-certificates')
const contact = document.getElementById('a-contact')


about.addEventListener('click' , (e) => {
    e.preventDefault()
    scroll('about')
})

projects.addEventListener('click' , (e) => {
    e.preventDefault()
    scroll('projects')
})

certificates.addEventListener('click' , (e) => {
    e.preventDefault()
    scroll('certificates')
}) 

contact.addEventListener('click' , (e) => {
    e.preventDefault()
    scroll('contact')
})

function scroll(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}
