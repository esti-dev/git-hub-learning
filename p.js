const questionsArray = [
    { ques: "מי היה הנשיא הראשון של ארה\"ב?", options: ["ג'ורג' וושינגטון", "אברהם לינקולן", "דונלד טראמפ", "ברק אובמה"] },
    { ques: "מה צבע השמיים ביום בהיר?", options: ["כחול", "ירוק", "אדום", "צהוב"] },
    { ques: "כמה רגליים יש לעכביש?", options: ["8", "6", "4", "10"] },
    { ques: "מהו היסוד הכימי הנפוץ ביותר ביקום?", options: ["מימן", "חמצן", "פחמן", "חנקן"] },
    { ques: "איזו פלנטה מכונה 'כוכב הלכת האדום'?", options: ["מאדים", "נוגה", "צדק", "שבתאי"] },
    { ques: "כמה ימים יש בשנה מעוברת?", options: ["366", "365", "364", "360"] },
    { ques: "מהו בעל החיים היבשתי המהיר בעולם?", options: ["ברדלס (צ'יטה)", "אריה", "סוס", "צבי"] },
    { ques: "באיזו יבשת נמצא מדבר סהרה?", options: ["אפריקה", "אסיה", "אוסטרליה", "דרום אמריקה"] },
    { ques: "מהי בירת מדינת צרפת?", options: ["פריז", "לונדון", "ברלין", "רומא"] },
    { ques: "כמה שיניים יש לאדם מבוגר רגיל?", options: ["32", "28", "30", "36"] },
    { ques: "מהו האוקיינוס הגדול ביותר בעולם?", options: ["השקט", "האטלנטי", "ההודי", "הארקטי"] },
    { ques: "באיזו שנה התקיימה הנחיתה הראשונה על הירח?", options: ["1969", "1965", "1972", "1959"] },
    { ques: "איזה גז פולטים עצים בתהליך הפוטוסינתזה?", options: ["חמצן", "פחמן דו-חמצני", "חנקן", "מימן"] },
    { ques: "מהו ההר הגבוה ביותר בעולם?", options: ["אוורסט", "קילימנג'רו", "מונבלאן", "אנאפורנה"] },
    { ques: "מהו שמם של הירחים הגדולים של מאדים?", options: ["פובוס ודימוס", "איו ואירופה", "טיטאן ואנקלדוס", "גנימד וקליסטו"] },
    { ques: "כמה מטרים יש בקילומטר אחד?", options: ["1000", "100", "10000", "500"] },
    { ques: "מהו המרכיב העיקרי בזכוכית?", options: ["חול (סיליקה)", "פלסטיק", "חרסית", "ברזל"] },
    { ques: "איזה כוכב לכת הוא הקרוב ביותר לשמש?", options: ["חמה (מרקורי)", "נוגה", "מאדים", "ארץ"] },
    { ques: "מהי בירת יפן?", options: ["טוקיו", "קיוטו", "אוסקה", "הירושימה"] },
    { ques: "איזו מדינה היא הגדולה ביותר בעולם מבחינת שטח?", options: ["רוסיה", "קנדה", "סין", "ארצות הברית"] },
    { ques: "מי גילה את כוח הכבידה לפי האגדה?", options: ["אייזק ניוטון", "אלברט איינשטיין", "גלילאו גליליי", "תומאס אדיסון"] },
    { ques: "איזה בעל חיים מסוגל לשנות את צבע עורו להסוואה?", options: ["זיקית", "נחש", "צב", "סרטן"] },
    { ques: "מהו הנהר הארוך ביותר בעולם?", options: ["הנילוס", "האמזונאס", "המיסיסיפי", "היאנג צี้"] },
    { ques: "מהו סמל היסוד הכימי של זהב?", options: ["Au", "Ag", "Fe", "Go"] },
    { ques: "כמה יבשות יש בעולם?", options: ["7", "6", "5", "8"] },
    { ques: "באיזו עיר נמצא מגדל אייפל?", options: ["פריז", "רומא", "מדריד", "ונציה"] },
    { ques: "מהי מהירות האור בקירוב בקילומטר לשנייה?", options: ["300000", "150000", "1000000", "3000"] },
    { ques: "מהי טמפרטורת הרתיחה של מים במעלות צלזיוס?", options: ["100", "90", "120", "212"] },
    { ques: "מהי בירת איטליה?", options: ["רומא", "מילאנו", "נאפולי", "פלורנס"] },
    { ques: "איזה חוש מפותח ביותר אצל עטלפים לצורך ניווט בחושך?", options: ["שמיעה (אקולוקציה)", "ראייה", "ריח", "מישוש"] },
    { ques: "כמה חודשים יש בשנה לועזית?", options: ["12", "10", "14", "13"] },
    { ques: "איזה סוג בעל חיים הוא הלווייתן?", options: ["יונק", "דג", "זוחל", "דו-חיים"] },
    { ques: "מהו כוכב הלכת הגדול ביותר במערכת השמש?", options: ["צדק (יופיטר)", "שבתאי", "אורנוס", "נפטון"] },
    { ques: "מהו המאכל האהוב על הפנדה הגדולה?", options: ["במבוק", "אקליפטוס", "דבש", "דגים"] },
    { ques: "כמה מעלות יש בסך הכל במעגל?", options: ["360", "180", "90", "540"] },
    { ques: "איזו יבשת היא הקטנה ביותר בשטחה?", options: ["אוסטרליה", "אירופה", "אנטארקטיקה", "דרום אמריקה"] },
    { ques: "מהו שמו של המכשיר המשמש למדידת טמפרטורה?", options: ["מד חום (תרמומטר)", "ברומטר", "סייסמוגרף", "מצפן"] },
    { ques: "באיזו מדינה נמצא המבנה 'הטאג מהאל'?", options: ["הודו", "סין", "מצרים", "אינדונזיה"] },
    { ques: "איזה יסוד כימי מסומן באות C?", options: ["פחמן", "סידן", "כלור", "נחושת"] },
    { ques: "כמה רגליים יש לחרק רגיל?", options: ["6", "8", "4", "10"] },
    { ques: "מי המציא את נורת החשמל המסחרית?", options: ["תומאס אדיסון", "ניקולה טסלה", "אלברט איינשטיין", "אלכסנדר גרהם בל"] },
    { ques: "מהי בירת ספרד?", options: ["מדריד", "ברצלונה", "סביליה", "ולנסיה"] },
    { ques: "איזה כוכב לכת ידוע בטבעות הבולטות שלו?", options: ["שבתאי", "צדק", "מאדים", "נוגה"] },
    { ques: "כמה שעות יש ביממה אחת?", options: ["24", "12", "48", "20"] },
    { ques: "מהו החומר הקשה ביותר בטבע?", options: ["יהלום", "ברזל", "טיטניום", "גרפיט"] },
    { ques: "באיזו עיר נמצא הכותל המערבי?", options: ["ירושלים", "תל אביב", "חיפה", "באר שבע"] },
    { ques: "כמה ימים יש בשבוע?", options: ["7", "6", "5", "8"] }
];

