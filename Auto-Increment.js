const counters = document.querySelectorAll(".counter");
//After doing this we have got all tags with counter as class
//Assume it to be in an array form

counters.forEach((counter) => {
  console.log(counter); //just to check if counter is tracked or not
  counter.innerHTML = 0; //Putting/displaying 0 initially

  const updatecounter = () => {
    const targetCount = Number(counter.getAttribute("data-target"));
    //This will store in targetCount variable the target/ number we want to reach to/increment to
    //But it's of string type but to perform increment operation it should be number.So we add + sign infront/number()method.
    const startingcount = Number(counter.innerHTML);
    const incr = targetCount / 100;
    if (startingcount < targetCount) {
      counter.innerHTML = `${startingcount + incr}`;
      setTimeout(updatecounter, 15);
    } else {
      counter.innerHTML = targetCount;
    }
  };
  updatecounter();
});
