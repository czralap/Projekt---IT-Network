let vstup = " C++ je [kolikrat] krat lepsi! ";
let vystup = vstup.trim().toLowerCase().replace("c++","Javascript");
document.write(vystup.startsWith("JavaScript"));
document.write(vystup.includes('krat'));
document.write(vystup.replace("[kolikrat]", vzstup.length*3));


