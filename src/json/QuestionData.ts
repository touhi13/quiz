export const multipleChoice = "multipleChoice";
export const fillInTheBlank = "fillInTheBlank";
export const trueFalse = "trueFalse";
export const followingMatch = "followingMatch";
export const multiSelect = "multiSelect";

export interface QuestionDetails {
    id: number,
    title: string,
    options: string[],
    matchAns?: string[],
    ans: string[],
    lang: string,
    type: string
}

export const questionData: QuestionDetails[] = [
    {
        id: 1,
        type: multipleChoice,
        title: "Which of the following keywords is used to define a variable in Javascript?",
        options: [
            "var", "let", "Both of them", "None of them"
        ],
        ans: ["Both of them"],
        lang: "JavaScript"
    },
    {
        id: 2,
        type: fillInTheBlank,
        title: "The __________ keyword is used to check whether the given property is valid or not in Javascript?",
        options: ["in", "is in", "exists", "lies"],
        ans: ["Single"],
        lang: "JavaScript"
    },
    {
        id: 3,
        type: multiSelect,
        title: "Which of the following methods can be used to display data in some form using Javascript?",
        options: [
            "document.write()", "console.log()", "getElementbyId()", "strigify()"
        ],
        ans: ["document.write()", "console.log()"],
        lang: "JavaScript"
    },
    {
        id: 4,
        type: followingMatch,
        title: "Match the following",
        options: [
            "Array", "Object"
        ],
        matchAns: ["[]", "{}"],
        ans: ["Array->[]", "Object->{}"],
        lang: "JavaScript"
    },
    {
        id: 5,
        type: trueFalse,
        title: "The ‘toLocateString()’ method in JS returns a localized string representation of an object.",
        options: [
            "true", "false",
        ],
        ans: ["true"],
        lang: "JavaScript"
    },
    {
        id: 6,
        type: multipleChoice,
        title: "Who is known as the father of PHP?",
        options: [
            "Drek Kolkevi", "List Barely", "Rasmus Lerdrof", "None of the above"
        ],
        ans: ["Rasmus Lerdrof"],
        lang: "PHP"
    },
    {
        id: 7,
        type: fillInTheBlank,
        title: "PHP stands for ___________ ?",
        options: [
            "Hypertext Preprocessor", "Pretext Hypertext Preprocessor", "Personal Home Processor", "None of the above"
        ],
        ans: ["Hypertext Preprocessor"],
        lang: "PHP"
    },
    {
        id: 8,
        type: multiSelect,
        title: "Which of the following is correct to add a comment in php?",
        options: [
            "& …… &", "// ……", "/* …… */", "None of the above"
        ],
        ans: ["// ……", "/* …… */"],
        lang: "PHP"
    },
    {
        id: 9,
        type: trueFalse,
        title: " The strpos() function is used to search for a character/text in a string",
        options: [
            "true", "false",
        ],
        ans: ["true"],
        lang: "PHP"
    },
    {
        id: 10,
        type: multipleChoice,
        title: "Which PHP function determines the last access time of a file?",
        options: [
            "filetime()", "fileatime()", "filectime()", "None of the above"
        ],
        ans: ["fileatime()"],
        lang: "PHP"
    }
];
export const getQbyLang = (lang: string): QuestionDetails[] => {
    return questionData.filter(item => item.lang.toLowerCase() === lang?.toLowerCase());
}

export const getQbyId = (id: number) => {
    return questionData.filter(item => item.id === id);
}