import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

const title = new Component('h1', 'body', {textContent: 'Ola, Mundo'})
console.log(title)

title.render()

title.tag = "h3"
// excluir o elemeto velho exercicio opcional
title.build().render()

const form = new Form('body')

const label = new Label('Nome',  form, {htmlFor: 'nameInput'})

const input = new Input(form, {id: 'nameInput' , name: 'name'})

form.render()
label.render()

form.addChildren(
    new Component('br'),
    new component('br'),
    new label('Data de nascimento:', {htmlFor: 'birthdayInput'}),
    new Input(form, {id: 'birthayInput',  name: 'birthdays' , type: 'date'}) 
)