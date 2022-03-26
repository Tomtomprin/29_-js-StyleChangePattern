const ClassTest1 = document.querySelector('.test1');
const ClassTest2 = document.querySelector('.test2');
const ClassTest3 = document.querySelector('.test3');



// Pattern①
ClassTest1.addEventListener('click', function () {
    ClassTest1.style.background = 'pink';
})


// Pattern②
ClassTest2.addEventListener('click', function () {
    ClassTest2.classList.add('test2_2');
})

// Pattern③
let ClassTest3bg = window.getComputedStyle(ClassTest3).background;

ClassTest3.addEventListener('click', () => {
    ClassTest3bg = 'pink';
    ClassTest3.style.background = ClassTest3bg;
})

// ↓google検証ツールでjsが見つかりやすいように記述
console.log('test');