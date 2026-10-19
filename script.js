
function showMemberCard(name, age, email, phonenumber, membershipplan) {
    let sections = ["Science", "History", "Technology"];

    console.log("Library Sections:");

    let sectionOutput = "<h3>Library Sections</h3>";

    for (let i = 0; i < sections.length; i++) {
        console.log(sections[i]);
        sectionOutput += sections[i] + "<br>";
    }

    document.getElementById("output").innerHTML =
        "<h2>Membership Card</h2>" +
        "Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
        "Email: " + email + "<br>" +
        "Phone Number: " + phonenumber + "<br>" +
        "Category: " + (age < 13 ? "Junior" : "Regular") + "<br>" +
        "Membership Plan: " + membershipplan + "<br>" +
        "Membership Fee: " +
        (membershipplan == "Basic" ? 500 :
        membershipplan == "Silver" ? 1000 : 1500) +
        "<br>" + sectionOutput;
}

document.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let phonenumber = document.getElementById("phonenumber").value;

    let membershipplan = document.querySelector(
        'input[name="membershipplan"]:checked'
    );

    membershipplan = membershipplan.id == "p1" ? "Basic" :
                     membershipplan.id == "p2" ? "Silver" : "Gold";

    showMemberCard(name, age, email, phonenumber, membershipplan);
});
