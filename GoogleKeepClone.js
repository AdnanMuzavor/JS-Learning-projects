const addButton = document.querySelector("#add");

const addNewNote = (text = "") => {
  const note = document.createElement("div"); //creating a tag div, note represents div tag and can be used to dd classes in t5he div tag

  note.classList.add("note"); //Adding class to div tag using it's refernce i.e note

  const htmlData = ` <div class="operation">
       <button class="edit" ><i class="fas fa-edit"></i></button>
       <button class="delete" ><i class="fas fa-trash-alt"></i></button>
   </div>
   <div class="main ${text ? "" : "hidden"}"></div>
   <textarea class="${text ? "hidden" : ""}"></textarea>`;

  note.insertAdjacentHTML("afterbegin", htmlData); //Adding this html to div tag

  //getting refernces of each of the buttons in this html
  //we use note instead of doc because this htlis part of note which represents div tag

  const editButton = note.querySelector(".edit");
  const delButton = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main"); //rpresents div tag with class 'main'
  const textarea = note.querySelector("textarea"); //refernce captured directly through text name

  //Deleting the note box

  delButton.addEventListener("click", () => {
    note.remove(); //simply removes the div tag(div being represented by variable named as note)
    updateLSData();
  });
  //provision for toggling using edit button
  textarea.value = text; //value entered in textarea will be stored as text
  mainDiv.innerHTML = text; //Adding in div tag eith class main whose reference is MainDiv, text entered in textarea, since now text is not null the class hidden will be removed from div tag and textarea will be hidden so that editing is not allowed, this is made possible by toggling classes

  editButton.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });

  const updateLSData = () => {
    const textAreaData = document.querySelectorAll("textarea"); //instance of text area hrough it's tag, queryselectorall used as many textarea tags will be created and if queryselector is used only first tag will be selected.
    const notes = [];
    console.log(textAreaData);

    textAreaData.forEach((note) => {
      return notes.push(note.value); //note represents each textarea and notes represents our array, for each textarea tag epresented by variable note, its value represented by note.value will be pushed into array notes
    });

    console.log(notes);

    localStorage.setItem("notes", JSON.stringify(notes));
    //.setItem is used to add the array named notes by converting it into string with each note given key 'notes'
  };

  textarea.addEventListener("change", (event) => {
    const value = event.target.value; //event refers to chnage in textarea content
    //value refers rto content entered in text area
    console.log(value);
    mainDiv.innerHTML = value;
    updateLSData();
  });
  document.body.appendChild(note); //appennds/adds at last the div tag

  console.log(note);
};

const notes = JSON.parse(localStorage.getItem("notes"));
//to get the notes array stored in local storage by stringifying, now converting it back to js object using JSON.parse

if (notes) {
  notes.forEach((note) => addNewNote(note));
}
addButton.addEventListener("click", () => {
  console.log("Add button clciked");
  addNewNote();
});
