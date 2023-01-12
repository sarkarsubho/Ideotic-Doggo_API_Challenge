// getting the data from localstorage and return according to the key
function loadData(key) {
    try {
      let data = localStorage.getItem(key);
      data = JSON.parse(data);
      return data;
    } catch {
      return undefined;
    }
  }
  
  // taking key values and sav it to localstorage
  function saveData(key,data){
      localStorage.setItem(key,JSON.stringify(data));
     
  }
//  taking the key and removing the data from localStorage.
  function removeData(key){
     localStorage.removeItem(key);
  }
  
  export {loadData,saveData,removeData}