const loginScreen = document.querySelector("#loginScreen");
const loginUser = document.querySelector("#loginUser");
const loginPass = document.querySelector("#loginPass");
const loginActionBtn = document.querySelector("#loginActionBtn");
const goToRegister = document.querySelector("#goToRegister");

const registerScreen = document.querySelector("#registerScreen");
const regUser = document.querySelector("#regUser");
const regPass = document.querySelector("#regPass");
const regPassConfirm = document.querySelector("#regPassConfirm");
const registerActionBtn = document.querySelector("#registerActionBtn");
const goToLogin = document.querySelector("#goToLogin");

const lobbyScreen = document.querySelector("#lobbyScreen");
const welcomeUser = document.querySelector("#welcomeUser");
const openGameCard = document.querySelector("#openGameCard");
const userStatsText = document.querySelector("#userStatsText");

const chooseDiff = document.querySelector("#chooseDiff");
const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");

const gameMain = document.querySelector("#gameMain");
const lab = document.querySelector("#lab");
const formula = document.querySelector(".formula");
const lives = document.querySelector(".lives");
const questionText = document.querySelector("#questionText");
const ans1 = document.querySelector("#ans1");
const ans2 = document.querySelector("#ans2");
const ans3 = document.querySelector("#ans3");
const ans4 = document.querySelector("#ans4");

