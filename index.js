{/* <article class="card-wrapper">
        <img class="card-image" src="https://forum-ru-cdn.warthunder.com/original/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1.jpeg" alt="John avatar">
        <h2 class="username">John</h2>
        <p class="description">Description for John</p>
      </article> */}
     

      const root = document.querySelector('#root');

      function createUserCard(user){
        // 1. Создание article
        const article = document.createElement('article');
        article.classList.add('card-wrapper');
        // 2. Создание img
        const img = document.createElement('img');
        img.setAttribute('src', user.profilePicture);
        img.setAttribute('alt', `${user.name} avatar`);
        img.classList.add('card-image');

        // 3. Создание h2
        const h2 = document.createElement('h2');
        h2.append(user.name);
        h2.classList.add('username');
        // 4. Созданеи p
        const p = document.createElement('p');
        p.append(user.description);
        p.classList.add('description');

        // 5. Присоединить к article (п.1) елементы созданные в п. 2-4
        article.append(img,h2,p);

        // 6. Прикрепить article к section#root
        root.append(article)
        return article
      }

// My variant

    //  for(let user of data){
    //     createUserCard(user)
    //  }

    /////////////////////////////////////////////////////////////////////////////

   const cardArray = data.map(user => createUserCard(user));

   root.append(...cardArray)