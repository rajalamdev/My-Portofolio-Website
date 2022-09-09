const body = document.body;
const clientWidth = document.documentElement.clientWidth;
const clientHeight = document.documentElement.clientHeight;
const header = document.querySelector('.header');
const navbar = document.querySelector('header nav');
const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const themeBtn = document.querySelector('.theme');
const themeMobileBtn = document.querySelector('.theme-mobile');
const navLinks = document.querySelectorAll('header nav ul li a');
const section = document.querySelectorAll('.section');
const jump = document.querySelector('.jump-to-top');
const alert = document.querySelector('.alert');
const closeBtn = document.querySelector('.close-btn');
const understand = document.getElementById('understand');
const today = new Date().getFullYear();
const detailsBtn = document.querySelector('.details-btn');
const detailsSection = document.querySelector('.details');
const arrowIconUp = document.createElement('i');
arrowIconUp.classList.add('fa-solid', 'fa-arrow-up', 'arrow');
const arrowIconDown = document.createElement('i');
arrowIconDown.classList.add('fa-solid', 'fa-arrow-down', 'arrow');
const projects = document.getElementById('projects');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal-btn');
const modalImg = document.querySelector('.modal-img');
const copyrightYear = document.querySelector('.copyright-year');
const sidebarBg = document.querySelector('.sidebar-bg');
const logos = document.querySelector('header .logos');
const achievements = document.querySelector('.achievements');
const anchorMobile = document.querySelectorAll('.anchor-mobile');
const downloadBtn = document.querySelector('.download-btn');

export { 
    body, header, navbar, menu, sidebar, themeBtn, themeMobileBtn, navLinks,
    section, jump, alert, closeBtn, understand, today, detailsBtn,
    detailsSection, arrowIconUp, arrowIconDown, projects, modal, closeModalBtn, modalImg,
    clientWidth, clientHeight, copyrightYear, sidebarBg, logos, achievements, anchorMobile,
    downloadBtn
}