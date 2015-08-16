var myApp = angular.module('my_app', []);



/*

myApp.controller('ctrl_1', ['$scope', function($scope){
$scope.entries= [];
$scope.showingArray=false;

$scope.saver= function(){
    $scope.entries.push({
        "name": $scope.myEntry
    });
    $scope.showingArray=true;
    $scope.myEntry="";
};

}]);

myApp.config(['$routeProvider', function($routeProvider){
$routeProvider.when('/home', {
        templateUrl:'file1.html',
        controller:'ctrl_1'}
    ).
    when('/page2',{
        templateUrl:'file2.html',
        controller:'ctrl_2'}
    ).
    otherwise({
        redirectTo:'/home'})
}]);

*/

/*

myApp.controller('ctrl_1', ['$scope', function($scope){

$scope.topics=['Abstract', 'Publication', 'Inventor', 
'Language', 'Source', 'Priority'];

}]);

myApp.controller('ctrl_2', ['$scope', function($scope){

}]);

myApp.config(['$routeProvider', function($routeProvider){
$routeProvider.when('/home',{
    templateUrl:'file1.html',
    controller:'ctrl_1'
}).
when('/page2',{
    templateUrl:'file2.html',
    controller:'ctrl_2'
}).
otherwise({redirectTo:'/home'})
}]);

*/

/*
myApp.controller('ctrl_1', ['$scope', '$http', function($scope, $http) {
    $scope.nameInput = "Then";
    $scope.positionInput = "Doo";
    $scope.ful = function() {
        return $scope.nameInput + " " + $scope.positionInput;
    }

}]);

myApp.controller('ctrl_2', ['$scope', function($scope){


}]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/home', {
        templateUrl : 'file1.html',
        controller : 'ctrl_1'
    }).when('/page2', {
        templateUrl : 'file2.html',
        controller : 'ctrl_2'
    }).when('/page3', {
        templateUrl : 'file3.html',
        controller : 'ctrl_3'
    }).when('/page4', {
        templateUrl : 'file4.html',
        controller : 'ctrl_4'
    })
    .otherwise({
        redirectTo : '/home'
    });
}]);
*/

    
/*
    $scope.nextButton=function()
    {
        $scope.results.push({Name: $scope.nameInput, Position: $scope.positionInput});
        $scope.nameInput="";
        $scope.positionInput="";
    }

    }]);




    $scope.continueButton=function()
    {
        $scope.pow.Power= $scope.selected.value;
        $scope.="";
    }


    $scope.continuButton=function()
    {
        $scope.ip.IPaddress= $scope.ipInput;
        $scope.ipInput="";
    }


    $scope.submitButton=function()
    {
    $scope.results.push($scope.power);
    $scope.results.push($scope.ip);


/*
    $http({
    url: window.location.href + "http://requestb.in/1aj2z661",
    method: "POST",
    data: $scope.results,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    })
.success(function(data){
            alert("done");
    });
    }
    */


/*

var myApp = angular.module('app', [ 'ngRoute','poster' ]);

myApp.controller('Controller2', function($scope, $routeParams) {
    
$scope.inputName = $routeParams.x;


});

*/


