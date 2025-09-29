const questions = [
    { text: "和小伙伴一起玩 vs. 一个人安静地看书，哪个让你更开心？", dimension: "EI", choices: [{ text: "和小伙伴玩", value: "E" }, { text: "一个人看书", value: "I" }] },
    { text: "你更喜欢听一个真实的冒险故事，还是一个充满魔法的奇幻故事？", dimension: "SN", choices: [{ text: "真实的故事", value: "S" }, { text: "奇幻的故事", value: "N" }] },
    { text: "当朋友难过时，你更倾向于给他一个拥抱，还是帮他分析问题？", dimension: "TF", choices: [{ text: "给他拥抱", value: "F" }, { text: "分析问题", value: "T" }] },
    { text: "你喜欢把周末安排得满满的，还是想到什么就做什么？", dimension: "JP", choices: [{ text: "安排满满", value: "J" }, { text: "随心所欲", value: "P" }] },
    { text: "在派对上，你喜欢成为焦点，还是和几个好朋友安静聊天？", dimension: "EI", choices: [{ text: "成为焦点", value: "E" }, { text: "安静聊天", value: "I" }] },
    { text: "学习新东西时，你喜欢一步步跟着说明做，还是自己摸索？", dimension: "SN", choices: [{ text: "跟着说明", value: "S" }, { text: "自己摸索", value: "N" }] },
    { text: "做决定时，你更相信你的头脑分析，还是内心的感觉？", dimension: "TF", choices: [{ text: "头脑分析", value: "T" }, { text: "内心感觉", value: "F" }] },
    { text: "你的房间通常是整整齐齐的，还是随性地放着各种东西？", dimension: "JP", choices: [{ text: "整整齐齐", value: "J" }, { text: "随性摆放", value: "P" }] },
    { text: "一天结束后，你觉得和别人聊天能让你恢复精力，还是独处一下更能让你放松？", dimension: "EI", choices: [{ text: "和别人聊天", value: "E" }, { text: "自己独处", value: "I" }] },
    { text: "你更关注眼前实在的东西，还是经常思考未来的可能性？", dimension: "SN", choices: [{ text: "眼前实在的", value: "S" }, { text: "未来的可能", value: "N" }] },
    { text: "你觉得遵守规则更重要，还是让每个人都开心更重要？", dimension: "TF", choices: [{ text: "遵守规则", value: "T" }, { text: "大家开心", value: "F" }] },
    { text: "你喜欢在截止日期前早早完成任务，还是总在最后一刻才找到灵感？", dimension: "JP", choices: [{ text: "早早完成", value: "J" }, { text: "最后一刻", value: "P" }] }
];

const personalities = {
    "ISTJ": { name: "小小检查员[ISTJ]", desc: "你做事认真、有条理，是大家信赖的可靠伙伴。" },
    "ISFJ": { name: "温暖守护者[ISFJ]", desc: "你心地善良，乐于助人，总是默默地关心着身边的每一个人。" },
    "INFJ": { name: "神秘小先知[INFJ]", desc: "你有很强的直觉，能理解别人的感受，心里充满了奇思妙想。" },
    "INTJ": { name: "智慧小军师[INTJ]", desc: "你聪明、有远见，喜欢思考复杂的问题，总能想出绝妙的计划。" },
    "ISTP": { name: "动手小能手[ISTP]", desc: "你充满好奇心，喜欢亲手探索和修理东西，动手能力一级棒。" },
    "ISFP": { name: "创意小画家[ISFP]", desc: "你热爱美好事物，有独特的艺术天赋，能创造出美丽的作品。" },
    "INFP": { name: "治愈梦想家[INFP]", desc: "你内心世界丰富，充满爱与善意，像童话里的小天使。" },
    "INTP": { name: "思维小侦探[INTP]", desc: "你总是在思考“为什么”，喜欢分析和研究，是天生的逻辑大师。" },
    "ESTP": { name: "活力冒险家[ESTP]", desc: "你精力充沛，勇敢爱挑战，是小伙伴中的带头“玩家”。" },
    "ESFP": { name: "快乐表演家[ESFP]", desc: "你阳光开朗，喜欢成为焦点，能给身边的人带来无穷的欢乐。" },
    "ENFP": { name: "闪光小精灵[ENFP]", desc: "你热情、有创意，对世界充满好奇，总能发现生活中的乐趣。" },
    "ENTP": { name: "机智小发明家[ENTP]", desc: "你脑子转得飞快，点子多多，喜欢和别人辩论和交流新想法。" },
    "ESTJ": { name: "可靠小队长[ESTJ]", desc: "你有出色的组织能力，做事果断，是天生的领导者。" },
    "ESFJ": { name: "贴心小主人[ESFJ]", desc: "你热情好客，善于交际，总能让每个人都感到受欢迎。" },
    "ENFJ": { name: "引路小导师[ENFJ]", desc: "你有感染力，能鼓励和引导他人，是大家的人生小导师。" },
    "ENTJ": { name: "天生小领袖[ENTJ]", desc: "你自信、有魄力，目标明确，能带领大家一起完成伟大的事情。" }
};

let currentQuestionIndex = 0;
let answers = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function showQuestion() {
    const app = document.getElementById('app');
    const question = questions[currentQuestionIndex];
    if (!question) {
        showResult();
        return;
    }

    app.innerHTML = `
        <div class="question-container">
            <h2>${question.text}</h2>
            <div class="options-container">
                <button class="option-btn" data-value="${question.choices[0].value}">${question.choices[0].text}</button>
                <button class="option-btn" data-value="${question.choices[1].value}">${question.choices[1].text}</button>
            </div>
            <p class="progress-text">问题 ${currentQuestionIndex + 1} / ${questions.length}</p>
        </div>
    `;

    document.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            answers[e.target.dataset.value]++;
            currentQuestionIndex++;
            showQuestion();
        });
    });
}

function calculateResult() {
    let result = "";
    result += answers.E > answers.I ? "E" : "I";
    result += answers.S > answers.N ? "S" : "N";
    result += answers.T > answers.F ? "T" : "F";
    result += answers.J > answers.P ? "J" : "P";
    return result;
}

function showResult() {
    const app = document.getElementById('app');
    const resultType = calculateResult();
    const personality = personalities[resultType];

    app.innerHTML = `
        <div class="result-container">
            <h2>你的性格超能力是...</h2>
            <h1>${personality.name}</h1>
            <p>${personality.desc}</p>
            <button id="restart-btn">再玩一次</button>
        </div>
    `;

    document.getElementById('restart-btn').addEventListener('click', () => {
        currentQuestionIndex = 0;
        answers = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        startTest();
    });
}

function startTest() {
    currentQuestionIndex = 0;
    answers = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    showQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="welcome-container">
            <h1>欢迎来到儿童性格探索乐园!</h1>
            <p>准备好发现你独特的超能力了吗？</p>
            <button id="start-btn">开始测试</button>
        </div>
    `;
    document.getElementById('start-btn').addEventListener('click', startTest);
});
