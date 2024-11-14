import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)

// { "user": [....] }


export class DataBase {
    #database = {} // # para torna-lo privado

    constructor(){
        fs.readFile(databasePath, 'utf-8').then(data => {
            this.#database = JSON.parse(data)
        }).catch(() => {
            this.#persist()
        })
    }

    #persist() {
        fs.writeFile(databasePath, JSON.stringify(this.#database))
    }

    select(table){
        return this.#database[table] ?? []
    }

    insert(table, data){
        if(Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }

        this.#persist()

        return data
    }

    delete(table, id){
        const rowIndex = this.#database[table].findIndex(row => row.id === id)

        if(rowIndex > -1){
            this.#database[table].splice(rowIndex, 1)
            this.#persist()
        }

    }



}