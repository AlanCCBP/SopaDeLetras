import React from 'react';
import Row from 'react-bootstrap/Row';
import SopaDeLetras from './SopaDeLetras';

class SopasDeLetras extends React.Component {

    constructor(props){

        super(props)

        this.state={
            error: null,
            isLoaded: false,
            sopas: []
        }
    }

    /*
        Esta sería la parte de la "simulación de petición a una API REST".

        No es como me hubiera gustado hacerla, porque soy consciente de la necesidad de manejar las promises
        encadenadas en el fetch y luego en el .json(), para luego evaluar el success o error de la operación.

        No encontré la manera de hacer eso con archivos locales sin estos estar dentro de la carpeta Public,
        es por ello que lo resolví utilizando un require y luego retornando el JSON.

        Las variables isLoaded y error las utilizaba para controlar el flujo de la app dependiendo de si está cargando o
        cargada la información desde la "API".
    */

    getJsonResource(){

        var obj = require("../assets/resources.json");

        return obj.resources

    }

    componentDidMount(){

        this.setState({
            error: false,
            isLoaded: true,
            sopas: this.getJsonResource()
        })
    }

    render(){

        const {error, isLoaded, sopas} = this.state;
        let sopaId = 0

        if (error){
            return <div>Error: {error.message}</div>
        } else if (!isLoaded){
            return <div>Cargando...</div>
        } else {
            return(

                /*
                    Aquí es donde renderizamos cada sopa individualmente.
                    Recibe el objeto JSON de cada sopa que se haya incluido en el archivo
                    y el array de palabras a buscar.
                */
                <Row>
                    {sopas.map(unaSopa =>
                        <SopaDeLetras
                            key={sopaId = sopaId + 1}
                            sopa={unaSopa}
                            words={this.props.words}
                        />
                    )}
                </Row>
            )
        }
    }
}

export default SopasDeLetras;