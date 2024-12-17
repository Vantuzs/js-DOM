
// JSON

// stringify - перетворюэ JS обькт в JSON
// parse - перетворюе JSON в JS обькт

// Сериализация - процес перетворення JS обьктов в JSON
// Десериализация - процес перетворення JSON в JS объекты

const originalObject = {
    users: [
        {
            name: 'John',
            age: 25
        },
        {
            name: 'Lucky',
            age: 33 
        }
    ]
}

const shallowCopy = {...originalObject};

// Глубокая копия (deep copy)

const deepCopy = JSON.parse(JSON.stringify(originalObject));