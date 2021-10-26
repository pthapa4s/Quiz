
    // let value = prompt("What date is it today? ");
    // if (value != null){
    //     document.getElementById("msg").innerHTML = "YOU GUESSED IT RIGHT, IT'S YOUR BIRTHDAY!! Now try to answer the following questions!";
    // }
   
    const quizData = [{
        question: "What does HTML stand for?",
        a: "Hyper Text Makeup Language",
        b: "Hyper Token Makeup Language",
        c: "Homoe Text Make Language",
        d: "Hyper Text Markup Language",
        correct: "d"
    },
    {
        question: "Which of the following is incorrect?",
        a: "<p>This is a paragraph</p>",
        b: "<h1>This is a heding height=10px width=9px </h1>",
        c: "<img source='Image.jpng' alt='animal'>",
        d: "<title>Document</title>",
        correct: "b"
    },
    {
        question: "How many house of representatives are there in the United States?",
        a: "100",
        b: "435",
        c: "50",
        d: "102",
        correct: "b"
    
    },
    {
    question: "What is javascript used for?",
        a: "functionality",
        b: "content",
        c: "designing",
        d: "b and c",
        correct: "a"
    },
    {
    question: "Who is the prime-minister of United States at the present?",
        a: "Joe Biden",
        b: "Donald Trump",
        c: "Barack Obama",
        d: "None",
        correct:"a"
    }
    
    ];
    const quiz = document.getElementById('quiz');
    const answerEls = document.querySelectorAll('.answer');
    const questionEl = document.getElementById('question');
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById('b_text');
    const c_text = document.getElementById('c_text');
    const d_text = document.getElementById('d_text');
    const submit = document.getElementById('submit');
    
    let currentQuiz = 0;
    let score = 0;
    
    loadQuiz()
    function loadQuiz(){
        deselectAnswers()
        const currentQuizData = quizData[currentQuiz];
        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    
    }
    function deselectAnswers(){
        answerEls.forEach(answerEl => answerEl.checked = false)
    }
    function getSelected(){
        let answer;
        answerEls.forEach(answerEl => {
            if (answerEl.checked){
                answer = answerEl.id;
            }
        })
        return answer;
    }

    function showMessage() {
        document.querySelector("#winning-box").style.display="block";
        // alert("Hello friends, this is message.");
    }

    submit.addEventListener('click', () => {
        const answer = getSelected()

        
    
        if(answer){
            if(answer === quizData[currentQuiz].correct){
                score++;
            }
            currentQuiz++
            if(currentQuiz < quizData.length){
                loadQuiz()
            
            }
            else{
                if(score >0){
                quiz.innerHTML = `<h2>Your score is ${score}/${quizData.length}<h2>
                <button onclick ="location.reload()">RELOAD</button>`
                }
                if(score === 5){
                    quiz.innerHTML += `<button onclick="showMessage()">You won</button>`
                }
           
              
        }
    }
    });
  

    
    
    