const backToLobbyBtn = document.querySelector("#backToLobbyBtn");
const logoutBtn = document.querySelector("#logoutBtn");

let currentUser = null;
let userStats = { gamesCount: 0, maxWins: 0, password: "" };
const places = [0, 0, 0, 0];
let level = 0;        
let currentStep = 0;  
let currentLives = 0; 
let currentRandQues = null; 

goToRegister.addEventListener("click", () => {
    loginScreen.style.display = "none";
    registerScreen.style.display = "flex";
});

goToLogin.addEventListener("click", () => {
    registerScreen.style.display = "none";
    loginScreen.style.display = "flex";
});

registerActionBtn.addEventListener("click", () => {
    const uName = regUser.value.trim();
    const uPass = regPass.value.trim();
    const uPassConf = regPassConfirm.value.trim();

    if (!uName || !uPass || !uPassConf) {
        return alert("אנא מלא את כל השדות.");
    }
    if (uPass !== uPassConf) {
        return alert("הסיסמאות אינן תואמות! נא לבדוק שוב את הסיסמה.");
    }

    const existingUser = localStorage.getItem(`lab_user_${uName}`);
    if (existingUser) {
        return alert("שם משתמש זה כבר תפוס במערכת. בחר שם ייחודי אחר או התחבר.");
    }

    const newUserStats = { gamesCount: 0, maxWins: 0, password: uPass };
    localStorage.setItem(`lab_user_${uName}`, JSON.stringify(newUserStats));
    
    alert("ההרשמה בוצעה בהצלחה! כעת תוכל להתחבר.");
    registerScreen.style.display = "none";
    loginScreen.style.display = "flex";
});

loginActionBtn.addEventListener("click", () => {
    const uName = loginUser.value.trim();
    const uPass = loginPass.value.trim();

    if (!uName || !uPass) {
        return alert("אנא הכנס שם משתמש וסיסמה.");
    }

    const savedData = localStorage.getItem(`lab_user_${uName}`);
    if (!savedData) {
        return alert("שם משתמש לא קיים במערכת. נא להירשם תחילה.");
    }

    const parsedData = JSON.parse(savedData);
    if (parsedData.password !== uPass) {
        return alert("סיסמה שגויה!");
    }

    currentUser = uName;
    userStats = parsedData;

    loginScreen.style.display = "none";
    lobbyScreen.style.display = "flex";
    backToLobbyBtn.style.display = "none";
    logoutBtn.style.display = "block";
    welcomeUser.textContent = `שלום, ${currentUser}!`;
    userStatsText.textContent = `סך משחקים: ${userStats.gamesCount} | שיא הצלחות בשלבים: ${userStats.maxWins}`;
});

openGameCard.addEventListener("click", () => {
    userStats.gamesCount++;
    saveUserData();
    lobbyScreen.style.display = "none";
    chooseDiff.style.display = "flex";
    backToLobbyBtn.style.display = "block";
});

const saveUserData = () => {
    localStorage.setItem(`lab_user_${currentUser}`, JSON.stringify(userStats));
};

easy.addEventListener("click", () => { level = 3; startGame(); });
medium.addEventListener("click", () => { level = 4; startGame(); });
hard.addEventListener("click", () => { level = 5; startGame(); });

const updateLabVisual = () => {
    const fillPercent = (currentStep / level) * 100;
    lab.innerHTML = `<div style="width: 100%; height: ${fillPercent}%; background: linear-gradient(to top, #d4af37, #f3e5ab); transition: height 0.5s ease; position: absolute; bottom: 0; left: 0;"></div>`;
};

const doQuestion = () => {
    if (currentStep >= level) {
        finish(true);
        return;
    }
    
    formula.textContent = `התקדמות נוסחה (${currentStep}/${level} שלבים)`;
    currentRandQues = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    questionText.textContent = currentRandQues.ques;
    
    places[0] = Math.floor(Math.random() * 4);
    places[1] = Math.floor(Math.random() * 4);
    while (places[1] === places[0]) { places[1] = Math.floor(Math.random() * 4); }
    places[2] = Math.floor(Math.random() * 4);
    while (places[1] === places[2] || places[0] === places[2]) { places[2] = Math.floor(Math.random() * 4); }
    places[3] = Math.floor(Math.random() * 4);
    while (places[1] === places[3] || places[0] === places[3] || places[2] === places[3]) { places[3] = Math.floor(Math.random() * 4); }
    
    ans1.textContent = currentRandQues.options[places[0]];
    ans2.textContent = currentRandQues.options[places[1]];
    ans3.textContent = currentRandQues.options[places[2]];
    ans4.textContent = currentRandQues.options[places[3]];
};

