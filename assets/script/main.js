import { enableLightMode, disableLightMode } from "../modules/theme.mjs";
import * as Var from "../modules/variable.mjs";
import { callback, options, observer } from "../modules/blur.mjs";

window.addEventListener('load', () => {
    // my age
    const myAge = document.getElementById('my-age');
    const myBirthday = new Date(2004, 7, 24).getFullYear();
    const yearsOld = Var.today - myBirthday;
    
    try {
        myAge.innerHTML = yearsOld;  
    } catch (error) {
        return error;
    } finally {
        Var.copyrightYear.textContent = Var.today;
        documentReady();
    }
});

function documentReady(){
    // if the website currently under Development!
    setTimeout(() => {
        Var.alert.classList.add('reveal');
        Var.closeBtn.addEventListener('click', () => {
            Var.alert.classList.remove('reveal');
        });

        // if user didnt click the understand button
        let counter = 5;
        let understandTimer = setInterval(() => {
            counter--;
            Var.understand.innerHTML = counter;

            if(counter === 0){
                clearInterval(understandTimer);
                setTimeout(() => {
                    Var.alert.classList.remove('reveal');
                }, 1000);
            }
        }, 1000);
    }, 1000);

    // active class on Nav Links when scrolled
    document.addEventListener('scroll', () => {
        const top = window.scrollY;
        
        try {
            const headerOffset = Var.header.offsetTop;

            if(top >= headerOffset){
                Var.header.classList.add('border');
                Var.sidebarBg.classList.add('sticky');
            } else {
                Var.header.classList.remove('border');
                Var.sidebarBg.classList.remove('sticky');
            }
        } catch (error) {
            return error;
        }

        Var.section.forEach(sec => {
            const offset = sec.offsetTop;
            const height = sec.offsetHeight;
            const idSection = sec.getAttribute('id');

            // add class reveal on Jump Button when window.scrollY equal or higher than 500
            if(top >= 357){
                Var.jump.classList.add('reveal');
            } else {
                Var.jump.classList.remove('reveal');
            }

            if(Var.clientWidth <= 420){
                if(top >= offset - 400 && top < offset - 400 + height){
                    // links class active
                    Var.navLinks.forEach(anchor => {
                        anchor.classList.remove('active');
                        document.querySelector(`header nav ul li .anchor[data-link*=${idSection}]`).classList.add('active');
                        document.querySelector(`header nav ul li .anchor-mobile[data-link*=${idSection}]`).classList.add('active');
                    });
        
                    // add reveal claas on section
                    sec.classList.remove('reveal');
                    sec.classList.add('reveal');
                } else {
                    sec.classList.remove('reveal');
                }
            } else if(Var.clientHeight < 720){
                if(top >= offset - 400 && top < offset - 400 + height){
                    // links class active
                    Var.navLinks.forEach(anchor => {
                        anchor.classList.remove('active');
                        document.querySelector(`header nav ul li .anchor[data-link*=${idSection}]`).classList.add('active');
                        document.querySelector(`header nav ul li .anchor-mobile[data-link*=${idSection}]`).classList.add('active');
                    });
        
                    // add reveal claas on section
                    sec.classList.remove('reveal');
                    sec.classList.add('reveal');
                } else {
                    sec.classList.remove('reveal');
                }
            } else {
                if(top >= offset - 600 && top < offset - 600 + height){
                    // links class active
                    Var.navLinks.forEach(anchor => {
                        anchor.classList.remove('active');
                        document.querySelector(`header nav ul li .anchor[data-link*=${idSection}]`).classList.add('active');
                        document.querySelector(`header nav ul li .anchor-mobile[data-link*=${idSection}]`).classList.add('active');
                    });
        
                    // add reveal claas on section
                    sec.classList.remove('reveal');
                    sec.classList.add('reveal');
                } else {
                    sec.classList.remove('reveal');
                }
            }
        });
    }) 

    // add a function when a element of body is clicked
    Var.body.addEventListener('click', (e) => {
        const target = e.target;
        const elClass = target.classList;
        
        // hamburger menu
        if(elClass.contains('menu') || elClass.contains('line')){
            Var.logos.classList.toggle('hidden');
            Var.sidebar.classList.toggle('open');
            Var.menu.classList.toggle('open');
            Var.sidebarBg.classList.toggle('open');
            Var.header.classList.toggle('hidden');
        }
        
        else if(elClass.contains('theme') || elClass.contains('theme-mobile')) {
             // change the src, set the theme, and save the theme to localstorage 
             if(Var.body.classList.contains('dark')){
                 enableLightMode();
                // Var.themeBtn.src = 'assets/img/icons-sun.webp';
                // Var.themeMobileBtn.src = 'assets/img/icons-sun.webp';
                // Var.themeBtn.classList.remove('dark');
                // Var.themeBtn.classList.add('light');
                // Var.themeMobileBtn.classList.remove('dark');
                // Var.themeMobileBtn.classList.add('light');
            } else {
                disableLightMode();
                // Var.themeBtn.src = 'assets/img/icons-moon.webp';
                // Var.themeMobileBtn.src = 'assets/img/icons-moon.webp';
                // Var.themeBtn.classList.remove('light');
                // Var.themeBtn.classList.add('dark');
                // Var.themeMobileBtn.classList.remove('light');
                // Var.themeMobileBtn.classList.add('dark');
            }
        } 

        //  scroll to top when Jump button is clicked  
        else if(elClass.contains('jump') || elClass.contains('jump-to-top')) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            Var.jump.classList.add('jump');
        }
        
        // scroll to top when Home Link is clicked
        else if(target.getAttribute('data-link') == 'home'){
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        else if(elClass.contains('details-btn') || elClass.contains('arrow')){
            Var.detailsSection.classList.toggle('reveal');
            if(Var.detailsBtn.textContent == 'Show More'){
                Var.detailsBtn.textContent = 'Show Less';
                Var.detailsBtn.append(Var.arrowIconUp);
            } else {
                const projectsOffset = Var.projects.offsetTop;
                Var.detailsBtn.innerText = 'Show More';
                Var.detailsBtn.append(Var.arrowIconDown);
                if(Var.clientWidth < 410){
                    document.querySelector('html').style.scrollBehavior = "auto";
                    setTimeout(() => {
                        document.querySelector('html').style.scrollBehavior = "smooth"; 
                    }, 0)
                    window.scrollTo({top: projectsOffset + 100, behavior: "auto"});
                } else {
                    window.scrollTo({top: projectsOffset + 500, behavior: "auto"});
                }
            }
        }

        else if(elClass.contains('achieve-img')){
            Var.modal.style.display = "block";
            Var.modalImg.src = target.src;
            Var.downloadBtn.href = target.src;
        }

        else if(elClass.contains('close-modal-btn') || elClass.contains('fa-xmark')){
            Var.modal.style.display = "none";
        }
    });
}

Var.profile.addEventListener("mouseover", () => {
    Var.profile.src = "assets/img/me-color.png"
})

Var.profile.addEventListener("mouseleave", () => {
    Var.profile.src = "assets/img/me-darken.jpeg"
})

Var.anchorMobile.forEach(anchor => {
    anchor.addEventListener('click', () => {
        Var.header.classList.remove('hidden')
        Var.logos.classList.remove('hidden');
        Var.sidebar.classList.remove('open');
        Var.sidebarBg.classList.remove('open');
        Var.menu.classList.remove('open');
    })
})
  