/*

myApp.controller('myCtrl', function($scope, $routeParams) {
    $scope.things = [
    {'name':'Abstract'}, 
    {'name':'Publication'}, 
    {'name':'Inventor'}, 
    {'name':'Language'},
    {'name':'Source'},
    {'name':'Priority'}
    ];$scope.vico = $routeParams;});

myApp.config(function($routeProvider){
    $routeProvider.when('/home', {
        templateUrl : 'file1.html',
        controller : 'myCtrl'
    }).when('/page2', {
        templateUrl : 'file2.html',
        controller : 'myCtrl'
    }).otherwise({
        redirectTo : '/home'
    });
});


/*

  $scope.user = {
    things: ['user']
  };
  $scope.checkAll = function() {
    $scope.user.things = angular.copy($scope.things);
  };
  $scope.uncheckAll = function() {
    $scope.user.things = [];
  };
  $scope.checkFirst = function() {
    $scope.user.things.splice(0, $scope.user.things.length); 
    $scope.user.things.push('guest');
  };
});


/*
myApp.controller('SimpleArrayCtrl', ['$scope', function SimpleArrayCtrl($scope) {
  // fruits
  $scope.fruits = ['apple', 'orange', 'pear', 'naartjie'];

  // selected fruits
  $scope.selection = ['apple', 'pear'];

  // toggle selection for a given fruit by name
  $scope.toggleSelection = function toggleSelection(fruitName) {
    var idx = $scope.selection.indexOf(fruitName);

    // is currently selected
    if (idx > -1) {
      $scope.selection.splice(idx, 1);
    }

    // is newly selected
    else {
      $scope.selection.push(fruitName);
    }
  };
}]);

/*

myApp.controller('myCtrl', function($scope, $http){
    $http.get('myProducts.json').success(function(resp){
        $scope.phones = resp.results;
        console.log($scope.phones);
    });
   
    $scope.creat= function(k){
        $scope.phones;
        };
   
    $scope.delet= function(i){
        $scope.phones.splice(i,1);
        };
                      
    $scope.ad= function(){
            $scope.phones= $scope.phones.push("fullName", "shortName", "imageUrl", "price");
        };


});

/*

myApp.controller('controller1',function($scope){
  
$scope.storageArray = [];
$scope.caller = function(index) {
  $scope.storageArray.push($scope.dude);
  $scope.dude="";   
};
  
$scope.click1=function(i){
  $scope.storageArray.splice(i,1);
  
};
});

/*
myApp.controller("TodoCtrl", function($scope) {

    $scope.todos = [];
    $scope.addTodo = function(input) {
        var temp = {};
        temp.name = input;
        temp.sate = false;
        $scope.todos.push(temp);
        $scope.formTodolist = '';
    };
    $scope.deleteThis = function(input) {
        $scope.todos.splice(input, 1);
    }
    $scope.all = function() {
        $scope.dude = {};
    };
    
    //the pending task
    $scope.pending = function() {
        $scope.dude = {
            sate : false
        };

    };
    
    //the completed task
    $scope.complet = function() {
        $scope.dude = {
            sate : true
        };
    };
    
    //the remaing task
    $scope.remaining = function() {
        var list = 0;
        angular.forEach($scope.todos, function(todo) {
            list += todo.sate ? 0 : 1;
        });
        return list;
    };
});

/* SHOP CART

myApp.controller('test1', function($scope) {
	//my list with the first array
    $scope.lists = [
              { name:"ball",
    	      price:3
    	      },
    	      { name:"sock",
        	      price:22
        	  },
        	  { name:"paint",
            	      price:7
              },
              { name:"cone",
                	  price:5
              },
    	      
              ];
    
    //2nd array to push into.
  //when you select $scope.add will select. 
    $scope.items=[];
    $scope.add=0;
    $scope.push2=function(x){
     $scope.items.push($scope.lists[x]);
     
     //the $scope.add will add the prices and get the total sum.
     $scope.add=$scope.add+$scope.lists[x].price;
     
    }
	
});


QUIZ */

/*
myApp.controller("ctrl1", function($scope, $http){
	$scope.hider=true;
	$scope.x=[];
	$http.get('Practice.json')
	.success(function(data){
		$scope.x=data;
	});
	$scope.ind=0;
	$scope.next=function(){
		if($scope.ind<$scope.x.length-1)
		{$scope.ind++;}
		else{$scope.hider=false;}
	};
	$scope.resurn=function(){
		$scope.hider=true;
		$scope.ind=0;
	};
});
*/
/*
 planetSORTER 
myApp.controller('ctrl1', function($scope, $http){
	$scope.product=[];
	$scope.ad=function()
	{
		$scope.product.push($scope.fname.toLowerCase());
		$scope.fname="";
	}
	$scope.selected=function()
	{
		return $scope.bmt

	$scope.bmt=function(y)
	{
		return $scope.bmt;
		$scope.vlue="Hello";
	} 
});

myApp.filter('planetSorter',function(){
    var funk = function(input){
        var tem=[];
        var temp=['sun','mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];
        for (var x = 0 ; x <= temp.length; x++ )
        {for (var i = 0 ; i < input.length; i++ )
            {if (temp[x] == input[i] )
                {tem.push(input[i]);} //if statement closes
         } //second for-loop ends
        } //first for-loop ends


for(var k=0; k<input.length; k++)
{
	if (input[k] !== 'sun' && input[k] !=='mercury' &&  input[k] !=='venus' &&  input[k] !=='earth' && input[k] !=='mars' && input[k] !=='jupiter' && 
		input[k] !=='saturn' && input[k] !=='uranus' && input[k] !=='neptune' && input[k] !=='pluto'){tem.push(input[k]);}
}
        return tem;
        };
    return funk;
});



/* Example
var myApp= angular.module("my_app", ['ngRoute']);

myApp.config(function($routeProvider){
$routeProvider
.when("/View1",
{
	templateUrl:"Partials/View1.html",
	controller:"ctrl1"
})
.when("/view2",{
	templateUrl:"Partials/View2.html",
	controller:"ctrl1"
})
.otherwise({redirectTo: '/View1'});

});

myApp.controller("ctrl1", function($scope, $http) {
$http.get('Practice.json').
success(function(data, status, headers, config){
$scope.customers = data;
    }).
error(function(data, status, headers, config) {
      alert("AJAX failed");
    });

/*

myApp.controller("ctrl1", function($scope){
$scope.customers=[
{name:"John Smith", city:"Indiana"}, 
{name:"Dee Poli", city:"Bal Purian"}, 
{name:"Stuntsa Randhawa", city:"Bakersfield"}
];

*/

/*
$scope.addCustomer= function(){
$scope.customers.push( {name: $scope.newCustomer.name, city:
$scope.newCustomer.city})};
});

*/