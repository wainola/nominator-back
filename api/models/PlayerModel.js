class PlayerModel {
    static async allPlayers() {
        let players = [
            { id: 10003421, name: 'Alfonso', lastname: 'Moya', age: 31 },
            { id: 10003422, name: 'Nicolas', lastname: 'Lastra', age: 31 },
            { id: 10003423, name: 'Francisco', lastname: 'Gonzalez', age: 32 },
            { id: 10003424, name: 'Nicolas', lastname: 'Riquelme', age: 31 },
            { id: 10003425, name: 'Felipe', lastname: 'Cubillos', age: 31 },
            { id: 10003426, name: 'Juan Carlos Francisco Anderson', lastname: 'Painequeo', age: 32 },
            { id: 10003427, name: 'Javier', lastname: 'Muñoz', age: 32 },
        ]
        return await players;
    }
}

module.exports = PlayerModel;