function GoogleCallback(func, data){
  
    // console.log('data', data);
    window[func](data);
}

$(function() {

	var $searchForm = $('#searchForm');
	var $text = $('#field').val();
	// $("#results").empty();

	var $ajaxSearch = function () {

		var $text = $('#field').val();
		var url = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' + $text + '&callback=GoogleCallback&context=?';

		$.ajax({
			url      : url,
	    	type     :"GET",
	    	dataType : 'jsonp',
	    	success  :function (data) {
	    		var ul = document.createElement("ul");
	    		$("#searchResults").empty();
	    		if ($text) {
	    			$("#searchResults").append("<p class='totalSearch'>Results for <b>" + '<span>' + $text + '</span>' + "</b></p>");
	    			
	    		} else {
	    			$("#searchResults").append("<p class='totalSearch'>No matching pages</p>");
	    		}
	    		
				$.each(data.results, function(i, val){
					var li = document.createElement("li");
			        li.innerHTML = '<a href="'+val.url+'" title="' + val.url + '" target="_blank">' + val.title + '<br/>' + val.visibleUrl + "</a> - " + "<p>" + val.content +  "</p>";
			        ul.appendChild(li);
		    	$('#results').html(ul);

	    	});

			}
	    }); 
	}

	$searchForm.submit(function(e) {

    e.preventDefault();

    $ajaxSearch(0);
	
	});

	$("#field").keyup(function() {
		$("#x").fadeIn();
		if ($.trim($("#field").val()) == "") {
			$("#x").fadeOut();
		}
	});

	$("#x").click(function() {
		$("#field").val("");
		$(this).hide();
		$("#results").empty();
		$("#searchResults").empty();
	});
});

// __proto__

var Human = {
    name: 'Kolya',
    age: 37,
    sex: 'male',
    height: 180,
    weight: 105
};

var Worker = {
    job: 'AgroTech',
    salary: 15000,
    toWork: function() {
        alert('Where my machine?');
    }
};

var Student = {
    courses: 'GoIT',
    payment: 300,
    watchTV: function() {
        alert('Where the end?');
    }
};

    Worker.__proto__ = Human;
    Student.__proto__ = Human;

var Marina = Object.create(Worker, {
    name  : {value: 'Marina'},
    salary: {value: 1500},
    age   : {value: 31},
});

var Nikita = Object.create(Student);
    Nikita.name = 'Nikita';
    Nikita.age = 20;
    Nikita.weight = 63;

console.log('Human ', Human);
console.log('Worker ', Worker);
console.log('Student ', Student);
console.log('New Worker is', Marina.name + ', she is ' + Marina.age + ' years old and she works in ' + Marina.job + ', receives ' + Marina.salary +' $/month');
console.log('There is a student. ', Nikita.name + ' - smart student. He is ' + Nikita.age + ', he studies at the ' + Nikita.courses + ', he will be a programmer!!!');



