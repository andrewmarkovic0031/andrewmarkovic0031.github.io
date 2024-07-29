function pageSetup() {
  setupFilters();
}

function setupUsernameFilter() {
  var select = document.getElementById("usernameFilter");

  table = document.getElementById("mainList");
  tr = table.getElementsByTagName("tr");
  usernames = [];
  for (i=0; i<tr.length; i++) {
    username = tr[i].getElementsByTagName("td")[0];
    if (username) {
      username = username.innerHTML;
      usernames.push(username);   
    }
  }

  usernames = [...new Set(usernames)].sort();

  for (i=0; i<usernames.length; i++) {
    var opt = document.createElement('option');
    opt.value = usernames[i];
    opt.innerHTML = usernames[i];
    select.appendChild(opt);
  }
}

function setupChampionFilter() {
  var select = document.getElementById("championFilter");

  table = document.getElementById("mainList");
  tr = table.getElementsByTagName("tr");
  champions = [];
  for (i=0; i<tr.length; i++) {
    champion = tr[i].getElementsByTagName("td")[1];
    if (champion) {
      champion = champion.innerHTML;
      champions.push(champion);   
    }
  }

  champions = [...new Set(champions)].sort();

  for (i=0; i<champions.length; i++) {
    var opt = document.createElement('option');
    opt.value = champions[i];
    opt.innerHTML = champions[i];
    select.appendChild(opt);
  }
}

function setupFilters() {
  setupUsernameFilter();
  setupChampionFilter();
}


function filterRows() {

  usernameInput = document.getElementById("usernameFilter");
  usernameSelected = usernameInput.value.toUpperCase();

  championInput = document.getElementById("championFilter")
  championSelected = championInput.value.toUpperCase();

  winInput = document.getElementById("winFilter");
  winSelected = winInput.value;


  table = document.getElementById("mainList");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td0 = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td9 = tr[i].getElementsByTagName("td")[9];
    
    if (td0 && td1 && td9) {
      console.log(td9.innerHTML, winSelected);
      if (((td0.innerHTML.toUpperCase().indexOf(usernameSelected) > -1) || (usernameSelected === "ALL")) && 
          ((td1.innerHTML.toUpperCase().indexOf(championSelected) > -1) || (championSelected === "ALL")) &&
          ((td9.innerHTML === "True" && winSelected === "Win" ) || (td9.innerHTML === "False" && winSelected === "Loss") || (winSelected === "All"))){
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}