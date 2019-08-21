import React from 'react';

class SoupResult extends React.Component {

    searchOmnidirectionally(y, x, aWord){

        const minX = 0
        const minY = 0
        const maxX = this.props.sopa[y].length
        const maxY = this.props.sopa.length
        const wordLength = aWord.length
        var results = 0
        var found = true
        var i = 0


        /*
            Buscamos en las 8 direcciones.
            Si hay coincidencia total, incrementamos la cantidad de veces que encontramos
            la palabra buscada.
            Si la posición (coordenada) a partir de la cual buscamos en una determinada
            dirección hace que sea imposible que la palabra quepa (debido al largo de la misma),
            simplemente salteamos el análisis en esa dirección.
        */

        found = true
        //Buscar hacia el ESTE
        if ((x + (wordLength - 1)) <= maxX) {

            for(i = 1; i < wordLength; i++){

                if (!(aWord[i] === this.props.sopa[y][x + i])) {

                    found = false
                    break

                }
            }

            if (found) {
                results++
            }
        }

        found = true
        //Buscar hacia el SURESTE
        if (((y + (wordLength - 1)) <= maxY) &&
            ((x + (wordLength - 1)) <= maxX)) {

            for(i = 1; i < wordLength; i++){

                if (!(aWord[i] === this.props.sopa[y + i][x + i])) {

                    found = false
                    break

                }
            }

            if (found) {
                results++
            }
        }

        found = true
        //Buscar hacia el SUR
        if ((y + (wordLength - 1)) <= maxY) {

            for(i = 1; i < wordLength; i++){

                if (!(aWord[i] === this.props.sopa[y + i][x])) {

                    found = false
                    break

                }
            }

            if (found) {
                results++
            }
        }

        found = true
        //Buscar hacia el SUROESTE
        if (((y + (wordLength - 1)) <= maxY) &&
            ((x - (wordLength - 1)) >= minX)) {

            for(i = 1; i < wordLength; i++){

                if (!(aWord[i] === this.props.sopa[y + i][x - i])) {

                    found = false
                    break

                }
            }

            if (found) {
                results++
            }
        }

        found = true
        //Buscar hacia el OESTE
        if ((x - (wordLength - 1)) >= minX) {

            for(i = 1; i < wordLength; i++){

                if (!(aWord[i] === this.props.sopa[y][x - i])) {

                    found = false
                    break

                }
            }

            if (found) {
                results++
            }
        }

        found = true
        //Buscar hacia el NOROESTE
        if (((y - (wordLength - 1)) >= minY) &&
            ((x - (wordLength - 1)) >= minX)) {

            for(i = 1; i < wordLength; i++){

                if (!(aWord[i] === this.props.sopa[y - i][x - i])) {

                    found = false
                    break

                }
            }

            if (found) {
                results++
            }
        }

        found = true
        //Buscar hacia el NORTE
        if ((y - (wordLength - 1)) >= minY) {

            for(i = 1; i < wordLength; i++){

                if (!(aWord[i] === this.props.sopa[y - i][x])) {

                    found = false
                    break

                }
            }

            if (found) {
                results++
            }
        }

        found = true
        //Buscar hacia el NORESTE
        if (((y - (wordLength - 1)) >= minY) &&
            ((x + (wordLength - 1)) <= maxX)) {

            for(i = 1; i < wordLength; i++){

                if (!(aWord[i] === this.props.sopa[y - i][x + i])) {

                    found = false
                    break

                }
            }

            if (found) {
                results++

            }
        }

        return(results)
    }

    searchWord(){

        /*
            Primero comenzamos buscando la primera letra de cada palabra para, desde allí, encarar la búsqueda
            en todas las direcciones.
            Al finalizar la misma, se agrega a un array la leyenda con el resultado hasta el momento.
        */

        const self = this
        let items = []
        let h6Id = 0

        this.props.words.map(function(aWord, index){

            let cant = 0

            for(let y = 0; y < self.props.sopa.length; y++) {

                for(let x = 0; x < self.props.sopa[y].length; x++) {

                    if (self.props.sopa[y][x] === aWord[0]){

                        cant += self.searchOmnidirectionally(y, x, aWord)

                    }
                }
            }

            if(cant === 0){
                items.push(<h6 key={h6Id = h6Id + 1}>No encontramos la palabra {aWord} en esta sopa.</h6>)
            } else if (cant === 1) {
                items.push(<h6 key={h6Id = h6Id + 1}>Sólo encontramos la palabra {aWord} {cant} vez en esta sopa.</h6>)
            } else {
                items.push(<h6 key={h6Id = h6Id + 1}>Encontramos la palabra {aWord} {cant} veces en esta sopa.</h6>)
            }

            return true
        })

        return (items)
    }

    render(){

        return(
            <div>{this.searchWord()}</div>
        )
    }
}

export default SoupResult;