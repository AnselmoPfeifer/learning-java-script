var userAddress = {
     street: 'Rua dos pinheiros',
     number: 1293,
     neighborhood: 'Centro',
     city: 'São Paulo',
     uf: 'SP'
};

function printUserInformation(userAddress) {
    return "The user live in " + userAddress.city + "/" + userAddress.uf + " in neighborhood " + userAddress.neighborhood + " on street " + userAddress.street + " with nº " + userAddress.number
}
// Should print User information
//console.log(printUserInformation(userAddress))

var developers = [
    {
        name: "Anselmo",
        lastName: "Pfeifer",
        skills: ['JavaScript', 'Python']
    },

    {
        name: "Joao",
        lastName: " Silva",
        skills: ['Java', 'Groovy']
    }
]

function showUserSkills(developers) {
   
    for (var d = 0; d < developers.length; d ++) {
        var dev = developers[d];
        var text = dev.name + " have these skils: " + dev.skills;
       console.log(text);
    }
    
    // Using loop for ... of to interact objects(including Array, Map)
    for (dev of developers) {
        var text = dev.name + " have these skills: " + dev.skills;
        console.log(text);
    }
}
// Should print Developer information
showUserSkills(developers)
