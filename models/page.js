const frost = [
    {id: 1, page: "Preliminary Round", date: "29th June, 2024"},
    {id: 2, page: "First Round", date: "20th July, 2024"},
    {id: 3, page: "Second Round", date: "3rd August, 2024"},
    {id: 4, page: "Semi/Final Round", date: "17th August, 2024"},
    {id: 5, page: "Tournament Info", date: "31st August, 2024"}
];

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return frost;
};

function getOne(id) {
    id = parseInt(id);
    return frost.find(function(page) {
        return page.id === id;
    });
};

