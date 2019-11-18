"use strict";

function User(firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
}

User.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};
