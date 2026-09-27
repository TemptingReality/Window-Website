const panes = document.querySelectorAll(".pane_wrapper")
const desktop = document.querySelectorAll(".desktop_icons .icon_box")
const audio = new Audio();

let z = 1




    

panes.forEach(pane_wrapper => {
    
    const header = pane_wrapper.querySelector(".pane_header");
    const corner = pane_wrapper.querySelector(".corner");
    const close = pane_wrapper.querySelector(".close");

    

    pane_wrapper.addEventListener("mousedown", () => {
        z = z + 1
        pane_wrapper.style.zIndex = z
    })

    if (close) {
        close.addEventListener("mousedown", (e) => {
            e.stopPropagation();
            pane_wrapper.style.visibility = "hidden"
        });
    }


   

    header.addEventListener('mousedown', (event) => {
        header.classList.add("pane_header_clicked")
        event.preventDefault();
        let l = pane_wrapper.offsetLeft
        let t = pane_wrapper.offsetTop

        let startX = event.pageX
        let startY = event.pageY

        const drag = (event) => {
            event.preventDefualt

            pane_wrapper.style.left = l + (event.pageX - startX) + "px"
            pane_wrapper.style.top = t + (event.pageY - startY) + "px"
        }

        const mouseup = () => {
            header.classList.remove("pane_header_clicked")

            document.removeEventListener("mousemove", drag)
            document.removeEventListener("mouseup",mouseup)
        }
        
        document.addEventListener("mousemove", drag)
        document.addEventListener("mouseup", mouseup)

    })

    corner.addEventListener("mousedown", (event) =>{
        event.preventDefault();

        let l = pane_wrapper.offsetLeft
        let t = pane_wrapper.offsetTop + pane_wrapper.height

        let startX = event.pageX
        let startY = event.pageY
        

        const resize = (event) => {
            
            const rect = pane_wrapper.getBoundingClientRect();
            const newWidth = Math.max(300, event.clientX - rect.left);
            const newHeight = Math.max(100, event.clientY - rect.top);
            pane_wrapper.style.width = `${newWidth}px`;
            pane_wrapper.style.height = `${newHeight}px`;

        }

        const mouseup = () => {
            header.classList.remove("pane_header_clicked")

            document.removeEventListener("mousemove", resize)
            document.removeEventListener("mouseup",mouseup)
        }

        document.addEventListener("mousemove", resize)
        document.addEventListener("mouseup", mouseup)
    })

  
    

})

const aboutMeIcon = document.getElementById("about_me_pane_button");
const aboutMePane = document.getElementById("about_me_pane");
const pictureIcon = document.getElementById("pictures_pane_button");
const picturePane = document.getElementById("pictures_pane");
const folderIcon = document.getElementById("folder_pane_button");
const folderPane = document.getElementById("folder_pane");
const websiteFolderIcon = document.getElementById("website_folder_pane_button");
const websiteFolderPane = document.getElementById("website_folder_pane");

pictureIcon.addEventListener('click', ()=> {
    picturePane.style.visibility = "visible"
    z = z + 1
    picturePane.style.zIndex = z
});

aboutMeIcon.addEventListener('click', ()=> {
   
    aboutMePane.style.visibility = "visible"
    z = z + 1
    aboutMePane.style.zIndex = z
});

folderIcon.addEventListener('click', ()=> {
   
    folderPane.style.visibility = "visible"
    z = z + 1
    folderPane.style.zIndex = z
});

websiteFolderIcon.addEventListener('click', ()=> {
   
    websiteFolderPane.style.visibility = "visible"
    z = z + 1
    websiteFolderPane.style.zIndex = z
});