const express = require('express')
const {createStudent, getAllStudent, getSpecificStudent, updateStudent, deleteStudent} = require('../controllers/studentController');
const router = express.Router()



router.get('/',getAllStudent)


router.post('/', createStudent)

router.get('/:id', getSpecificStudent)

router.patch('/',updateStudent)

router.delete('/',deleteStudent)


module.exports = router;