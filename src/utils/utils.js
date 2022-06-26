import { NAO_CURSADO } from "../constants/courseStatus";

export function getPercent(number, total) {
    //Substring to returns in XX.XX format;
    return String(number * 100 / (total)).substring(0, 5);
}

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function isStudentNotStudiedCourseYet(userCourseStatus) {
    return String(userCourseStatus?.toUpperCase()) === NAO_CURSADO?.toUpperCase();
}