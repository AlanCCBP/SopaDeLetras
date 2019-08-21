import React from 'react';

class SoupTableRow extends React.Component {

    /*
        Renderizamos cada sopa como una tabla, con tds dentro de trs, todos dentro del tbody.
    */

    render(){

        let columns = this.props.tds
        let tdId = 0
        let trId = 0

        return(
            <tbody>
                {
                    columns.map(aColumn =>
                        <tr key={trId = trId + 1}>
                            {
                                aColumn.map(aData =>
                                    <td key={tdId = tdId + 1} className="text-center">
                                        {aData}
                                    </td>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        );
    }
}

export default SoupTableRow;