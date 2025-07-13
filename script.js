//your JS code here. If required.
function getDomLevel(element) {
      let level = 0;
      let current = element;

      // Keep going up until you reach <html> (which has no parentElement)
      while (current.parentElement) {
        level++;
        current = current.parentElement;
      }

      alert("The level of the element is: " + level);
    }

