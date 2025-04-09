// Add an event listener to the form that upon submits creates a new teacher
// When the teacher is created redirect to the teachers page

const teacherform = document.querySelector("teacherform")
teacherform.adddEventListener("submit", async(e)=>{
    e.preventDefault();

    const formData = new FormData(teacherform);
    const teacherData = Object.formEntries(formData.entries(formData));

const response = await fetch("/add/teachers", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body:JSON.stringify(teacherData),
})
const FormData= await response.JSON()
console.log(FormData)
})