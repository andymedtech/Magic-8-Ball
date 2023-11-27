// root Magic Ball
function magicBallRoot() {
    // root elements
    const rootMagicBallQuestion = document.getElementById('root_magicBall_question');
    const rootMagicBallButton = document.getElementById('root_magicBall_button');
    const rootMagicBallAnswer = document.getElementById('root_magicBall_answer');
    const rootMagicBallCircle = document.getElementById('root_magicBall_circle');
    const rootMagicBallTriangle = document.getElementById('root_magicBall_triangle');
    const rootMagicBallMessage = document.getElementById('root_magicBall_message');
    // root Magic Answers
    const magicBallAnswer = [
        'It is certain', 'Бесспорно', 'blue',
        'It is decidedly so', 'Предрешено', 'blue',
        'Without a doubt', 'Никаких сомнений', 'blue',
        'Yes - definitely', 'Определённо да', 'blue',
        'You may rely on it', 'Можешь быть уверен в этом', 'blue',

        'As I see it, yes', 'Мне кажется — "да"', 'green',
        'Most likely', 'Вероятнее всего', 'green',
        'Outlook good', 'Хорошие перспективы', 'green',
        'Signs point to yes', 'Знаки говорят — "да"', 'green',
        'Yes', 'Да', 'green',

        'Reply hazy, try again', 'Пока не ясно, попробуй снова', 'yellow',
        'Ask again later', 'Спроси позже', 'yellow',
        'Better not tell you now', 'Лучше не рассказывать', 'yellow',
        'Cannot predict now', 'Сейчас нельзя предсказать', 'yellow',
        'Concentrate and ask again', 'Сконцентрируйся и спроси опять', 'yellow',
        
        'Don\'t count on it', 'Даже не думай', 'red',
        'My reply is no', 'Мой ответ — "нет"', 'red',
        'My sources say no', 'По моим данным — "нет"', 'red',
        'Outlook not so good', 'Перспективы не очень хорошие', 'red',
        'Very doubtful', 'Весьма сомнительно', 'red',
    ];
    // press button
    rootMagicBallButton.onclick = () => {
        const magicBallAnswerNumber = Math.ceil(Math.random() * (magicBallAnswer.length / 3));
        const magicBallGetAnswerEng = magicBallAnswer[magicBallAnswerNumber * 3 - 3];
        const magicBallGetAnswerRus = magicBallAnswer[magicBallAnswerNumber * 3 - 2];
        const magicBallGetAnswerColor = magicBallAnswer[magicBallAnswerNumber * 3 - 1];

        rootMagicBallTriangle.className = 'magicBall_triangle_on';
        rootMagicBallMessage.className = 'magicBall_message_normal';

        switch (magicBallGetAnswerColor) {
            case 'blue':
                rootMagicBallCircle.className = 'magicBall_сircle_inner_blue';
		        break;
            case 'green':
                rootMagicBallCircle.className = 'magicBall_сircle_inner_green';
                break;
            case 'yellow':
                rootMagicBallCircle.className = 'magicBall_сircle_inner_yellow';
                break;
            case 'red':
                rootMagicBallCircle.className = 'magicBall_сircle_inner_red';
		        break;
            default:
                rootMagicBallCircle.className = 'magicBall_сircle_inner_white';
        };

        rootMagicBallQuestion.value = null;
        rootMagicBallMessage.textContent = magicBallGetAnswerEng;
        rootMagicBallAnswer.value = `${magicBallGetAnswerEng} (${magicBallGetAnswerRus})`;
    };
};
// run Magic Ball
magicBallRoot();