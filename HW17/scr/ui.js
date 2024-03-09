export default class UI{
    
    static TableHeads = ['Games', 'Projects', 'Workers', 'Companies'];

    static generateScreen(){
        const domElementDiv1 = document.createElement('div');
        domElementDiv1.classList.add('my-table-div1');
        const domElementTable1 = document.createElement('table');
        domElementTable1.classList.add('my-table');
        const domElementTable1RowHead = domElementTable1.insertRow(0);
        domElementTable1RowHead.classList.add('my-table-head-row');
        const domElementTable1RowHeadCell = [];
        for (let i=0; i< this.TableHeads.length; i++){
            domElementTable1RowHeadCell.push(domElementTable1RowHead.insertCell(i));
            domElementTable1RowHeadCell[i].classList.add('my-table-head-cell');
            domElementTable1RowHeadCell[i].classList.add("lg-col-4");
            domElementTable1RowHeadCell[i].id = `cell-head-${i}`;
            domElementTable1RowHeadCell[i].innerHTML = this.TableHeads[i];
        }
        const domElementTable1RowData = domElementTable1.insertRow(1);
        domElementTable1RowData.classList.add('my-table-data-row');
        const domElementTable1RowDataCell = [];
        for (let i=0; i< this.TableHeads.length; i++){
            domElementTable1RowDataCell.push(domElementTable1RowData.insertCell(i));
            domElementTable1RowDataCell[i].classList.add('my-table-data-cell');
            domElementTable1RowDataCell[i].classList.add("lg-col-4");
            domElementTable1RowDataCell[i].id = `cell-data-${i}`;
        }
        domElementDiv1.appendChild(domElementTable1);

        const domElementDiv2 = document.createElement('div');
        domElementDiv2.classList.add('my-table-div2');
        const domElementTable2 = document.createElement('table');
        domElementTable2.classList.add('my-table');
        const domElementTable2RowRun = domElementTable2.insertRow(0);        
        domElementTable2RowRun.classList.add('my-table-data-row');
        const domElementTable2RowRunCell = domElementTable2RowRun.insertCell(0);
        domElementTable2RowRunCell.classList.add('my-table-data-cell');
        domElementTable2RowRunCell.classList.add('lg-col-1');
        //domElementTable2RowRunCell.colSpan = 4;
        domElementTable2RowRunCell.id = `cell-run`;
        domElementDiv2.appendChild(domElementTable2);            
        
        document.body.appendChild(domElementDiv1);
        document.body.appendChild(domElementDiv2);
    }
    
    static addHTMLInfo(idName, info = ''){
        const domElement = document.getElementById(`cell-data-${this.TableHeads.indexOf(idName)}`);
        domElement.innerHTML += `${info}<br>`;        
    }
    static addStatusInfo(info = ''){
        const domElement = document.getElementById(`cell-run`);
        domElement.innerHTML += `${info}<br>`;        
    }
    static clearStatusInfo(){
        const domElement = document.getElementById(`cell-run`);
        domElement.innerHTML = ``;        
    }
    static clearHTMLInfo(idName){
        const domElement = document.getElementById(`cell-data-${this.TableHeads.indexOf(idName)}`);
        domElement.innerHTML = ``;        
    }
}