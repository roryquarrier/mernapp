const asyncHandler = require('express-async-handler')


// @desc Get goals
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler( (req, res) => {
    res.status(200).json({ message: 'Get the very  best goals' })
})

// @desc set goals
// @route POST /api/goals
// @access Private

const setGoal = asyncHandler( (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Set the best goals' })
})

// @desc update goal
// @route PUT /api/goals/:id
// @access Private

const updateGoal = asyncHandler( (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private

const deleteGoal = asyncHandler( (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = {
    getGoals, 
    setGoal,
    updateGoal,
    deleteGoal
}