function calculateResult() {

    const name = document.getElementById("studentName").value.trim();

    const tamil = Number(document.getElementById("tamil").value);
    const english = Number(document.getElementById("english").value);
    const maths = Number(document.getElementById("maths").value);
    const science = Number(document.getElementById("science").value);
    const computer = Number(document.getElementById("computer").value);

    if (name === "") {
        alert("Please enter student name.");
        return;
    }

    const marks = [tamil, english, maths, science, computer];

    if (marks.some(mark => mark < 0 || mark > 100 || isNaN(mark))) {
        alert("Please enter valid marks between 0 and 100.");
        return;
    }

    const total = tamil + english + maths + science + computer;
    const average = total / 5;
    const percentage = (total / 500) * 100;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    const passed = marks.every(mark => mark >= 35);

    let result;

    if (passed) {
        result = "PASS ✅";
    } else {
        result = "FAIL ❌";
    }

    const subjects = {
        "Tamil": tamil,
        "English": english,
        "Mathematics": maths,
        "Science": science,
        "Computer Science": computer
    };

    let highestSubject = "";
    let lowestSubject = "";

    let highestMark = -1;
    let lowestMark = 101;

    for (const subject in subjects) {

        if (subjects[subject] > highestMark) {
            highestMark = subjects[subject];
            highestSubject = subject;
        }

        if (subjects[subject] < lowestMark) {
            lowestMark = subjects[subject];
            lowestSubject = subject;
        }
    }

    let performance;

    if (percentage >= 90) {
        performance = "🌟 Excellent Performance";
    } else if (percentage >= 75) {
        performance = "👏 Very Good Performance";
    } else if (percentage >= 60) {
        performance = "👍 Good Performance";
    } else if (percentage >= 50) {
        performance = "📚 Average Performance";
    } else {
        performance = "⚠️ Needs Improvement";
    }

    let suggestion;

    if (lowestMark < 50) {
        suggestion =
            "Focus more on " + lowestSubject +
            ". Regular practice can improve your performance.";
    } else if (percentage >= 85) {
        suggestion =
            "Excellent work! Maintain your consistency and keep improving.";
    } else {
        suggestion =
            "Good effort! Focus on your weaker subjects to improve your overall percentage.";
    }

    document.getElementById("displayName").textContent = name;

    document.getElementById("totalMarks").textContent =
        total + " / 500";

    document.getElementById("average").textContent =
        average.toFixed(2);

    document.getElementById("percentage").textContent =
        percentage.toFixed(2) + "%";

    document.getElementById("grade").textContent = grade;

    document.getElementById("resultStatus").textContent = result;

    document.getElementById("performanceLevel").textContent =
        performance;

    document.getElementById("highestMark").textContent =
        highestSubject + " - " + highestMark;

    document.getElementById("lowestMark").textContent =
        lowestSubject + " - " + lowestMark;

    document.getElementById("suggestionText").textContent =
        suggestion;

    document.getElementById("resultSection").style.display = "block";

    document.getElementById("resultSection").scrollIntoView({
        behavior: "smooth"
    });
}