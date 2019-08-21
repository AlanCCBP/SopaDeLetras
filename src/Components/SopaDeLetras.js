import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import SoupTableRow from './SoupTableRow';
import SoupResult from './SoupResult';

class SopaDeLetras extends React.Component {

    constructor(props){

        super(props)

        this.state={
            showResults: false
        }
    }

    /*
        Mediante el handleClick, habilitamos a realizar la búsqueda y re-renderizamos la sopa
        con la leyenda que indica la cantidad de veces que aparecieron las palabras buscadas.
    */
    handleClick(){
        this.setState({
            showResults: true
        })
    }

    render(){

        let tableId = 0
        let colId = 0
        let unaSopa = this.props.sopa
        let words = this.props.words

        /*
            SoupTableRow es la renderización de la sopa como una tabla para que sea más legible.
            SoupResult es el componente donde se realiza la búsqueda de las palabras, por ello recibe el JSON
            de la sopa y el de las palabras a buscar.
            Retorna el renderizado de una leyenda con las palabras buscadas y la cantidad de veces que aparecieron
            en la sopa sobre la cual se haya hecho click.
        */

        if(this.state.showResults){
            return (
                <Col md={3} key={colId = colId + 1}>
                    <Table
                        size="sm"
                        striped
                        bordered
                        hover
                        variant="dark"
                        key={tableId = tableId + 1}
                        onClick={this.handleClick.bind(this)}>
                        <SoupTableRow tds={unaSopa}/>
                    </Table>
                    <Row>
                        <Col className="text-center">
                            <SoupResult
                                sopa={unaSopa}
                                words={words}/>
                        </Col>
                    </Row>
                </Col>
            )
        } else {
            return (
                <Col md={3} key={colId = colId + 1}>
                    <Table
                        size="sm"
                        striped
                        bordered
                        hover
                        variant="dark"
                        key={tableId = tableId + 1}
                        onClick={this.handleClick.bind(this)}>
                        <SoupTableRow tds={unaSopa}/>
                    </Table>
                </Col>
            )
        }
    }
}

export default SopaDeLetras;