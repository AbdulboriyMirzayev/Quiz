var allQuestions = [ 
    {
        name: 'question1',
        text: 'What does HTML stand for?',
        options: [
            {value: 1, text: ' High-Tech Machine Language', is_correct: false},
            {value: '2', text: 'HyperText Markup Language', is_correct: true},
            {value: '3', text: 'Home Tool Markup Language', is_correct: false},
            {value: '4', text: 'Hyperlink Text Management Language', is_correct: false}
        ],
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6935wo8bLZh5FeafJEffqWKDOpNpx6UE5bg&s'
    },
    {
        name: 'question2',
        text: 'What does CSS stand for?',
        options: [
            {value: '1', text: ' Colorful Style Sheets', is_correct: false},
            {value: '2', text: 'Creative Style Scripts', is_correct: false},
            {value: '3', text: 'Computer Styling System', is_correct: false},
            {value: '4', text: 'Cascading Style Sheets', is_correct: true}
        ],
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png'
    },
    {
        name: 'question3',
        text: 'What does PHP stand for?',
        options: [
            {value: '1', text: ' PHP: Hypertext Preprocessor ', is_correct: true},
            {value: '2', text: ' Personal Home Page', is_correct: false},
            {value: '3', text: 'Professional Hypertext Processor', is_correct: false},
            {value: '4', text: 'Programming Hub Platform', is_correct: false}
        ],
        image_url: 'https://static-00.iconduck.com/assets.00/php-icon-2048x2048-jyo8hbbt.png'
    },
    {
        name: 'question4',
        text: 'What does SQL stand for?',
        options: [
            {value: '1', text: 'Structured Query Language', is_correct: true},
            {value: '2', text: 'Simple Query Logic', is_correct: false},
            {value: '3', text: 'Sequential Query List', is_correct: false},
            {value: '4', text: 'Standard Quality Language', is_correct: false}
        ],
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png'
    },
    {
        name: 'question5',
        text: 'What does JSON stand for?',
        options: [
            {value: '1', text: 'JavaScript Object Notation', is_correct: true},
            {value: '2', text: 'Java Standard Output Node', is_correct: false},
            {value: '3', text: 'JScript Open Network', is_correct: false},
            {value: '4', text: 'Just Some Object Node', is_correct: false}
        ],
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg'
    },
    {
        name: 'question6',
        text: 'What does XML stand for?',
        options: [
            {value: '1', text: 'Extensible Markup Language', is_correct: true},
            {value: '2', text: 'Extra Machine Language', is_correct: false},
            {value: '3', text: 'Executable Multiple Language', is_correct: false},
            {value: '4', text: 'Example Meta Language', is_correct: false}
        ],
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbMR_PTYc5YC09pEJlur5tMJRw_Ler9SRZA&s'
    },
    {
        name: 'question7',
        text: 'What does API stand for?',
        options: [
            {value: '1', text: 'Application Programming Interface', is_correct: true},
            {value: '2', text: 'Applied Program Integration', is_correct: false},
            {value: '3', text: 'Automated Process Interaction', is_correct: false},
            {value: '4', text: 'Advanced Program Instance', is_correct: false}
        ],
        image_url: 'https://t4.ftcdn.net/jpg/03/22/95/69/360_F_322956978_9ESBVewTYdhSu9G6qf2JazX9tUsdh53g.jpg'
    },
    {
        name: 'question8',
        text: 'What does HTTP stand for?',
        options: [
            {value: '1', text: 'HyperText Transfer Protocol', is_correct: true},
            {value: '2', text: 'High-Tech Transfer Protocol', is_correct: false},
            {value: '3', text: 'Hyperlink Text Transfer Protocol', is_correct: false},
            {value: '4', text: 'HyperText Transfer Process', is_correct: false}
        ],
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/HTTP_logo.svg/512px-HTTP_logo.svg.png'
    }
]


// {
//     name: 'question1',
//     text: 'What does HTML stand for?',
//     options: [
//         {value: 1, text: ' High-Tech Machine Language', is_correct: false},
//         {value: 2, text: 'HyperText Markup Language', is_correct: true},
//         {value: 3, text: 'Home Tool Markup Language', is_correct: false},
//         {value: 4, text: 'Hyperlink Text Management Language', is_correct: false}
//     ],
//     image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6935wo8bLZh5FeafJEffqWKDOpNpx6UE5bg&s'
// }


// 2. 

var mainArea = document.querySelector(".questions")

