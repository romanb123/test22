$(document).ready(function () {
    // get all the countries:
    $(".allcountries").click(function () {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/all", success: function (result) {
                $(".row").html("");
                console.log(result);
                result.forEach(element => {
                    console.log(element);
                    $(".row").append(`
            <div class="col-lg-3">
        <!-- card -->
        <div class="card" style="width:100%">
          <div class="card-body">
            <h4 class="card-title">${element.name}</h4>
            <p class="card-text">top level domain:${element.topLevelDomain}</p>
            <p class="card-text">capital:${element.capital}</p>
            <p class="card-text"><span class="currencies">currencies:</span><br>
            code:${element.currencies[0].code}<br>name:${element.currencies[0].name}<br>symbol:${element.currencies[0].symbol}<br></p>      
          </div>
          <img class="card-img-bottom" src="${element.flag}" alt="Card image" style="width:100%;height:150px">
        </div>
      </div>            
            `)
                });
            }
        });
    });

    //select country by writing name
    $("#country").keyup(function () {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/"+$("#country").val(), success: function (result) {
                console.log(result);
                $(".row").html("");
                result.forEach(element => {
                    $(".row").append(`
                <div class="col-lg-3">
            <!-- card -->
            <div class="card" style="width:100%">
              <div class="card-body">
                <h4 class="card-title">${element.name}</h4>
                <p class="card-text">top level domain:${element.topLevelDomain}</p>
                <p class="card-text">capital:${element.capital}</p>
                <p class="card-text"><span class="currencies">currencies:</span><br>
                code:${element.currencies[0].code}<br>name:${element.currencies[0].name}<br>symbol:${element.currencies[0].symbol}<br></p>      
              </div>
              <img class="card-img-bottom" src="${element.flag}" alt="Card image" style="width:100%;height:150px">
            </div>
          </div>            
                `)
                });
            }
        });
    });
});
