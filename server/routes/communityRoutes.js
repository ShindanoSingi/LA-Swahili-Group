
const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
const router = require("express").Router();
const authMiddleware = require('../middlewares/authMiddleware');
const Community = require('../models/communityModel');

// Create a new community
router.post('/create', authMiddleware, async (req, res) => {
    try {
        const { name, description, about, streetNumber, streetName, city, state, zipCode, country } = req.body;

        // Check if the community already exists
        const communityExists = await Community.findOne({
            name
        });

        if (communityExists) {
            return res.send({
                message: 'Community already exists',
                success: false,
            });
        }

        const createdBy = req.body.userId;
        const community = new Community({
            name,
            description,
            about,
            streetNumber,
            streetName,
            city,
            state,
            zipCode,
            country,
            createdBy
        });

        await community.save();
        res.send({
            message: 'Community created successfully',
            success: true,
            community
        });
    } catch (error) {
        res.send({
            error: error.message,
            success: false,
        });
    }
});

// Get all communities
router.get('/all', async (req, res) => {

    try {
        const communities = await Community.find();

        const about = await Community.find().select('about');

        res.send({
            message: 'Communities retrieved successfully',
            success: true,
            communities,
            about: about[0].about

        });
    } catch (error) {
        res.send({
            error: error.message,
            success: false,
        });
    }
});

// Get a community by id
router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const community = await Community.findById(req.params.id);
        res.send({
            message: 'Community retrieved successfully',
            success: true,
            community
        });
    } catch (error) {
        res.send({
            error: error.message,
            success: false,
        });
    }
});

// Update a community by id
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const community = await Community.findByIdAndUpdate(req.params.id, req.body)
        res.send({
            message: 'Community updated successfully',
            success: true,
            community
        });
    } catch
        (error) {
        res.send({
            error: error.message,
            success: false,
        });
    }
});

// Delete a community by id
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const community = await Community.findByIdAndDelete(req.params.id);
        res.send({
            message: 'Community deleted successfully',
            success: true,
            community
        });
    } catch (error) {
        res.send({
            error: error.message,
            success: false,
        });
    }
});

// Add a member to a community
router.put('/:id/addMember', authMiddleware, async (req, res) => {
    try {
        const community = await Community.findById(req.params.id);
        const user = await User.findById(req.params.userId);
        community.members.push(user);
        await community.save();
        res.send({
            message: 'Member added successfully',
            success: true,
            community
        });
    } catch
        (error) {
        res.send({
            error: error.message,
            success: false,
        });
    }
}
);

// Remove a member from a community
router.put('/:id/removeMember', authMiddleware, async (req, res) => {
    try {
        const community = await Community.findById(req.params.id);
        const user
            = await User.findById(req.params.userId);
        community.members.pull(user);
        await community.save();
        res.send({
            message: 'Member removed successfully',
            success: true,
            community
        });
    } catch
        (error) {
        res.send({
            error: error.message,
            success: false,
        });
    }
}
);

// Get all members of a community
router.get('/:id/members', authMiddleware, async (req, res) => {
    try {
        const community = await Community.findById(req.params.id).populate('members');
        res.send({
            message: 'Members retrieved successfully',
            success: true,
            community
        });
    } catch (error) {
        res.send({
            error: error.message,
            success: false,
        });
    }
});

module.exports = router;

