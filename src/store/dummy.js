const db ={
    'user': [
        {id: '1', name: 'Carlos', username:'Aloja1', password: '123abc'},
        {id: '2', name: 'Juan',username:'Aloja2', password: '123abc'},
        {id: '3', name: 'Leidy', username:'Aloja3', password: '123abc'},
        {id: '4', name: 'Nemesis',username:'Aloja4', password: '123abc'},
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

const update = async (tabla, id, data) => {
    if (!db[tabla]) {
        db[tabla] = [];
    }
    const userIndex = db[tabla].findIndex(user => user.id === id); // Buscar el índice del usuario en el array
    
    if (userIndex !== -1) {
        db[tabla][userIndex] = { ...db[tabla][userIndex], ...data }; // Actualizar los campos correspondientes del usuario
        return db[tabla][userIndex];
    } else {
        throw new Error('Usuario no encontrado');
    }
};    

const remove = async (tabla, id) => {
    return true;
}

const query = async (tabla, q) => {
    let col = await list(tabla);
    let keys = Object.keys(q);
    let key = keys[0];
    return col.filter(item => item[key] === q[key])[0] || null;
}


module.exports = {
    list,
    get,
    upsert,
    update,
    remove,
    query,
}

