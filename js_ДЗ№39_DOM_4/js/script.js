'use strict';

(function() {

    const createTable = () => {

        const table = document.createElement('table');
        let num = 1;

        table.style.border = '1px solid #e5e5e5';
        table.style.margin = '0 auto';
        table.style.textAlign = 'center';
        table.style.padding = '10px';
        table.style.fontSize = '30px';

        for(let i = 0; i <= 10; i ++) {

            const tr = document.createElement('tr');

            for(let j = 0; j <= 10; j ++) {

                const td = document.createElement ('td');

                td.innerHTML = num;
                tr.append(td);
                num++;
            }
            table.append(tr);
        } 
        document.body.append(table);
    }
    createTable();
})();   