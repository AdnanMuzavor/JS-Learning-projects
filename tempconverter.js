{
  /* <input type="number" name="temp" id="temp" /> */
}

//On submit i.e when submit button is clicked we have call a method which will auto matically get called when our form is submitted.
const calculateTemp = () => {
  //getting referce of input through id so as to get it's value
  const temp = document.getElementById("temp").value;
  console.log(temp);

  //   <select name="temp-diff" id="temp_diff">
  //   <option value="cel">Celcius</option>
  //   <option value="fah">Fahrenheit</option>
  //   </select>
  //getting reference of select tag so that we can get which option among two is selected

  const tempselected = document.getElementById("temp_diff");
  const selectedoption = temp_diff.options[tempselected.selectedIndex].value;
  //this will store in 'selectedoption' variable from the options in select tag whose id is temp_diff, the options provided to select tag in the form of array and value at index of selected option, will be returned
  console.log(selectedoption);

  let result;

  const CeltoFah = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };

  const FahtoCel = (fah) => {
    let celcius = Math.round(((fah - 32) * 5) / 9);
    return celcius;
  };

  {
    /* <span id="resultcontainer"></span> */
  }

  if (selectedoption == "cel") {
    console.log("cel");
    result = CeltoFah(temp);
    document.getElementById("resultcontainer").innerHTML = `${result}       Fahrenheit`;
  }
   else if (selectedoption == "fah") {
    console.log("far");
    result = FahtoCel(temp);
    document.getElementById("resultcontainer").innerHTML = `${result} Celcius`;
  }
};
