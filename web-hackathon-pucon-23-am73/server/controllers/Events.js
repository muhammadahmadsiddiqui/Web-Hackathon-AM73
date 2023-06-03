const { Event } = require("../models");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

exports.showAllEvents = async (req, res) => {
  const Events = await Event.findAll();
  res.json(Events);
}

exports.showEventById = async (req, res) => {
  const id = req.params.id;
  const event = await Event.findOne({
    where: {
      id: id
    },
    include: [
      {
        model: User,
        attributes: ['name', 'id']
      }
    ]
  });
  res.json(Event);
}

exports.createEvent = async (req, res) => {
  const event = req.body;
  console.log("--- ", event, "--------------");
  const resp = await Event.create(event);
  res.status(200).json(resp);
}

exports.deleteEvent = async (req, res) => {
  const id = req.params.id;
  const Event = await Event.findByPk(id);
  await Event.destroy({ where: { id } });
  const { category } = Event;
  res.json({ category, id });
}

exports.updateEvent = async (req, res) => {
  const id = req.params.id;
  const Event = req.body;
  await Event.update(Event, { where: { id } });
  res.json(id);
}