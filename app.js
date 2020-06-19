let intro = {
    name: "Iman Mohi",
    Career: "Computer Science Student",
    Description: "My biggest passions are people and experiences"
};
//introductory section
console.log("Name: "+ intro.name.toUpperCase() + "\n");
console.log("Career: "+ intro.Career + "\n");
console.log("Description: "+ intro.Description + "\n\n");

console.log(" My Interests: \n");
function interests(interest)
{
    console.log(" * " + interest+ "\n");
}
interests("Dance");
interests("Public Speaking (Poetry & Debate) ");
interests("Real incident based TV Series");
interests("Technical To-Do Videos");
interests("* Traveling! ");

console.log(" \n My Previous Experiences: \n");
//the function is for displaying previous positions
function displayPosition(companyName, position, job)
{
    console.log(" * "+ position+ " at "+ companyName+ " - "+ job);
}

displayPosition("GitHub", "Student Developer", "Developed skills & projects and taught my peers. \n");
displayPosition("JP Morgan & Chase", "Virtual Software Developer Intern", "Analysed financial data and visualised it. \n");
displayPosition("Wilfred School", "Volunteer Guest teacher", "Taught middle school children the basics of computing and programming. \n");

console.log(" \n My Skills: \n");
function displaySkills(name, cool)
{
    if(cool==true)
    {
        console.log(' * BAM: '+ name);
    } else {
        console.log(" * " +name);
    }
}

displaySkills("Git", false);
displaySkills("C", false);
displaySkills("Python", true);
displaySkills("Javascript", false);
displaySkills("CSS", true);
displaySkills("Negotiation", true);
displaySkills("Chicken Rolls chef", true);