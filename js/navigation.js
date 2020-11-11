function setNavigation(navMenu) {
  // Створення головного меню сайту-------------------
  // navMenu - масив розділів меню вигляду: де кожен елемент складається з назви розділу та внутрішнього посилання на розділ (anchor) ['Про нас#about', 'Міфи та спростування#myth', 'Ознаки намірів#intention', 'Що робити?#whatdo', 'Важливо, щоб ти жив!#iwant', 'Рішення#help', 'Лікарі#psychiatrist', 'Наша команда#team'];
  let header = document.body.appendChild(document.createElement('header'));
  let nav = header.appendChild(document.createElement('nav')); 
  let smartMenu = header.appendChild(document.createElement('div'));
  let navButton = document.createElement('span'); // створюємо кнопку меню-смартфон
  nav.appendChild(navButton);
  nav.id = "explorer-navigation";
  navButton.innerHTML = "&#9776;";
  navButton.classList.add('nav-smartmenu-button');
  navButton.addEventListener('click', (event)=>{
      event.stopPropagation();
      navButton.classList.add('hidden');
      $(smartMenu).show(100);
      smartMenu.classList.add('nav__smartmenu_active');
      })

  let topMenu = document.createElement('div'); // створюємо головне меню
  topMenu.id = "nav-topmenu";
  nav.appendChild(topMenu);

  // створюємо смарт меню
  let smartMenuHTML = `
  <ul>
    <li class='nav__smartmenu__close'><span>&#10006;</span></li>
    `;
    navMenu.forEach((i)=>{
      // додаєм елементи смартменю
      let menuItemName = i.substring(0, i.indexOf('#'));
      menuItemLink = i.substring(i.indexOf('#') + 1, i.length);
      smartMenuHTML += `
      <li>
        <a class='nav__smartmenu__elem' href='#${menuItemLink}'>${menuItemName}</a>
        </li>            
        <li class='separator'></li>`;
        
        // додаєм елементи головного меню
        let topMenuEl = document.createElement('span');
        topMenu.appendChild(topMenuEl);
        topMenuEl.innerHTML = `<a href='#${menuItemLink}'>${menuItemName}</a>`;
      })
      smartMenuHTML += '</ul>';
      smartMenu.innerHTML = smartMenuHTML;
      smartMenu.id="explorer-nav-smartmenu";
      
  smartMenu.addEventListener('mouseleave', (event)=>{ // закриття smartmenu
      $(smartMenu).hide(100);
      smartMenu.classList.remove('nav__smartmenu_active');
  });

  smartMenu.addEventListener('click', (event)=>{ // клік по ел-ту smartmenu
          $(smartMenu).hide(100);
          smartMenu.classList.remove('nav__smartmenu_active');
  });
}
