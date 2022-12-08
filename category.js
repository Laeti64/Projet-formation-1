// document.addEventListener("DOMContentLoaded", function () {
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");
const card = document.querySelector(".card")
console.log(carousel);
let width = card.offsetWidth;
let index = 0;
window.addEventListener("resize", function () {
    width = card.offsetWidth;
});

next.addEventListener("click", function (e) {
    e.preventDefault();
    index = index + 1;
    prev.classList.add("show");
    track.style.transform = "translateX(" + index * -width + "px)";
    if (track.offsetWidth - index * width < index * width) {
        next.classList.add("hide");

    }
});
prev.addEventListener("click", function () {
    index = index - 1;
    next.classList.remove("hide");
    if (index === 0) {
        prev.classList.remove("show");
    }
    track.style.transform = "translateX(" + index * -width + "px)";
});


// })

function removeAllChilds(node) {
    const element = document.querySelector(node)
    let child = element.lastElementChild
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild
    }
}

const travelContainer = document.querySelector(".travelContainer")
/**
 * travelContainer
 * @param {string} classCard ex: card1 (pour bora bora zen)
 */
function newTravel(travel) {

    removeAllChilds(".travelContainer")
    removeAllChilds(".btnDiv")

    // création de 2 div principales, une qui contient le text et une qui contient les images pour gérer
    //la gestion différentes des images en mediaquery

    const travelText = document.createElement("div");
    travelText.classList.add("travelText");
    travelContainer.appendChild(travelText);

    const travelImgDiv = document.createElement("div");
    travelImgDiv.classList.add("travelImgDiv");
    travelContainer.appendChild(travelImgDiv);

    const travelImgDiv2 = document.createElement("div");
    travelImgDiv2.classList.add("travelImgDiv2");
    travelContainer.appendChild(travelImgDiv2);

    //Création d'une div qui contient les titres du voyage + le prix à mettre en flex-row
    const travelTop = document.createElement("div");
    travelTop.classList.add("travelTop");
    travelText.appendChild(travelTop);

    const travelTitles = document.createElement("div");
    travelTitles.classList.add("travelTitles");
    travelTop.appendChild(travelTitles);

    const travelTitle1 = document.createElement("h1");
    // travelTitle1.classList.add("");
    travelTitle1.innerHTML = travel.name;
    travelTitles.appendChild(travelTitle1);

    const travelTitle2 = document.createElement("h2");
    // travelTitle1.classList.add("");
    travelTitle2.innerHTML = travel.resume;
    travelTitles.appendChild(travelTitle2);

    const travelPrice = document.createElement("div");
    travelPrice.classList.add("travelPrice");
    travelTop.appendChild(travelPrice);

    const travelPriceText = document.createElement("p");
    travelPriceText.innerHTML = travel.prix;
    travelPrice.appendChild(travelPriceText);

    //Création d'une div description titre: caratéristiques + liste des caractéristiques
    const travelDescription = document.createElement("div");
    travelDescription.classList.add("travelDescription");
    travelText.appendChild(travelDescription);

    const travelDetail = document.createElement("h2");
    // travelTitle1.classList.add("");
    travelDetail.innerHTML = travel.detail;
    travelDescription.appendChild(travelDetail);

    const travelDetUl = document.createElement("ul");
    travelDetUl.classList.add("travelDetUl");
    travelDescription.appendChild(travelDetUl);

    for (let i = 0; i < travel.detailX.length; i++) {
        const travelDetLi = document.createElement("li");
        travelDetUl.appendChild(travelDetLi);
        travelDetLi.innerHTML = travel.detailX[i];
    }




    //Création d'une div activités avec titre et liste
    const travelActivities = document.createElement("div");
    travelActivities.classList.add("travelActivities");
    travelText.appendChild(travelActivities);

    const travelActTitle = document.createElement("h2");
    // travelTitle1.classList.add("");
    travelActTitle.innerHTML = travel.activities;
    travelActivities.appendChild(travelActTitle);

    const travelActUl = document.createElement("ul");
    travelActUl.classList.add("travelActUl");
    travelActivities.appendChild(travelActUl);

    for (let i = 0; i < travel.activitiesX.length; i++) {
        const travelActLi = document.createElement("li");
        travelActUl.appendChild(travelActLi);
        travelActLi.innerHTML = travel.activitiesX[i];
    }

    //Creation d'une div services avec titre + liste de services
    const travelServices = document.createElement("div");
    travelServices.classList.add("travelServices");
    travelText.appendChild(travelServices);

    const travelServicesTitle = document.createElement("h2");
    // travelTitle1.classList.add("");
    travelServicesTitle.innerHTML = travel.services;
    travelServices.appendChild(travelServicesTitle);

    const travelServicesUl = document.createElement("ul");
    travelServicesUl.classList.add("travelServicesUl");
    travelServices.appendChild(travelServicesUl);

    for (let i = 0; i < travel.servicesX.length; i++) {
        const travelServicesLi = document.createElement("li");
        travelServicesUl.appendChild(travelServicesLi);
        travelServicesLi.innerHTML = travel.servicesX[i];
    }


    //Création des images à ajouter à la div travelImgDiv
    const travelNext = document.createElement("a");
    travelNext.classList.add("travelNext");
    travelNext.setAttribute("onclick", "plusSlides(1)");
    travelNext.innerHTML = "&#10095;";
    travelImgDiv.appendChild(travelNext);

    const travelPrev = document.createElement("a");
    travelPrev.classList.add("travelPrev");
    travelPrev.setAttribute('onclick', "plusSlides(1)");
    travelPrev.innerHTML = "&#10094;";
    travelImgDiv.appendChild(travelPrev);

    for (let i = 0; i < travel.images.length; i++) {
        const mySlides = document.createElement("div");
        mySlides.classList.add("mySlides");
        mySlides.classList.add("flexCenter");
        travelImgDiv.appendChild(mySlides);

        const travelImagesX = document.createElement("img");
        travelImagesX.src = travel.images[i];
        travelImagesX.classList.add("mySlidesX");
        mySlides.appendChild(travelImagesX);

    }

    for (let i = 0; i < travel.images.length; i++) {
        const travelImagesX2 = document.createElement("img");
        travelImagesX2.src = travel.images[i];
        travelImagesX2.classList.add("mySlidesX2");
        travelImgDiv2.appendChild(travelImagesX2);
    }
    // const travelBody = document.querySelector("#categoryBody")
    // const travelButtonDiv = document.createElement("div");
    // travelButtonDiv.classList.add("btnDiv");
    // travelBody.appendChild(travelButtonDiv);

    const travelButtonDiv = document.querySelector(".btnDiv")
    const travelButton = document.createElement("button");
    travelButton.innerHTML = "Réserver";
    // travelButton.innerHTML = `<a href="/formulaire.html">Réserver</a>`
    travelButton.classList.add("btn");
    travelButtonDiv.appendChild(travelButton);
    travelButton.addEventListener("click", () => {
        window.location.href = "./formulaire.html"
    })

}

