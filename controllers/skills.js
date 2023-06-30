

const SkillModel = require('../models/skill');


module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteOne
};

function deleteOne(req, res) {
    SkillModel.deleteOne(req.params.id)
    res.redirect('/skills')
}

function create(req, res) {
    const skill = SkillModel.create(req.body)
    res.redirect('/skills/${skills.id}');
}



function newSkill(req, res) {
    res.render('skills/new')
    }

function show(req, res) {
    const skill = SkillModel.getOne(req.params.id)
    res.render('skills/show', {skill: skill})
}


function index(req, res, next) {
    const skills = SkillModel.getAll()
    res.render('skills/index.ejs', {skills:skills})
    }