for (let q = 0; q < allQuestions.length; q++) {

    var container = document.createElement("div")
    mainArea.appendChild(container)
    container.classList.add("container", "gx-5", "d-none")

    var questionbox = document.createElement("div")
    container.appendChild(questionbox)
    questionbox.classList.add("question", "col", "mt-1")

    var question = document.createElement("div")
    questionbox.appendChild(question)
    question.classList.add("mt-5", "col")

    var html = document.createElement("div")
    question.appendChild(html)
    html.classList.add("col")

    var htmlquestion = document.createElement("h3")
    htmlquestion.classList.add("text-center")
    html.appendChild(htmlquestion)


    var imganswer = document.createElement("div")
    container.appendChild(imganswer)
    imganswer.classList.add("row", "mt-2")

    var imgbtn = document.createElement("div")
    imganswer.appendChild(imgbtn)
    imgbtn.classList.add("col", "text_center", "mt-4")

    var img = document.createElement("img")
    imgbtn.appendChild(img)
    img.classList.add("img-fluid", "imgs")
    img.src = allQuestions[q].image_url;

    htmlquestion.innerHTML = allQuestions[q].text;
    var options = allQuestions[q].options;
    var questionname = allQuestions[q].name

    var answersbtn = document.createElement("div")
    imganswer.appendChild(answersbtn)
    answersbtn.classList.add("col", "w-100", "mt-4")

    for (let i = 0; i < options.length; i++) {

        const option = options[i];
        
        var input_id = questionname+ "_" + option.value
        var inputs = document.createElement("input")
        inputs.setAttribute("name", questionname)
        inputs.classList.add("btn-check")
        inputs.setAttribute("type", "radio")
        inputs.setAttribute("id", input_id)
        inputs.setAttribute("autocomplete", "off")
        inputs.setAttribute("value", option.value)
        answersbtn.appendChild(inputs)
        var htmlbtn = document.createElement("label")
        answersbtn.appendChild(htmlbtn)
        htmlbtn.setAttribute("for", input_id)
        htmlbtn.classList.add("btn", "btn-outline-primary", "p-2", "w-100", "mt-3")

        htmlbtn.innerHTML = option.text;
    }
    var pagination = document.querySelector("ul.pagination")
    var paginationbtn = document.createElement("li")
    pagination.appendChild(paginationbtn)
    var linkbtn = document.createElement("a")
    paginationbtn.appendChild(linkbtn)
    paginationbtn.classList.add("page-item")
    linkbtn.classList.add("page-link")
    linkbtn.href = "#";

    linkbtn.innerHTML = q+1;

    linkbtn.addEventListener("click", () => {
        for (let child of questions.children) {
            child.classList.add("d-none")
        }
        questions.children[q].classList.remove("d-none")

        if (q == allQuestions.length-1) {
            document.getElementById("nextbtn").classList.add("d-none")
        } else{
            document.getElementById("nextbtn").classList.remove("d-none")
        }
    })


}

const questions = document.querySelector(".questions")

questions.children[0].classList.remove("d-none")

var tests = questions.children
var result_div = document.querySelector(".result_div")
var pages = document.querySelector(".pages")
var result_value = document.querySelector(".result")
correct = 0;
var finish_button = document.getElementById("finish_btn")
finish_button.addEventListener("click", () => {
    for (let child of questions.children) {
        child.classList.add("d-none")
    }
    pages.classList.add("d-none")
    finish_btn.classList.add("d-none")

    document.getElementById("nextbtn").classList.add("d-none")

    result_div.classList.remove("d-none")
    let answer_sheet = {};
    for (let i = 0; i < tests.length; i++) {
        const test = tests[i].querySelector("input[type=radio]:checked")
        console.log(test)
        if (test) {
            let testName = test.name;
            let testAnswer = test.value;
    
            answer_sheet[testName] = testAnswer;
        }
    }

    console.log(answer_sheet);

    let correct = 0;
    for (let [questionName, selectedOption] of Object.entries(answer_sheet)) {
        const question = allQuestions.filter((question) => question.name == questionName)[0];
        const optionObject = question.options.filter((option) => option.value == selectedOption)[0];

        if (optionObject.is_correct) {
            correct++;
        }

    }
    result_value.innerHTML = correct + "/" + allQuestions.length 
})

var children = questions.children
var next_button = document.getElementById("nextbtn")

next_button.addEventListener("click", () => {
    for (let n = 0; n < children.length - 1; n++) {
        if (!children[n].classList.contains('d-none')) {
            children[n].classList.add("d-none")
            children[n+1].classList.remove("d-none")
            break;
        };
        if (n+1 == allQuestions.length-2) {
            document.getElementById("nextbtn").classList.add("d-none")
        } else{
            document.getElementById("nextbtn").classList.remove("d-none")
        }
    }

})





