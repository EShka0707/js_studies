ДЗ #38 — DOM V3

Написать функцию generateList(array), которая принимает массив из чисел и массивов чисел (например [1,2,3]) и генерирует список из элементов:

    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

А если в массиве встречается массив (например, [1,2, [1.1,1.2,1.3] ,3]) то делать вложенный список. Для проверки на массив используйте Array.isArray()

    <ul>
        <li>1</li>
        <li>2</li>
        <li>
            <ul>
                <li>1.1</li>
                <li>1.2</li>
                <li>1.3</li>
            </ul>
        </li>
        <li>3</li>
    </ul>

* [Ссылка на проект в GitHab](https://github.com/EShka0707/js_studies.git)
