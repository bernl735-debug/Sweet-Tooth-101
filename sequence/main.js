
document.addEventListener('DOMContentLoaded', function () {
    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');
    
    if (hamMenu && offScreenMenu) {
        hamMenu.addEventListener('click', () => {
            hamMenu.classList.toggle('active');
            offScreenMenu.classList.toggle('active');
        });
    }
});


let currentQuestion = 1;
let score = 0;
const totalQuestions = 3;

const answerButtons = document.querySelectorAll('.answer');

answerButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        const questionDiv = this.closest('.question');
        const allAnswers = questionDiv.querySelectorAll('.answer');
        allAnswers.forEach(btn => btn.disabled = true);

        
        const isCorrect = this.getAttribute('data-correct') === 'true';
        const feedback = questionDiv.querySelector('.feedback');

        if (isCorrect) {
            this.classList.add('correct');
            feedback.textContent = '✓ Correct!';
            feedback.classList.add('show', 'correct');
            score++;
        } else {
            this.classList.add('incorrect');
            feedback.textContent = '✗ Incorrect. Try the next question!';
            feedback.classList.add('show', 'incorrect');
            
            allAnswers.forEach(btn => {
                if (btn.getAttribute('data-correct') === 'true') {
                    btn.classList.add('correct');
                }
            });
        }

        
        setTimeout(() => {
            if (currentQuestion < totalQuestions) {
                document.getElementById('q' + currentQuestion).style.display = 'none';
                currentQuestion++;
                document.getElementById('q' + currentQuestion).style.display = 'block';
            } else {
                
                document.getElementById('quiz').style.display = 'none';
                document.getElementById('results').style.display = 'block';
                document.getElementById('score').textContent = `You got ${score} out of ${totalQuestions} questions correct!`;
            }
        }, 2000);
    });
});


document.getElementById('restart').addEventListener('click', function() {
    currentQuestion = 1;
    score = 0;
    
    
    for (let i = 1; i <= totalQuestions; i++) {
        const questionDiv = document.getElementById('q' + i);
        questionDiv.style.display = i === 1 ? 'block' : 'none';
        
        
        const buttons = questionDiv.querySelectorAll('.answer');
        buttons.forEach(btn => {
            btn.disabled = false;
            btn.classList.remove('correct', 'incorrect');
        });
        
        const feedback = questionDiv.querySelector('.feedback');
        feedback.classList.remove('show', 'correct', 'incorrect');
        feedback.textContent = '';
    }
    
    
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('results').style.display = 'none';
});