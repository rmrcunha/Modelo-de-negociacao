class NegociacaoView{

    constructor(elemento){

        this._elemento = elemento;
    }

    _template(model){

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${model._negociacoes.map(n =>
                     `
                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `
                ).join('')}
            </tbody>
        
            <tfoot>
            </tfoot>
        </table>
        `;
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }

}