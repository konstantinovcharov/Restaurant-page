export default function printMe() {
    console.log('I get called from print.js!');
  }

export function loadHeader() {
    const header = document.createElement('header');
    const headerH1 = document.createElement('h1');
    headerH1.textContent = "Restaurant Name";
    const nav = document.createElement('nav');
    const navUl = document.createElement('ul');
    const navLi1 = document.createElement('li');
    const navLi2 = document.createElement('li');
    const navLi3 = document.createElement('li');
    const navA1 = document.createElement('a');
    navA1.setAttribute('href', '#');
    navA1.textContent = "Home";
    const navA2 = document.createElement('a');
    navA2.setAttribute('href', '#');
    navA2.textContent = "Menu";
    const navA3 = document.createElement('a');
    navA3.setAttribute('href', '#');
    navA3.textContent = "About us";
    navLi1.appendChild(navA1);
    navLi2.appendChild(navA2);
    navLi3.appendChild(navA3);
    navUl.appendChild(navLi1);
    navUl.appendChild(navLi2);
    navUl.appendChild(navLi3);
    nav.appendChild(navUl);
    header.appendChild(headerH1);
    header.appendChild(nav);

    return header;
}

export function loadMain() {
    // Section hero html
    const main = document.createElement('main');
    const sectionHero = document.createElement('section');
    sectionHero.classList.add('hero');
    const sectionHeroH2 = document.createElement('h2');
    sectionHeroH2.textContent = "Welcome to our restaurant";
    const sectionHeroP = document.createElement('p');
    sectionHeroP.textContent = "Enjoy our delicious food and great atmosphere.";
    const sectionHeroA = document.createElement('a');
    sectionHeroA.setAttribute('href', '#');
    sectionHeroA.classList.add('cta');
    sectionHeroA.textContent = "See our menu";
    sectionHero.appendChild(sectionHeroH2);
    sectionHero.appendChild(sectionHeroP);
    sectionHero.appendChild(sectionHeroA);
    main.appendChild(sectionHero);

    // Section featured items html
    const sectionFeaturedItems = document.createElement('section');
    sectionFeaturedItems.classList.add('featured-items');
    const sectionFeaturedItemsH2 = document.createElement('h2');
    sectionFeaturedItemsH2.textContent = "Featured Items";
    const sectionFeaturedItemsDiv1 = document.createElement('div');
    sectionFeaturedItemsDiv1.classList.add('item');
    const Div1Img = document.createElement('img');
    Div1Img.setAttribute('src', '../src/food1.jpg');
    Div1Img.setAttribute('alt', 'Item 1');
    const Div1H3 = document.createElement('h3');
    Div1H3.textContent = "Item 1";
    const Div1P = document.createElement('p');
    Div1P.textContent = "Description of Item 1";
    const Div1A = document.createElement('a');
    Div1A.setAttribute('href', '#');
    Div1A.classList.add('cta');
    Div1A.textContent = "Order now";
    sectionFeaturedItemsDiv1.appendChild(Div1Img);
    sectionFeaturedItemsDiv1.appendChild(Div1H3);
    sectionFeaturedItemsDiv1.appendChild(Div1P);
    sectionFeaturedItemsDiv1.appendChild(Div1A);

    const sectionFeaturedItemsDiv2 = document.createElement('div');
    sectionFeaturedItemsDiv2.classList.add('item');
    const Div2Img = document.createElement('img');
    Div2Img.setAttribute('src', '../src/food2.jpeg');
    Div2Img.setAttribute('alt', 'Item 2');
    const Div2H3 = document.createElement('h3');
    Div2H3.textContent = "Item 2";
    const Div2P = document.createElement('p');
    Div2P.textContent = "Description of Item 2";
    const Div2A = document.createElement('a');
    Div2A.setAttribute('href', '#');
    Div2A.classList.add('cta');
    Div2A.textContent = "Order now";
    sectionFeaturedItemsDiv2.appendChild(Div2Img);
    sectionFeaturedItemsDiv2.appendChild(Div2H3);
    sectionFeaturedItemsDiv2.appendChild(Div2P);
    sectionFeaturedItemsDiv2.appendChild(Div2A);

    const sectionFeaturedItemsDiv3 = document.createElement('div');
    sectionFeaturedItemsDiv3.classList.add('item');
    const Div3Img = document.createElement('img');
    Div3Img.setAttribute('src', '../src/food3.jpeg');
    Div3Img.setAttribute('alt', 'Item 3');
    const Div3H3 = document.createElement('h3');
    Div3H3.textContent = "Item 3";
    const Div3P = document.createElement('p');
    Div3P.textContent = "Description of Item 3";
    const Div3A = document.createElement('a');
    Div3A.setAttribute('href', '#');
    Div3A.classList.add('cta');
    Div3A.textContent = "Order now";
    sectionFeaturedItemsDiv3.appendChild(Div3Img);
    sectionFeaturedItemsDiv3.appendChild(Div3H3);
    sectionFeaturedItemsDiv3.appendChild(Div3P);
    sectionFeaturedItemsDiv3.appendChild(Div3A);

    sectionFeaturedItems.appendChild(sectionFeaturedItemsH2);
    sectionFeaturedItems.appendChild(sectionFeaturedItemsDiv1);
    sectionFeaturedItems.appendChild(sectionFeaturedItemsDiv2);
    sectionFeaturedItems.appendChild(sectionFeaturedItemsDiv3);

    main.appendChild(sectionFeaturedItems);

    return main;
}

export function loadFooter() {
    const footer = document.createElement('footer');
    const footerP = document.createElement('p');
    footerP.textContent = "2023 Restaurant Name";
    footerP.innerHTML = ' &copy; ' + footerP.innerHTML;
    

    footer.appendChild(footerP);
    return footer;
}