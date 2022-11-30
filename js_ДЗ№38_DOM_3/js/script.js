'use strict';

(function() {

    const listData = [1,2, [1.1,1.2,1.3, [2.1, 2.2, 2.3, [3.1, 3.2, 3.3, [4.1, 4.2, 4.3]]]] ,5];
     
    const recursiveList = data => {

        const ul = document.createElement("ul");

        for(let i = 0; i < data.length; i += 1) {

            const li = document.createElement("li");

            if (Array.isArray(data[i])) {
                li.append(recursiveList(data[i]));
            } else {
                li.append(data[i])
            }
            ul.append(li);
        }
        return ul;
    }

    const ul = recursiveList(listData);
    document.body.append(ul);
})();


