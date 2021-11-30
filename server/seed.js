// let characters = [
    //     {
    //         id: 0,
    //         firstName: 'Jake', 
    //         lastName: 'Peralta', 
    //         gender: 'male',
    //         age: 39, 
    //         likes: ['Amy', 'Die Hard', 'Taylor Swift']
    //     }, 
    //     {
    //         id: 2, 
    //         firstName: 'Rosa', 
    //         lastName: 'Diaz', 
    //         gender: 'female',
    //         age: 34, 
    //         likes: ['motorcycles', 'Nancy Meyers', 'weapons']
    //     }, 
    //     {
    //         id: 1, 
    //         firstName: 'Amy', 
    //         lastName: 'Santiago', 
    //         gender: 'female', 
    //         age: 37, 
    //         likes: ['binders', 'grammar', 'dancing']
    //     }, 
    //     {
    //         id: 3,
    //         firstName: 'Charles', 
    //         lastName: 'Boyle', 
    //         gender: 'male',
    //         age: 42, 
    //         likes: ['Jake', 'dogs', 'food']
    //     }
    // ]
    
    // app.get('/characters', (req, res) => {
    //     console.log('hit chars')
    //     res.status(200).send(characters)
    // })
    
    // app.get('/character/:name', (req, res) => {
    //     const { name } = req.params
    //     const index = characters.findIndex(char => char.firstName.toLowerCase() === name)
    //     res.status(200).send(characters[index]);