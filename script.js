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
    "ISTJ": {
        name: "小小检查员",
        desc: "你做事认真、有条理，是大家信赖的可靠伙伴。",
        details: {
            traits: "<strong>性格特点：</strong> 诚实、负责、爱计划、很专注。",
            tips: "<strong>超能力小贴士：</strong> 你的细心和耐心是超能力！用它来帮助小伙伴们发现那些容易被忽略的小秘密吧，比如解开一个复杂的谜题或者完成一个精细的手工！"
        }
    },
    "ISFJ": {
        name: "温暖守护者",
        desc: "你心地善良，乐于助人，总是默默地关心着身边的每一个人。",
        details: {
            traits: "<strong>性格特点：</strong> 温柔、体贴、有耐心、责任心强。",
            tips: "<strong>超能力小贴士：</strong> 你的温暖能治愈大家！当朋友不开心时，你的一个微笑或拥抱就是最强大的魔法，能让阴天变晴天。"
        }
    },
    "INFJ": {
        name: "神秘小先知",
        desc: "你有很强的直觉，能理解别人的感受，心里充满了奇思妙想。",
        details: {
            traits: "<strong>性格特点：</strong> 有洞察力、富有同情心、理想主义。",
            tips: "<strong>超能力小贴士：</strong> 你能“读懂”别人的心！试着把你那些充满创意的想法分享出来，它们可能会变成一个很棒的故事，或者一个帮助别人的好主意。"
        }
    },
    "INTJ": {
        name: "智慧小军师",
        desc: "你聪明、有远见，喜欢思考复杂的问题，总能想出绝妙的计划。",
        details: {
            traits: "<strong>性格特点：</strong> 独立、有逻辑、爱思考、有创造力。",
            tips: "<strong>超能力小贴士：</strong> 你的大脑就像一个超级计算机！在玩策略游戏或者做科学实验时，你的“军师”才能会让你成为团队的大脑！"
        }
    },
    "ISTP": {
        name: "动手小能手",
        desc: "你充满好奇心，喜欢亲手探索和修理东西，动手能力一级棒。",
        details: {
            traits: "<strong>性格特点：</strong> 爱冒险、动手能力强、冷静、爱观察。",
            tips: "<strong>超能力小贴士：</strong> 你的双手有魔力！无论是修理玩具还是做手工，你总能搞定。多去探索和尝试，你会发现自己能创造出很多酷东西！"
        }
    },
    "ISFP": {
        name: "创意小画家",
        desc: "你热爱美好事物，有独特的艺术天赋，能创造出美丽的作品。",
        details: {
            traits: "<strong>性格特点：</strong> 和平、有艺术感、敏感、爱自由。",
            tips: "<strong>超能力小贴士：</strong> 你是美的发现者！用你的画笔、歌声或任何你喜欢的方式，把世界的美好展示给大家看吧，你的作品会非常有感染力！"
        }
    },
    "INFP": {
        name: "治愈梦想家",
        desc: "你内心世界丰富，充满爱与善意，像童话里的小天使。",
        details: {
            traits: "<strong>性格特点：</strong> 善良、有同理心、想象力丰富、忠于理想。",
            tips: "<strong>超能力小贴士：</strong> 你拥有一个充满魔法的内心世界！把你的奇妙幻想写成故事或画成画，它能给别人带来希望和温暖。"
        }
    },
    "INTP": {
        name: "思维小侦探",
        desc: "你总是在思考“为什么”，喜欢分析和研究，是天生的逻辑大师。",
        details: {
            traits: "<strong>性格特点：</strong> 好奇、聪明、有逻辑、爱分析。",
            tips: "<strong>超能力小-贴士：</strong> 你是天生的“问号”解决者！对于任何你感兴趣的问题，深入研究下去，你可能会有惊人的发现，就像大侦探一样！"
        }
    },
    "ESTP": {
        name: "活力冒险家",
        desc: "你精力充沛，勇敢爱挑战，是小伙伴中的带头“玩家”。",
        details: {
            traits: "<strong>性格特点：</strong> 大胆、爱社交、反应快、享受当下。",
            tips: "<strong>超能力小贴士：</strong> 你是团队的“活力引擎”！你的勇气和活力能带动大家一起去冒险和尝试新事物，让每一次活动都充满乐趣！"
        }
    },
    "ESFP": {
        name: "快乐表演家",
        desc: "你阳光开朗，喜欢成为焦点，能给身边的人带来无穷的欢乐。",
        details: {
            traits: "<strong>性格特点：</strong> 热情、爱表演、乐观、善于交际。",
            tips: "<strong>超能力小贴士：</strong> 你是天生的舞台明星！你的幽默和快乐能感染每一个人。不要害羞，大胆地向大家展示你的才艺吧！"
        }
    },
    "ENFP": {
        name: "闪光小精灵",
        desc: "你热情、有创意，对世界充满好奇，总能发现生活中的乐趣。",
        details: {
            traits: "<strong>性格特点：</strong> 充满激情、有创造力、乐观、善于鼓舞人心。",
            tips: "<strong>超能力小贴士：</strong> 你是“快乐魔法师”！你的热情和新点子总能让周围变得多姿多彩。多和朋友分享你的奇思妙想，一起创造更多快乐！"
        }
    },
    "ENTP": {
        name: "机智小发明家",
        desc: "你脑子转得飞快，点子多多，喜欢和别人辩论和交流新想法。",
        details: {
            traits: "<strong>性格特点：</strong> 聪明、有创意、喜欢辩论、反应快。",
            tips: "<strong>超能力小贴士：</strong> 你的大脑里住着一个“点子工厂”！多和大家讨论你的新奇想法，也许下一个改变世界的小发明就出自你手！"
        }
    },
    "ESTJ": {
        name: "可靠小队长",
        desc: "你有出色的组织能力，做事果断，是天生的领导者。",
        details: {
            traits: "<strong>性格特点：</strong> 有条理、果断、有责任心、爱管事。",
            tips: "<strong>超能力小贴士：</strong> 你是大家的“定心丸”！在团队活动中，你可以帮助大家制定计划，让事情进行得井井有条，带领大家取得胜利！"
        }
    },
    "ESFJ": {
        name: "贴心小主人",
        desc: "你热情好客，善于交际，总能让每个人都感到受欢迎。",
        details: {
            traits: "<strong>性格特点：</strong> 乐于助人、有同情心、爱社交、有责任感。",
            tips: "<strong>超能力小贴士：</strong> 你是“友谊大使”！你天生就知道如何关心和照顾别人，有你在的地方，总是充满了和谐与欢乐。"
        }
    },
    "ENFJ": {
        name: "引路小导师",
        desc: "你有感染力，能鼓励和引导他人，是大家的人生小导师。",
        details: {
            traits: "<strong>性格特点：</strong> 有魅力、善于鼓舞、有同理心、是天生的领导者。",
            tips: "<strong>超能力小贴士：</strong> 你是“梦想激励者”！你总能看到别人身上的闪光点，并鼓励他们变得更好。你的话语充满力量，能帮助朋友们找到自信！"
        }
    },
    "ENTJ": {
        name: "天生小领袖",
        desc: "你自信、有魄力，目标明确，能带领大家一起完成伟大的事情。",
        details: {
            traits: "<strong>性格特点：</strong> 自信、有决断力、有远见、是战略家。",
            tips: "<strong>超能力小贴士：</strong> 你是天生的“指挥官”！你总能看到大局，并带领大家朝着一个共同的目标前进。相信你的判断，勇敢地带领你的队伍吧！"
        }
    }
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
            <h1>${personality.name} <span class="personality-code">(${resultType})</span></h1>
            <p class="personality-desc">${personality.desc}</p>
            <div class="details-box">
                <p>${personality.details.traits}</p>
                <p>${personality.details.tips}</p>
            </div>
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