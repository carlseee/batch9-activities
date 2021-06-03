var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]

var ul = document.getElementById('league');

for (let i = 0; i < justiceLeague.length; i++) {
    var newName = document.createElement('li')
        newName.textContent = justiceLeague[i].superpower + " " + justiceLeague[i].name;
        ul.appendChild(newName)
}