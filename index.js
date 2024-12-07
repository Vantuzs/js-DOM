/* <article class="card-wrapper">
        <div class="image-wrapper">
          <img class="card-image" src="https://forum-ru-cdn.warthunder.com/original/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1.jpeg" alt="John avatar">
        </div>
        <h2 class="username">John</h2>
        <p class="description">Description for John</p>
      </article> */
     

      const root = document.querySelector('#root');

      function createUserCard(user){
        //1. Создаем обвёртку для картинки
        const imageWrapper =  createImageWrapper(user);

        // 3. Создание h2
        const h2 = createElement('h2',{classNames: ['username']}, user.name)
        // 4. Созданеи p
        const p = createElement('p',{classNames: ['description']}, user.description)

        // 5. Создаем и возвращаем  article в которы вложены созданые img,h2,p
        return createElement('article',{classNames: ['card-wrapper']},imageWrapper,h2,p);
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

   function imageLoadHandler({target}){
    console.log('image successfully loaded');
    const perentWrapper = document.querySelector(`#wrapper${target.dataset.id}`)
    perentWrapper.append(target)
   }
  
   function imageErrorHandler({target}){
    target.remove()
   }

   function createUserImage(user){
        const img = document.createElement('img');
        img.setAttribute('src', user.profilePicture);
        img.setAttribute('alt', `${user.name} avatar`);
        img.dataset.id = user.id
        img.classList.add('card-image');
        
        img.addEventListener('load',imageLoadHandler)
        img.addEventListener('error',imageErrorHandler)
        return img
   }

   function createImageWrapper(user){
     //1ю создание заглушки
     const imageWrapper = createElement('div',{classNames: ['image-wrapper']});
     imageWrapper.setAttribute('id',`wrapper${user.id}`);
     
     // 2. Создание заглушки
     const img = createUserImage(user);

     return imageWrapper
   }