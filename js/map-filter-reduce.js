const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLanguages = users.filter(u => u.languages >= 3);

let emails = users.map(u => u.email);

let totalYearsExperience = users.yearsOfExperience.reduce((accum, curr) => accum + curr);

let averageYearsExperience = totalYearsExperience / users.length;

let longestEmail = users.reduce(function(accum, curr){
    if (accum.length < curr.length){
        accum = curr;
    };
    return accum;
})

let instructors = "Your instructors are " + users.name.reduce((accu, curr) => accu + curr + ", ");




