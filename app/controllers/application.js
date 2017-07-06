// ember g controller application
import Ember from 'ember';

// extend the Ember object {key: value}
export default Ember.Controller.extend({
  name: "chef",
  chefs: [
    {name: "Gordon Ramsey", isAvailable: true},
    {name: "Mario Batalli", isAvailable: true},
    {name: "Emerald Legassi", isAvailable: false},
    {name: "Martha Stewart", isAvailable: false},
    {name: "Giada Denalova", isAvailable: true},
  ],
  dishes: [
    {name: "Chicken Parm", isAvailable: true},
    {name: "Spaghetti and Meatballs", isAvailable: false},
    {name: "Veal Parm", isAvailable: true},
    {name: "Chicken Alfredo", isAvailable: false},
    {name: "Ceasar Salad", isAvailable: true},
  ],
  restaurant: {name: "Bertoli's", age: 3, location: "Columbus"},
});
