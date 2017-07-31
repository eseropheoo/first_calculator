 var calc =prompt("What calculator would you like: (B)asic, (A)dvanced?", "(Q)uit")

 while(calc !== "Q") {
 	if (calc ==="B") {
 		
		var B =prompt("What function: + , - , * , /");
		var x =prompt("Enter the first number");
		var y =prompt("Enter the second number");
		x = parseFloat(x);
		y = parseFloat(y);

		switch (B) {
			case '+':
	    		var output = x + y;
	  		
	  			alert(output);
	 		
	 		break;

			case '-':
			var output = x - y;
			alert(output);
			
			break;

			case '*':
			var output = x * y;
			alert(output);
			break;

			case '/':
			var output = x / y;
			alert(output);
			break;

			default: 

	 	}	
	
	}  else if (calc === "A") {
 		
 			var A =prompt("What function: **, sqrt()");
			
			
				switch (A) {
					case "**":
					var x =prompt("Enter the first number");
					var y =prompt("Enter the second number");
					pow(x, y)
					break;

					case "sqrt()":
					var x =prompt("Enter the first number");
					sqrt(x)

					break;

				}
				
		}
		function pow(x, y) {
			x = parseFloat(x);
			y = parseFloat(y);	
			var output = Math.pow(x, y);
			alert(output);

		}

		function  sqrt(x) {
			x = parseFloat(x);
			var output = Math.sqrt(x);
			alert(output);
		}
		calc =prompt("What calculator would you like: (B)asic, (A)dvanced?, (Q)uit");
}
 		

 		
