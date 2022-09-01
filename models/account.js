const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo');

const Schema = mongoose.Schema;
const AccountSchema = new Schema({
  username: String,
  password: String,
  teacher: String,
  course: {
    type: String,
    ref: 'course',
  }
}, {
    collection: 'account',
});

const Course = new Schema({
  name: String,
  teacher: {
    type: String,
    ref: 'account',
  },
  lession: [],
  address: {},
  course: String
}, {
    collection: 'course',
});

const CourseModel = mongoose.model('course', Course);

const AccountModel = mongoose.model('account', AccountSchema);

AccountModel.find({})
.populate('course')
.populate({
  path: 'course',
  populate: {path: 'teacher'}
})
.then((data) => {
  console.log(data);
})
.catch((err) => { console.error(err); });


module.exports = AccountModel