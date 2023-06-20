const db ={
    'user': [
        {id: '1', name: 'Carlos'},
        {id: '2', name: 'Juan'},
        {id: '3', name: 'Leidy'},
        {id: '4', name: 'Nemesis'},
    ],
};

const list = async (tabla) => {
    return await db[tabla] || [];
}

const get = async (tabla, id) => {
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

const upsert = async (tabla, data) => {
    if(!db[tabla]){
        db[tabla] = [];
    }
    await db[tabla].push(data);
    console.log(db);
}

const remove = async (tabla, id) => {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove
}

