const skills = [
    {id: 123456, skill: 'Skill1', have: true},
    {id: 789123, skill: 'Skill2', have: true},
    {id: 567890, skill: 'Skill3', have: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};




function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Data.now() % 987654;
    skill.have = No;
    skills.push(skill);
    return skill
}


function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}








