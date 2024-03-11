export default class UI {

    static TableHeads = ['Games', 'Projects', 'Workers', 'Companies'];

    static generateScreen() {
        const domElementDiv1 = document.createElement('div');
        domElementDiv1.classList.add('my-table-div1');
        const domElementTable1 = document.createElement('table');
        domElementTable1.classList.add('my-table');
        const domElementTable1RowHead = domElementTable1.insertRow(0);
        domElementTable1RowHead.classList.add('my-table-head-row');
        const domElementTable1RowHeadCell = [];
        for (let i = 0; i < this.TableHeads.length; i++) {
            domElementTable1RowHeadCell.push(domElementTable1RowHead.insertCell(i));
            domElementTable1RowHeadCell[i].classList.add('my-table-head-cell');
            domElementTable1RowHeadCell[i].classList.add("lg-col-4");
            domElementTable1RowHeadCell[i].id = `cell-head-${i}`;
            domElementTable1RowHeadCell[i].innerHTML = this.TableHeads[i];
        }
        for (let j = 0; j < 2; j++) {
            const domElementTable1RowData = domElementTable1.insertRow(1 + j);
            domElementTable1RowData.classList.add('my-table-data-row');
            domElementTable1RowData.id = `my-row-data-${j}`;
            const domElementTable1RowDataCell = [];
            for (let i = 0; i < this.TableHeads.length; i++) {
                domElementTable1RowDataCell.push(domElementTable1RowData.insertCell(i));
                domElementTable1RowDataCell[i].classList.add('my-table-data-cell');
                domElementTable1RowDataCell[i].classList.add("lg-col-4");
                domElementTable1RowDataCell[i].id = `cell-data-${j}-${i}`;
                if (j === 0) {
                    const domElement = document.createElement('ul');
                    domElement.classList.add('my-ul-combo');
                    domElement.id = `my-ul-combo-${i}`;
                    domElement.addEventListener('click', UI.hiddenInfo);
                    domElementTable1RowDataCell[i].appendChild(domElement);
                }
            }
        }
        domElementDiv1.appendChild(domElementTable1);

        const domElementDiv2 = document.createElement('div');
        domElementDiv2.classList.add('my-table-div2');
        const domElementTable2 = document.createElement('table');
        domElementTable2.classList.add('my-table');
        const domElementTable2RowRun = domElementTable2.insertRow(0);
        domElementTable2RowRun.classList.add('my-table-data-row');
        const domElementTable2RowRunCell = domElementTable2RowRun.insertCell(0);
        domElementTable2RowRunCell.classList.add('my-table-run-cell');
        domElementTable2RowRunCell.classList.add('lg-col-1');
        domElementTable2RowRunCell.id = `cell-run`;
        domElementDiv2.appendChild(domElementTable2);

        document.body.appendChild(domElementDiv1);
        document.body.appendChild(domElementDiv2);
    }

    static hiddenInfo(event) {
        if (event.target.tagName != 'SPAN') {
            return;
        }
        console.log(event.target.nameParentFormatId);
        const parent = document.getElementById(event.target.nameParentFormatId);

        for (let k=0; k<parent.childElementCount; k++){
            parent.childNodes[k].hidden = !(parent.childNodes[k].rowNumber === event.target.rowNumber);
        }
    }

    static showCombo(descr, obj) {
        const id = this.TableHeads.indexOf(descr);
        const idCombo = `my-ul-combo-${id}`;
        const idInfo = `cell-data-1-${id}`;
        const domCombo = document.getElementById(idCombo);
        const domInfo = document.getElementById(idInfo);
        domCombo.innerHTML ='';
        domInfo.innerHTML ='';
        for (let i = 0; i < obj.length; i++) {
            const strCombo = document.createElement('li');
            const span = document.createElement('span');
            span.innerHTML = obj[i].name;
            span.id = `span-str-info-${idInfo}-${i}`;
            span.rowNumber = i;
            span.nameParentFormatId = idInfo;
            strCombo.appendChild(span);
            const strInfo = document.createElement('div');
            strInfo.id = `str-info-${idInfo}-${i}`;
            strInfo.innerHTML = obj[i].print();
            strInfo.rowNumber = i;
            strInfo.hidden = true;
            domCombo.appendChild(strCombo);
            domInfo.appendChild(strInfo);
        }
        const domFirst = document.getElementById(`str-info-${idInfo}-${0}`);
        domFirst.hidden = false;
    }

    static addStatusInfo(info = '') {
        const domElement = document.getElementById(`cell-run`);
        domElement.innerHTML += `${info}<br>`;
        domElement.scrollTo(top);
    }
    static clearStatusInfo() {
        const domElement = document.getElementById(`cell-run`);
        domElement.innerHTML = ``;
    }
}