const bora = {
    name: "BORA BORA",
    resume: "Equilibre et énergie",
    prix: "Prix: 2500€",
    detail: "Caractéristiques du séjour:",
    detailX: [
        "Hotel 4* de Luxe",
        "Hébergement: Cases sur pilotis",
        "6 jours - 5 nuits",
        "WIFI gratuit",
        "Mer à proximité",
        "repas végétariens, végétaliens, sans gluten"
    ],
    programme: "Programme: Dans le cadre majestueux de l'archipel polynésien, nous vous proposerons d'aller à la rencontre de vos désirs les plus profonds, de vos rêves les plus fous, de prendre conscience de votre pouvoir intérieur  à travers divers ateliers puissants de méditation acommpagnée par Maëva, notre professeure de méditation. De grands moments de partage seront au rendez-vous !",
    activities: "A découvrir près de l'hôtel:",
    activitiesX: [
        "Le snorkeling: exploration sous-marine avec palmes, masque et tuba, à la découverte des merveilles du lagon avec sa faune et sa flore",
        "Le centre de protection des tortues marines, dédié à leur protection  et au receuil de tortues blessées afin de les soigner et de les raccompagner dans leur environnement naturel."
    ],
    services: "Services inclus dans le prix",
    servicesX: [
        "Le voyage A/R en partance de Paris à destination de PHUKET",
        "Toutes les pratiques, activités et ateliers",
        "Les repas : collations, petit-déjeûners, déjeûners, brunchs et dîners",
        "Le matériel de yoga",
        "Notre équipe à votre écoute avant, pendant et après le séjour"
    ],
    images: ["images/Zen/BoraBora/BB1.jpeg",
        "images/Zen/BoraBora/BB2.jpeg",
        "images/Zen/BoraBora/BB3.jpeg",
        "images/Zen/BoraBora/BB4.jpeg"],
}
const japon = {
    name: "JAPON - ",
    resume: "Happiness and Therapy",
    prix: "Prix: 2700€",
    detail: "Caractéristiques du séjour:",
    detailX: [
        "Hotel 4* de Luxe",
        "Belle résidence dans la ville",
        "6 jours - 5 nuits",
        "WIFI gratuit",
        "Jacuzzi",
        "Repas végétariens, végétaliens, sans gluten"
    ],
    programme: "Programme: Existe-il une expérience plus désirable que celle de la joie ? Plus intense et plus profonde que le plaisir, plus concrète que  le bonheur, la joie est la manifestation de notre puissance vitale. Marie vous accompagnera dans diverses activités autour du yoga et  de la méditation afin de vous reconnecter à vous-mêmes, de vous  permettre le lâcher-prise et la joie.",
    activities: "A découvrir près de votre résidence:",
    activitiesX: [
        "Les temples bouddhistes",
        "Les sanctuaires Shinto",
        "Les jardins impériaux,"
    ],
    services: "Services inclus dans le prix",
    servicesX: [
        "Le voyage A/R en partance de Paris à destination de Kyoto",
        "Toutes les pratiques, activités et ateliers",
        "Les repas : collations, petit-déjeûners, déjeûners, brunchs et dîners",
        "Le matériel de yoga",
        "Notre équipe à votre écoute avant, pendant et après le séjour"
    ],
    images: ["images/Zen/Japon/japon1.jpg",
        "images/Zen/Japon/japon2.jpg",
        "images/Zen/Japon/japon3.jpg",
        "images/Zen/Japon/japon4.jpg"]
}
const thai = {
    name: "THAÏLANDE - ",
    resume: "Equilibre et énergie",
    prix: "Prix: 1950€",
    detail: "Caractéristiques du séjour:",
    detailX: [
        "Hotel 4* de Luxe",
        "Cases sur la plage",
        "6 jours - 5 nuits",
        "WIFI gratuit",
        "Piscine - Hammam - Jacuzzi",
        "Mer à proximité",
        "Repas végétariens, végétaliens, sans gluten"
    ],
    programme: "Programme: Durant le séjour, Isabelle, notre professeure de yoga vous proposera un programme complet alliant yoga et méditation ainsi que divers ateliers autour des mérindiens et des éléments afin de réguler vos canaux énergétiques et de mieux appréhender votre quotidien pour rétablir les déséquilibres, optimiser votre énergie et ainsi bénéficier d'une santé optimale !",
    activities: "A découvrir près de votre résidence:",
    activitiesX: [
        "Le temple Wat Chalong de son vrai nom Wat Chaîtharam, un des lieux les plus emblématiques de Phuket. ",
        "Les plages de Kamala et Karon à proximités immédiates de l'hôtel vous émerveilleront de par leurs beautés sauvages au sable blanc et à sa mer turquoise.",
    ],
    services: "Services inclus dans le prix",
    servicesX: [
        "Le voyage A/R en partance de Paris à destination de Kyoto",
        "Toutes les pratiques, activités et ateliers",
        "Les repas : collations, petit-déjeûners, déjeûners, brunchs et dîners",
        "Le matériel de yoga",
        "L'accés à la piscine",
        "L'hébergement dans un hôtel d'exception",
        "Notre équipe à votre écoute avant, pendant et après le séjour"
    ],
    images: ["images/Zen/Thailande/thai1.jpeg", "images/Zen/Thailande/thai2.jpeg", "images/Zen/Thailande/thai3.jpeg", "images/Zen/Thailande/thai4.jpeg"]
}
const seychelles = {
    name: "SEYCHELLES - ",
    resume: "No stress et Yoga",
    prix: "Prix: 2300€",
    detail: "Caractéristiques du séjour:",
    detailX: [
        "Hotel 4* de Luxe",
        "Cases sur la plage",
        "Lieu: Mahé",
        "6 jours - 5 nuits",
        "WIFI gratuit",
        "Mer à proximité",
        "Repas végétariens, végétaliens, sans gluten"
    ],
    programme: "Programme: Evasion garantie dans un lieu magique sur l'île de Mahé. Repos, détente et soins de soi seront au rendez-vous dans cet endroit idylique. Marie, notre professeure de yoga et de méditation, vous guidera à travers différentes pratiques de yoga douces et plus dynamiques mais aussi d'ateliers autour de la relaxation et de l'estime de soi.",
    activities: "A découvrir près de votre résidence:",
    activitiesX: [
        "La plage Takamaka avec son sable blanc et son eau turquoise où vous pourrez observer les tortues et les oiseaux dans ce magnifique parc naturel.",
        "La capitale Victoria avec son clocher, son muséé nationale, son jardin botanique, son marché coloré et ses bonnes adresses gustatives.",
    ],
    services: "Services inclus dans le prix",
    servicesX: [
        "Le voyage A/R en partance de Paris à destination de Phuket",
        "Toutes les pratiques, activités et ateliers",
        "Les repas : collations, petit-déjeûners, déjeûners, brunchs et dîners",
        "Le matériel de yoga",
        "L'accés à la piscine",
        "L'hébergement dans un hôtel d'exception",
        "Notre équipe à votre écoute avant, pendant et après le séjour"
    ],
    images: ["images/Zen/Seychelles/seychelles1.jpg",
        "images/Zen/Seychelles/seychelles2.jpg",
        "images/Zen/Seychelles/seychelles3.jpg",
        "images/Zen/Seychelles/seychelles4.jpg"]
}



const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");

// if (window.matchMedia("(max-width: 1000px)").matches) {


card1.addEventListener("click", function () {
    newTravel(bora);
    let slideIndex = 1;
    showSlides(slideIndex);
});

card2.addEventListener("click", function () {
    newTravel(japon);
    let slideIndex = 1;
    showSlides(slideIndex);
});

card3.addEventListener("click", function () {
    newTravel(seychelles)
    let slideIndex = 1;
    showSlides(slideIndex);
});

card4.addEventListener("click", function () {
    newTravel(thai);
    let slideIndex = 1;
    showSlides(slideIndex);
});
// } else {
//     card1.addEventListener("click", function () {
//         newTravel(bora);
//     });

//     card2.addEventListener("click", function () {
//         newTravel(japon);
//     });

//     card3.addEventListener("click", function () {
//         newTravel(seychelles)
//     });

//     card4.addEventListener("click", function () {
//         newTravel(thai);
//     });
// }

////////////////////////////////////////Carrousel images voyage

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides");
    //   let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}