const handleAnswer = (selectedPlaceIndex) => {
    const chosenAnswerText = currentRandQues.options[places[selectedPlaceIndex]];
    const correctAnswerText = currentRandQues.options[0];
    
    if (chosenAnswerText === correctAnswerText) {
        currentStep++;
        if (currentStep > userStats.maxWins) {
            userStats.maxWins = currentStep;
            saveUserData();
        }
        updateLabVisual();
        doQuestion();
    } else {
        currentLives--;
        updateLivesDisplay();
        
        if (currentLives <= 0) {
            triggerExplosion();
        }
    }
};

const updateLivesDisplay = () => {
    lives.textContent = "";
    for (let i = 0; i < currentLives; i++) {
        lives.textContent += "🧪";
    }
};

ans1.addEventListener("click", () => handleAnswer(0));
ans2.addEventListener("click", () => handleAnswer(1));
ans3.addEventListener("click", () => handleAnswer(2));
ans4.addEventListener("click", () => handleAnswer(3));

const startGame = () => {
    chooseDiff.style.display = "none";
    gameMain.style.display = "flex";
    
    ans1.style.display = "block";
    ans2.style.display = "block";
    ans3.style.display = "block";
    ans4.style.display = "block";
    
    currentStep = 0;
    currentLives = Math.ceil(level / 2); 
    updateLivesDisplay();
    
    updateLabVisual();
    doQuestion();
};

const triggerExplosion = () => {
    questionText.textContent = "💥 בוום! עוצמת החומרים הייתה גבוהה מדי והמעבדה התפוצצה! 💥";
    formula.textContent = "הניסוי נכשל!";
    ans1.style.display = "none";
    ans2.style.display = "none";
    ans3.style.display = "none";
    ans4.style.display = "none";
    
    gameMain.classList.add("exploding");
    
    setTimeout(() => {
        gameMain.classList.remove("exploding");
        gameMain.style.display = "none";
        lobbyScreen.style.display = "flex";
        backToLobbyBtn.style.display = "none";
        userStatsText.textContent = `סך משחקים: ${userStats.gamesCount} | שיא הצלחות בשלבים: ${userStats.maxWins}`;
    }, 4000);
};

const finish = (isSuccess) => {
    if (isSuccess) {
        questionText.textContent = "✨ מדהים! הנוסחה פותחה בהצלחה מלאה והתרופה נוצרה במעבדה! ✨";
        formula.textContent = `הושלמו ${level}/${level} שלבים!`;
        gameMain.classList.add("success-flash");
    }
    ans1.style.display = "none";
    ans2.style.display = "none";
    ans3.style.display = "none";
    ans4.style.display = "none";
    
    setTimeout(() => {
        gameMain.classList.remove("success-flash");
        gameMain.style.display = "none";
        lobbyScreen.style.display = "flex";
        backToLobbyBtn.style.display = "none";
        userStatsText.textContent = `סך משחקים: ${userStats.gamesCount} | שיא הצלחות בשלבים: ${userStats.maxWins}`;
    }, 4000);
};

backToLobbyBtn.addEventListener("click", () => {
    gameMain.style.display = "none";
    chooseDiff.style.display = "none";
    lobbyScreen.style.display = "flex";
    backToLobbyBtn.style.display = "none";
    userStatsText.textContent = `סך משחקים: ${userStats.gamesCount} | שיא הצלחות בשלבים: ${userStats.maxWins}`;
});

logoutBtn.addEventListener("click", () => {
    gameMain.style.display = "none";
    chooseDiff.style.display = "none";
    lobbyScreen.style.display = "none";
    registerScreen.style.display = "none";
    loginScreen.style.display = "flex";
    backToLobbyBtn.style.display = "none";
    logoutBtn.style.display = "none";
    currentUser = null;
    loginUser.value = "";
    loginPass.value = "";
});