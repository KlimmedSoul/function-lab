let emailArray = ['bruy-8204@yopmail.com','sxfds@mail.ru', 'igeffei-7123@yopmail.com' , 'fsdghn@gmail.ru', 'rexi13@yopmail.com','yina50@yopmail.com', 'grel3@yopmail.com']
let blacklistArray = ['bruy-8204@yopmail.com', 'igeffei-7123@yopmail.com', 'rexi13@yopmail.com'];

function filter(emailArray, blacklistArray) {
    let notInBlacklist = []
    for (let i = 0; i < emailArray.length; i++) {
        if (!emailArray.includes(blacklistArray[i])) {
            notInBlacklist.push(emailArray[i])
        } 
    }
    return notInBlacklist
}

console.log('Email адреса, не находящиеся в черном списке',filter(emailArray, blacklistArray))