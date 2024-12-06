{/* <article class="card-wrapper">
        <img class="card-image" src="https://forum-ru-cdn.warthunder.com/original/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1.jpeg" alt="John avatar">
        <h2 class="username">John</h2>
        <p class="description">Description for John</p>
      </article> */}
     

      const root = document.querySelector('#root');

      function createUserCard(user){
        
        // 1. Создание img
        const img = document.createElement('img');
        img.setAttribute('src', user.profilePicture);
        img.setAttribute('alt', `${user.name} avatar`);
        img.classList.add('card-image');

        // 2. Создание h2
        const h2 = createElement('h2',{classNames: ['username']}, user.name)
        // 3. Созданеи p
        const p = createElement('p',{classNames: ['description']}, user.description)

        // 4. Создаем и возвращаем  article в которы вложены созданые img,h2,p
        return createElement('article',{classNames: ['card-wrapper']},img,h2,p);
      }

// My variant

    //  for(let user of data){
    //     createUserCard(user)
    //  }

    /////////////////////////////////////////////////////////////////////////////

   const cardArray = data.map(user => createUserCard(user));

   root.append(...cardArray);

   /**
    * @param {String} type - тег елемента, котоорый нам нужно создать
    * @param {String} classNames  - список класов которые нужно довбавить к елементу
    * @param {...Node} childNodes - список дочирних узлов
    * @returns {HTMLElement}
    *  */ 
   

   function createElement(type,{classNames},...childNodes){
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...childNodes);

    return elem;
   }