export default class ClientsView{
    constructor(){
        this.DOMTable = document.querySelector('.my-table-1');
        this.DOMTableClientInfo = document.querySelector('.my-table-2');
    }

    getHTML(headers, data){
        let res=`<table class="basepagetable">
                <tbody>` + data.filter(el=>el.folder === '1').map(el=>`
                    <tr>
                        <td>
                            <ul>
                                <li class="my-table-tree1"></li>
                            </ul>
                        </td>
                        <td class="my-table-first" colspan="5">${el.descr}</td
                    </tr>`+data.filter(el1=>el1.parent === el.id).map(el2=>`
                    <tr class="my-table-second">
                        <td colspan="2">
                            <ul>
                                <li class="my-table-tree2" onclick="viewFullInfo('Clients', '${el2.id}')"></li>
                            </ul>
                        </td>
                        <td>${el2.descr}</td>
                        <td>${el2.city}</td>
                        <td>${el2.contact}</td>
                    </tr>`).join('')).join('')+`
                </tbody>
            </table>`;
        return res;
    }

    getHTMLOne(headers, data, scrId){
        const current=data.find(el=>el.id===scrId);
        let res=`   <table>
                        <caption>${current.descr}</caption>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>
                                    <input class="my-input-info field-id" type="text" value="${current.id}"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Descr</td>
                                <td>
                                    <input class="my-input-info field-descr" type="text" value="${current.descr}"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Full</td>
                                <td>
                                    <input class="my-input-info field-full" type="text" value="${current.full}"/>
                                </td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>
                                    <input class="my-input-info field-city" type="text" value="${current.city}"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Contact</td>
                                <td>
                                    <input class="my-input-info field-contact" type="text" value="${current.contact}"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="my-close-button" onclick="closeOneWindow()">
                        Close
                    </button>                   
        `;
        console.log(res);
        return res;
    }

    render(headers, data){
        const listHTML = this.getHTML(headers, data);
        this.DOMTable.innerHTML = listHTML;
    }

    renderOne(headers, data, scrID){
        const oneHTML = this.getHTMLOne(headers, data, scrID);
        this.DOMTableClientInfo.innerHTML = oneHTML;
    }
}