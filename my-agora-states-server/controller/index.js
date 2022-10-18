const {agoraStatesDiscussions} = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
    findAll: (req, res) => {
        // TODO: 모든 discussions 목록을 응답합니다.
        return res.status(200).json(discussionsData);
    },

    findById: (req, res) => {
        // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
        const {id} = req.params;
        const id_filter = discussionsData.find((el) => el.id === Number(id));
        console.log(id_filter);
        if (id_filter === undefined) return res.status(404).json('No discussion found!');
        return res.status(200).json(id_filter);
    }

};

module.exports = {
    discussionsController,
};
