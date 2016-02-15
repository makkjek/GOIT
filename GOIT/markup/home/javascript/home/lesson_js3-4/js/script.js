var app = {

    createElement: function(params) {
        var element = document.createElement(params.tagName);

        if (params.inputType){
            element.setAttribute('type', params.inputType);
        }

        if (params.className){
            element.className = params.className;
        }

        if (params.content){
            element.innerHTML = params.content;
        }

        if (params.parentElement){
            params.parentElement.appendChild(element);
        }

        return element;
    },

    generateQuestions: function(questionsAmount, answersAmount) {

        for (var i = 0; i < questionsAmount; i++) {

            this.createElement({
                tagName: 'h2',
                content: 'Вопрос №' + (i + 1),
                parentElement: form
            });

            for (var j = 0; j < answersAmount; j++) {

                var label = this.createElement({
                    tagName: 'label',
                    content: 'Вариант ответа №' + (j + 1),
                    parentElement: form
                });

                var checkbox = this.createElement({
                    tagName: 'input',
                    inputType: 'checkbox'
                });

                checkbox.style.marginRight = '15px',

                label.insertAdjacentElement('afterBegin', checkbox);
            }

        };

    }

}



var body = document.querySelector('body');


var h1 = app.createElement({
    tagName: 'h1',
    content: 'Тест по программированию',
    parentElement: body
});
h1.style.textAlign = 'center'

var form = app.createElement({
    tagName: 'form',
    parentElement: body,
    className: "col-md-6 col-md-offset-3"
});

app.generateQuestions(3, 3);

var btn = app.createElement({
    tagName: 'input',
    inputType: 'submit',
    content: 'Проверить мои результаты',
    parentElement: form

});
btn.style.display = 'block',
    btn.style.margin = 'auto',
    btn.style.borderColor = 'Black',
    btn.style.borderSize = '2px',
    btn.style.backgroundColor = 'lightblue',
    btn.style.padding = '10px 30px 10px 30px',
    btn.value = 'Проверить мои результаты'
